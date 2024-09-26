import { useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import ItemCard from "../../../components/stores/Items/ItemsCard";
import Navbar from "../../../components/common/NavBar";
import { ContentLayout } from "@/components/common/layout/ContentLayout";
import { StoresService } from "../../../client";
import useTitle from "@/hooks/useTitle";

// Define the item search schema using zod
const itemSearchSchema = z.object({
  page: z.number().default(1),
  search: z.string().optional(),
});

export const Route = createFileRoute("/_layout/stores/items")({
  component: Items,
  validateSearch: (search) => {
    return itemSearchSchema.parse(search);
  },
});

const PER_PAGE = 9;

function getItemQueryOptions({ page, search }: { page: number; search: any }) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;

  return {
    queryFn: () =>
      StoresService.getAllItemsApiV1StoresItemsGet({
        skip: (validatedPage - 1) * PER_PAGE,
        limit: PER_PAGE,
        ...search,
      }),
    queryKey: ["spare-items", { page, search }],
  };
}

function ItemsList() {
  const queryClient = useQueryClient();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({ search: (prev) => ({ ...prev, page }) });

  const {
    data: spares,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getItemQueryOptions({ page, search: "" }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage = !isPlaceholderData && spares?.items.length === PER_PAGE;
  const hasPreviousPage = page > 1;

  useEffect(() => {
    queryClient.prefetchQuery(
      getItemQueryOptions({ page: page + 1, search: "" })
    );
  }, [page]);
  useEffect(() => {
    // Check if the current path is not the default path
    if (window.location.pathname !== Route.fullPath) {
      // Redirect to the default path
      // @ts-ignore
      navigate({ to: Route.fullPath, replace: true });
    }
  }, [navigate]);

  if (isPending) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
        {spares?.items && spares?.items.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {spares?.items.map((item) => (
              <div key={item.id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-700 dark:text-gray-300">
            No data found.
          </p>
        )}
      </div>
      <div className="flex justify-between my-4">
        <Button onClick={() => setPage(page - 1)} disabled={!hasPreviousPage}>
          Previous
        </Button>
        <p className="text-lg font-bold">Page: {page}</p>
        <Button disabled={!hasNextPage} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </>
  );
}

function Items() {
  useTitle("Stores -Items");
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
            <BreadcrumbPage>Items</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Navbar type="Spare" />
      <ItemsList />
    </ContentLayout>
  );
}
