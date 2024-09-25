import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { z } from "zod";

import { EquipmentService } from "../../../client";
import EquipmentCard from "../../../components/asset-care/Equipment/EquipmentCard";
import Navbar from "../../../components/common/NavBar";
import { ContentLayout } from "../../../components/common/layout/ContentLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const equipmentSearchSchema = z.object({
  page: z.number().catch(1),
});

export const Route = createFileRoute(
  "/_layout/asset-care/asset-regiter-equipment"
)({
  component: Equipment,
  validateSearch: (search) => {
    return equipmentSearchSchema.parse(search);
  },
});

const PER_PAGE = 6;

function getEquipmentQueryOptions({ page }: { page: number }) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      EquipmentService.getAllEquipmentApiV1EquipmentGet({
        skip: (validatedPage - 1) * PER_PAGE,
        limit: PER_PAGE,
      }),
    queryKey: ["equipment", { page }],
  };
}

function EquipmentList() {
  const queryClient = useQueryClient();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({ search: (prev) => ({ ...prev, page }) });

  const {
    data: equipment,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getEquipmentQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && equipment?.equipments.length === PER_PAGE;
  const hasPreviousPage = page > 1;

  useEffect(() => {
    queryClient.prefetchQuery(getEquipmentQueryOptions({ page: page + 1 }));
  }, [page]);

  useEffect(() => {
    // If page is refreshed or the current path is not the default path
    if (window.location.pathname !== Route.fullPath) {
      // Redirect to the default path
      // @ts-ignore
      navigate(Route.fullPath, { replace: true });
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
        {equipment?.equipments && equipment?.equipments.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {equipment?.equipments.map((equipment) => (
              <div key={equipment.id}>
                <EquipmentCard equipment={equipment} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-700 dark:text-gray-300">
            No equipment found
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

function Equipment() {
  return (
    <>
      <ContentLayout title="AR-Equipment">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Equipment</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Navbar type="Equipment" />
        <EquipmentList />
      </ContentLayout>
    </>
  );
}
