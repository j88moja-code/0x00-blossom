import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { MaintenanceSettingsService } from "../../../client";
// import ActionsMenu from "@/components/common/ActionsMenu";

const PER_PAGE = 10;

function getDepartmentsQueryOptions({ page }: { page: number }) {
  // const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      MaintenanceSettingsService.getDepartmentsApiV1MaintenanceDepartmentsGet(),
    queryKey: ["maintenance-departments", { page }],
  };
}

export function DepartmentListTable() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    data: departments,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getDepartmentsQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && departments?.departments.length === PER_PAGE;

  const hasPreviousPage = page > 1;
  useEffect(() => {
    queryClient.prefetchQuery(getDepartmentsQueryOptions({ page: page + 1 }));
  }, [page]);

  return (
    <>
      <Table>
        <TableCaption>A list of maintenance departments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead colSpan={2}>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isPending ? (
            <TableRow>
              <TableCell colSpan={4}>
                {Array.from({ length: PER_PAGE }).map((_, index) => (
                  <div key={index}>
                    <span className="loader"></span>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ) : (
            departments?.departments.map((dept) => (
              <TableRow key={dept.id}>
                <TableCell className="font-medium">{dept.name}</TableCell>
                <TableCell colSpan={2}>{dept.description}</TableCell>
                <TableCell className="text-right">
                  {/* <ActionsMenu
                    type="Category"
                    value={category}
                    disabled
                  /> */}
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
