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

import SpecCard from "../../../components/production/Specification/SpecCard";
import Navbar from "../../../components/common/NavBar";
import { ContentLayout } from "../../../components/common/layout/ContentLayout";
import { ProductionSpecificationsService } from "../../../client";
import useTitle from "@/hooks/useTitle";

const specsSearchSchema = z.object({
  page: z.number().default(1),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  search: z.string().optional(),
  active: z.boolean().optional(),
});

type SpecsSearch = z.infer<typeof specsSearchSchema>;

export const Route = createFileRoute("/_layout/sheq/specs")({
  component: Specs,
  validateSearch: (search) => {
    return specsSearchSchema.parse(search);
  },
});

const PER_PAGE = 6;

function getSpecsQueryOptions(search: SpecsSearch) {
  const filteredSearch = Object.fromEntries(
    Object.entries(search).filter(
      ([_, value]) => value !== undefined && value !== ""
    )
  );

  return {
    queryFn: () =>
      ProductionSpecificationsService.getAllSpecificationsApiV1ProductionSpecificationsGet(
        {
          skip: (Number(filteredSearch?.page ?? 1) - 1) * PER_PAGE,
          limit: PER_PAGE,
          ...filteredSearch,
        }
      ),
    queryKey: ["specifications", filteredSearch],
  };
}

function SpecList() {
  useTitle("SHEQ - Product Specifications");
  const queryClient = useQueryClient();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({ search: (prev) => ({ ...prev, page }) });

  const {
    data: specs,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getSpecsQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && specs?.specifications.length === PER_PAGE;
  const hasPreviousPage = page > 1;

  useEffect(() => {
    if (hasNextPage) {
      queryClient.prefetchQuery(getSpecsQueryOptions({ page: page + 1 }));
    }
  }, [page, queryClient]);
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
        {specs?.specifications.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {specs.specifications.map((spec) => (
              <div key={spec.id}>
                {/* Replace with your actual component */}
                <SpecCard entry={spec} />
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

function Specs() {
  useTitle("SHEQ - Product Specifications");
  return (
    <>
      <ContentLayout title="Product Specifications">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/sheq">SHEQ</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Product Specifications</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Navbar type="Product Specification" />
        <SpecList />
      </ContentLayout>
    </>
  );
}
