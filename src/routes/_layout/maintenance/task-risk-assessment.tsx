import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { z } from "zod";

import { RequestsAndTicketsService } from "@/client";
import RiskAssessmentCard from "../../../components/maintenance/TRAandPTW/TRACard";
import Navbar from "../../../components/common/NavBar";
import { ContentLayout } from "@/components/common/layout/ContentLayout";

const riskAssessmentsSearchSchema = z.object({
  page: z.number().catch(1),
});

export const Route = createFileRoute(
  "/_layout/maintenance/task-risk-assessment"
)({
  component: RiskAssessments,
  validateSearch: (search) => {
    return riskAssessmentsSearchSchema.parse(search);
  },
});

const PER_PAGE = 6;

function getRiskAssessmentsQueryOptions({ page }: { page: number }) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      RequestsAndTicketsService.getMaintenanceTraApiV1MaintenanceTraGet({
        skip: (validatedPage - 1) * PER_PAGE,
        limit: PER_PAGE,
      }),
    queryKey: ["maintenance-tra", { page }],
  };
}

function RiskAssessmentsList() {
  const queryClient = useQueryClient();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (newPage: number) =>
    navigate({ search: (prev) => ({ ...prev, page: newPage }) });

  const {
    data: risk_assessments,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getRiskAssessmentsQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && risk_assessments?.m_steps.length === PER_PAGE;
  const hasPreviousPage = page > 1;

  useEffect(() => {
    queryClient.prefetchQuery(
      getRiskAssessmentsQueryOptions({ page: page + 1 })
    );
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
        {risk_assessments?.m_steps && risk_assessments?.m_steps.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {risk_assessments?.m_steps.map((risk_assessment) => (
              <div key={risk_assessment.id}>
                <RiskAssessmentCard maintenanceTRA={risk_assessment} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-700 dark:text-gray-300">
            No risk assessments found
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

function RiskAssessments() {
  return (
    <ContentLayout title="Task Risk Assessment">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/maintenance/">Maintenance</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/maintenance/rm-tickets">RM Tickets</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/maintenance/pm-tickets">PM Tickets</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Task Risk Assessment</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Navbar type="TRA" />
      <RiskAssessmentsList />
    </ContentLayout>
  );
}
