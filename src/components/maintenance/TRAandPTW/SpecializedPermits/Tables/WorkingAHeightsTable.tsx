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

function getWorkingAtHeightsQueryOptions({ page = 1 }: { page?: number }) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      PermitsService.readWorkingAtHeightPermitsApiV1PermitsWorkingAtHeightPermitsGet(
        {
          skip: (validatedPage - 1) * PER_PAGE,
          limit: PER_PAGE,
        }
      ),
    queryKey: ["work-at-height-permits", { page }],
  };
}

export function WorkingAtHeightsTable() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    data: workingAtHeights,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getWorkingAtHeightsQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && workingAtHeights?.permits.length === PER_PAGE;

  const hasPreviousPage = page > 1;
  useEffect(() => {
    queryClient.prefetchQuery(
      getWorkingAtHeightsQueryOptions({ page: page + 1 })
    );
  }, [page]);

  return (
    <>
      <Table>
        <TableCaption>A list of Working at Heights Permits.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell className="w-[5%]">PWT Id</TableCell>
            <TableCell>Supervisor Name</TableCell>
            <TableCell>Worker Name</TableCell>
            <TableCell>Type of Working At Height</TableCell>
            <TableCell>Fall Protection Required?</TableCell>
            <TableCell>Type of Fall Protection</TableCell>
            <TableCell colSpan={3}>Remarks</TableCell>
            <TableCell>Created at</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isPlaceholderData && workingAtHeights?.permits.length === 0 && (
            <TableCell colSpan={8} className="h-24 text-center">
              No working at heights permits to display at the moment
            </TableCell>
          )}
          {isPending ? (
            <TableRow>
              <TableCell colSpan={8} className="h-24 text-center">
                <span className="loader"></span>
              </TableCell>
            </TableRow>
          ) : (
            workingAtHeights?.permits.map((permit) => (
              <TableRow key={permit.id}>
                <TableCell className="w-[5%]">{permit.id}</TableCell>
                <TableCell>{permit.supervisor_name}</TableCell>
                <TableCell>{permit.worker_name}</TableCell>
                <TableCell>{permit.work_at_height_type}</TableCell>
                <TableCell className="text-right">
                  {permit.fall_protection_required ? "Yes" : "No"}
                </TableCell>
                <TableCell>{permit.fall_protection_type}</TableCell>
                <TableCell colSpan={3}>{permit.remarks}</TableCell>
                <TableCell>
                  {new Date(permit.created_at).toLocaleString()}
                </TableCell>
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
