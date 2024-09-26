import { useQuery, useQueryClient } from "@tanstack/react-query";
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

import { z } from "zod";

import { StoresService } from "../../../client";
import Navbar from "../../../components/common/NavBar";
import ActionsMenu from "../../../components/common/ActionsMenu";
import { ContentLayout } from "@/components/common/layout/ContentLayout";
import useTitle from "@/hooks/useTitle";

const inventorySearchSchema = z.object({
  page: z.number().catch(1),
});

type InventorySearch = z.infer<typeof inventorySearchSchema>;
export const Route = createFileRoute("/_layout/stores/inventory")({
  component: InventoryList,
  validateSearch: (search) => {
    inventorySearchSchema.parse(search);
  },
});

const PER_PAGE = 10;

function getInventoryQueryOptions(search: InventorySearch) {
  const filteredSearch = Object.fromEntries(
    Object.entries(search).filter(
      ([_, value]) => value !== undefined && value !== 0
    )
  );
  return {
    queryFn: () =>
      StoresService.getAllInventoryApiV1StoresInventoryGet({
        skip: (Number(filteredSearch?.page ?? 1) - 1) * PER_PAGE,
        limit: PER_PAGE,
        ...filteredSearch,
      }),
    queryKey: ["inventory", filteredSearch],
  };
}

function InventoryTable() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    data: inventory,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getInventoryQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && inventory?.inventory.length === PER_PAGE;

  const hasPreviousPage = page > 1;

  useEffect(() => {
    queryClient.prefetchQuery(getInventoryQueryOptions({ page: page + 1 }));
  }, [page]);

  if (isPending) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Table>
        <TableCaption>A list of all spare inventory.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Item ID</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Last Ordered Date</TableHead>
            <TableHead>Reorder Level</TableHead>
            <TableHead>Reorder Quantity</TableHead>
            <TableHead>Reserved Quantity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory?.inventory.length ? (
            inventory?.inventory?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.item_id}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  {new Date(item?.last_order_date ?? "").toLocaleString()}
                </TableCell>
                <TableCell>{item.reorder_level}</TableCell>
                <TableCell>{item.reorder_quantity}</TableCell>
                <TableCell>{item.reserved_quantity ?? 0}</TableCell>
                <TableCell>
                  <ActionsMenu type="Inventory" value={item} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7}>No inventory found.</TableCell>
            </TableRow>
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

function InventoryList() {
  useTitle("Stores -Inventory");
  return (
    <ContentLayout title="Inventory">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/stores/">Stores</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/stores/categories">Categories</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/stores/items">Items</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Inventory</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Navbar type="Inventory" />
      <InventoryTable />
    </ContentLayout>
  );
}

export default InventoryList;
