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

function getHotWorksQueryOptions(page: number) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      PermitsService.readHotWorkPermitsApiV1PermitsHotWorkPermitsGet({
        skip: (validatedPage - 1) * PER_PAGE,
        limit: PER_PAGE,
      }),
    queryKey: ["hot-work-permits", { page }],
  };
}

export function HotWorksTable() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    data: hotWorks,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getHotWorksQueryOptions(page),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && hotWorks?.permits.length === PER_PAGE;
  const hasPreviousPage = page > 1;

  useEffect(() => {
    queryClient.prefetchQuery(getHotWorksQueryOptions(page + 1));
  }, [page]);

  return (
    <>
      <Table>
        <TableCaption>A list of Hot Works Permits.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell className="w-[5%]">PWT Id</TableCell>
            <TableCell>Supervisor Name</TableCell>
            <TableCell>Hot Work Type</TableCell>
            <TableCell className="text-right">Fire Watch Required?</TableCell>
            <TableCell>Fire Watch Name</TableCell>
            <TableCell>Type of Fire Extinguisher</TableCell>
            <TableCell colSpan={3}>Remarks</TableCell>
            <TableCell>Created at</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isPlaceholderData && hotWorks?.permits.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No hot works permits to display at the moment
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
            hotWorks?.permits.map((permit) => (
              <TableRow key={permit.id}>
                <TableCell>{permit.maintenance_ptw_id}</TableCell>
                <TableCell>{permit.supervisor_name}</TableCell>
                <TableCell>{permit.hot_work_type}</TableCell>
                <TableCell className="text-right">
                  {permit.fire_watch_required ? "Yes" : "No"}
                </TableCell>
                <TableCell>{permit.fire_watch_name}</TableCell>
                <TableCell>{permit.type_of_fire_extinguisher}</TableCell>
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
