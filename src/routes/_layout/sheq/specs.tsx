// @ts-nocheck
import { useState, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import Skeleton from "@mui/material/Skeleton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
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
  const queryClient = useQueryClient();
  const { page } = Route.useSearch();
  const [search, setSearch] = useState<SpecsSearch>({
    page: 1,
  });
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({ search: (prev) => ({ ...prev, page }) });

  const {
    data: specs,
    isFetching,
    isLoading,
  } = useQuery({
    ...getSpecsQueryOptions(search),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage = specs && specs?.specifications?.length === PER_PAGE;
  const hasPreviousPage = search.page > 1;

  const handlePageChange = (newPage: number) => {
    setSearch((prev) => ({ ...prev, page: newPage }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      page: 1,
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      page: 1,
    }));
  };

  const handleClearFilters = () => {
    setSearch({ page: 1 });
  };
  useEffect(() => {
    if (hasNextPage) {
      queryClient.prefetchQuery(
        getSafetyObservationsQueryOptions({ page: page + 1 })
      );
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

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
      <div className="mt-4 flex flex-col space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Input
              type="date"
              name="start_date"
              label="Start Date"
              placeholder="Start Date"
              value={search.start_date}
              onChange={handleDateChange}
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="date"
              name="end_date"
              label="End Date"
              placeholder="End Date"
              value={search.end_date}
              onChange={handleDateChange}
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="text"
              name="search"
              label="Search"
              placeholder="Search"
              value={search.search}
              onChange={handleSearchChange}
              className="w-full"
            />
          </div>
          <div>
            <Select
              name="active"
              value={search.active}
              onChange={handleSearchChange}
              className="w-full"
            >
              <SelectContent>
                <SelectItem value={true}>Active</SelectItem>
                <SelectItem value={false}>Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1 flex justify-end">
            <Button className="w-full sm:w-auto" onClick={handleClearFilters}>
              Clear Filters
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {isLoading || isFetching
            ? Array.from({ length: PER_PAGE }).map((_, index) => (
                <div className="w-full" key={index} role="status">
                  <Skeleton className="h-48" />
                </div>
              ))
            : specs.specifications.map((spec) => (
                <div key={spec.id} className="w-full">
                  {/* Replace with your actual component */}
                  <SpecCard entry={spec} />
                </div>
              ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button
            onClick={() => handlePageChange(search.page - 1)}
            disabled={!hasPreviousPage}
          >
            Previous
          </Button>
          <p className="text-lg font-bold">Page: {search.page}</p>
          <Button
            onClick={() => handlePageChange(search.page + 1)}
            disabled={!hasNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
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
