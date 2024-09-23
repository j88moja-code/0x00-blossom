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

function getElectricalIsolationsQueryOptions(page: number) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      PermitsService.readElectricalIsolationPermitsApiV1PermitsElectricalIsolationGet(
        {
          skip: (validatedPage - 1) * PER_PAGE,
          limit: PER_PAGE,
        }
      ),
    queryKey: ["electrical-isolation-permits", { page }],
  };
}

export function ElectricalIsolationsTable() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    data: electricalIsolations,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getElectricalIsolationsQueryOptions(page),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && electricalIsolations?.permits.length === PER_PAGE;

  const hasPreviousPage = page > 1;
  useEffect(() => {
    queryClient.prefetchQuery(getElectricalIsolationsQueryOptions(page + 1));
  }, [page]);

  return (
    <>
      <Table>
        <TableCaption>A list of electrical isolation permits.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell className="w-[5%]">PWT Id</TableCell>
            <TableCell>Supervisor Name</TableCell>
            <TableCell>Electrician Name</TableCell>
            <TableCell>Isolation Plan</TableCell>
            <TableCell colSpan={3}>Remarks</TableCell>
            <TableCell>Created at</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isPlaceholderData && electricalIsolations?.permits.length === 0 && (
            <TableRow>
              <TableCell colSpan={9} className="h-24 text-center">
                No electrical isolation permits to display at the moment.
              </TableCell>
            </TableRow>
          )}
          {isPending ? (
            <TableRow>
              <TableCell colSpan={9} className="h-24 text-center">
                <span className="loader"></span>
              </TableCell>
            </TableRow>
          ) : (
            electricalIsolations?.permits.map((permit) => (
              <TableRow key={permit.id}>
                <TableCell>{permit.maintenance_ptw_id}</TableCell>
                <TableCell>{permit.supervisor_name}</TableCell>
                <TableCell>{permit.electrician_name}</TableCell>
                <TableCell>{permit.isolation_plan}</TableCell>
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
