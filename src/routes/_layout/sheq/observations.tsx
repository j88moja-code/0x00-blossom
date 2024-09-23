import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "../../../components/common/layout/ContentLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { z } from "zod";
import SafetyObservationCard from "../../../components/sheq/SafetyObservationCard";
import Navbar from "../../../components/common/NavBar";
import { SafetyService } from "../../../client";

const observationsSearchSchema = z.object({
  page: z.number().catch(1),
});

export const Route = createFileRoute("/_layout/sheq/observations")({
  component: SafetyObservations,
  validateSearch: (search) => {
    return observationsSearchSchema.parse(search);
  },
});

const PER_PAGE = 6;

function getSafetyObservationsQueryOptions({ page }: { page: number }) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      SafetyService.readSafetyObservationsApiV1SafetySafetyObservationsGet({
        skip: (validatedPage - 1) * PER_PAGE,
        limit: PER_PAGE,
      }),
    queryKey: ["safety-observations", { page }],
  };
}

function ObservationsList() {
  const queryClient = useQueryClient();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({ search: (prev) => ({ ...prev, page }) });

  const {
    data: safety_observations,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getSafetyObservationsQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData &&
    safety_observations?.safety_observations.length === PER_PAGE;
  const hasPreviousPage = page > 1;

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
        {safety_observations?.safety_observations.length ? (
          safety_observations?.safety_observations.map((observation) => (
            <div key={observation.id}>
              <SafetyObservationCard observation={observation} />
            </div>
          ))
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

function SafetyObservations() {
  return (
    <>
      <ContentLayout title="Safety Observations">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/sheq">SHEQ</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Safety Observations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Navbar type="Safety Observation" />
        <ObservationsList />
      </ContentLayout>
    </>
  );
}
