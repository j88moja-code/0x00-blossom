import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { PermitsService } from "@/client";

const PER_PAGE = 10;

function getRiggingAndLiftingsQueryOptions({ page = 1 }: { page?: number }) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      PermitsService.readRiggingAndLiftingPermitsApiV1PermitsRiggingAndLiftingPermitsGet(
        {
          skip: (validatedPage - 1) * PER_PAGE,
          limit: PER_PAGE,
        }
      ),
    queryKey: ["rigging-and-lifting-permits", { page }],
  };
}

export function RiggingAndLiftingsTable() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    data: riggingAndLiftingsPermits,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getRiggingAndLiftingsQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData &&
    riggingAndLiftingsPermits?.permits.length === PER_PAGE;

  const hasPreviousPage = page > 1;

  useEffect(() => {
    queryClient.prefetchQuery(
      getRiggingAndLiftingsQueryOptions({ page: page + 1 })
    );
  }, [page]);

  return (
    <>
      <Table>
        <TableCaption>A list of Rigging and Liftings Permits.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell className="w-[5%]">PWT Id</TableCell>
            <TableCell>Supervisor Name</TableCell>
            <TableCell>Rigger Name</TableCell>
            <TableCell>Load Description</TableCell>
            <TableCell>Lifting Plan</TableCell>
            <TableCell colSpan={3}>Remarks</TableCell>
            <TableCell>Created at</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isPlaceholderData &&
            riggingAndLiftingsPermits?.permits.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No rigging and liftings permits to display at the moment
                </TableCell>
              </TableRow>
            )}
          {isPending ? (
            <TableRow>
              <TableCell colSpan={8} className="h-24 text-center">
                <span className="loader"></span>
              </TableCell>
            </TableRow>
          ) : (
            riggingAndLiftingsPermits?.permits.map((permit) => (
              <TableRow key={permit.id}>
                <TableCell>{permit.id}</TableCell>
                <TableCell>{permit.supervisor_name}</TableCell>
                <TableCell>{permit.rigger_name}</TableCell>
                <TableCell>{permit.load_description}</TableCell>
                <TableCell>{permit.lifting_plan}</TableCell>
                <TableCell colSpan={3}>{permit.remarks}</TableCell>
                <TableCell>{permit.created_at}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <TableFooter>
        <Button
          variant="outline"
          disabled={!hasPreviousPage}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          disabled={!hasNextPage}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </TableFooter>
    </>
  );
}
