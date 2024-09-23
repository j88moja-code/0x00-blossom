import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/common/layout/ContentLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { z } from "zod";

import KanbanCard from "../../../components/production/Kanban/KanbanCard";
import Navbar from "../../../components/common/NavBar";
import FormComponent from "@/components/common/form/search-and-filter";
import { ProductionKanbansService } from "../../../client";

const kanbansSearchSchema = z.object({
  page: z.number().default(1),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  search: z.string().optional(),
  completed: z.boolean().optional(),
  started: z.boolean().optional(),
});

type KanbansSearch = z.infer<typeof kanbansSearchSchema>;

export const Route = createFileRoute("/_layout/production/kanban")({
  component: ProdKanbans,
  validateSearch: (search) => {
    return kanbansSearchSchema.parse(search);
  },
});

const PER_PAGE = 6;

function getProdKanbanQueryOptions(search: KanbansSearch) {
  const filteredSearch = Object.fromEntries(
    Object.entries(search).filter(
      ([_, value]) => value !== undefined && value !== ""
    )
  );

  return {
    queryFn: () =>
      ProductionKanbansService.readAllKanbansApiV1ProductionKanbansGet({
        skip: (Number(filteredSearch?.page ?? 1) - 1) * PER_PAGE,
        limit: PER_PAGE,
        ...filteredSearch,
      }),
    queryKey: ["production-kanbans", filteredSearch],
  };
}

function ProdKanbanList() {
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({ search: (prev) => ({ ...prev, page }) });

  const [search, setSearch] = useState<KanbansSearch>({
    page: 1,
  });

  const {
    data: kanbans,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getProdKanbanQueryOptions(search),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && kanbans?.kanbans.length === PER_PAGE;
  const hasPreviousPage = search.page > 1;

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
      <FormComponent
        search={search}
        handleDateChange={handleDateChange}
        handleSearchChange={handleSearchChange}
        handleClearFilters={handleClearFilters}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
        {kanbans?.kanbans.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {kanbans.kanbans.map((kanban) => (
              <div key={kanban.id}>
                <KanbanCard kanban={kanban} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-700 dark:text-gray-300">
            No kanbans found
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

function ProdKanbans() {
  return (
    <ContentLayout title="Production Schedules">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/production/">Production</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Production Schedules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Navbar type="Kanban" />
      <ProdKanbanList />
    </ContentLayout>
  );
}
