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

function getConfinedSpacesQueryOptions(page: number) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      PermitsService.readConfinedSpacePermitsApiV1PermitsConfinedSpacePermitsGet(
        {
          skip: (validatedPage - 1) * PER_PAGE,
          limit: PER_PAGE,
        }
      ),
    queryKey: ["confined-space-permits", { page }],
  };
}

export function ConfinedSpacesTable() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    data: confinedSpacePermits,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getConfinedSpacesQueryOptions(page),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && confinedSpacePermits?.permits.length === PER_PAGE;

  const hasPreviousPage = page > 1;
  useEffect(() => {
    queryClient.prefetchQuery(getConfinedSpacesQueryOptions(page + 1));
  }, [page]);

  return (
    <>
      <Table>
        <TableCaption>A list of Confined Spaces Permits.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell className="w-[5%]">PWT Id</TableCell>
            <TableCell>Supervisor Name</TableCell>
            <TableCell>Entrant Name</TableCell>
            <TableCell>Rescue Plan</TableCell>
            <TableCell colSpan={3}>Remarks</TableCell>
            <TableCell>Created at</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isPlaceholderData && confinedSpacePermits?.permits.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No Confined Spaces Permits to display at the moment
              </TableCell>
            </TableRow>
          )}

          {isPending ? (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                <span className="loader"></span>
              </TableCell>
            </TableRow>
          ) : (
            confinedSpacePermits?.permits.map((permit) => (
              <TableRow key={permit.id}>
                <TableCell>{permit.maintenance_ptw_id}</TableCell>
                <TableCell>{permit.supervisor_name}</TableCell>
                <TableCell>{permit.entrant_name}</TableCell>
                <TableCell>{permit.rescue_plan}</TableCell>
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
