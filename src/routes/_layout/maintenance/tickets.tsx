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

import MaintenanceTicketCard from "@/components/maintenance/RequestsAndTickets/MaintenanceTicketCard";
import { RequestsAndTicketsService } from "@/client";
import Navbar from "../../../components/common/NavBar";
import { ContentLayout } from "@/components/common/layout/ContentLayout";

// Define the service request search schema using zod
const maintenanceRequestSearchSchema = z.object({
  page: z.number().catch(1),
});

export const Route = createFileRoute("/_layout/maintenance/tickets")({
  component: MaintenanceTickets,
  validateSearch: (search) => {
    return maintenanceRequestSearchSchema.parse(search);
  },
});

const PER_PAGE = 6;

function getMaintenanceTicketQueryOptions({ page }: { page: number }) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      RequestsAndTicketsService.getMaintenanceTicketsApiV1MaintenanceTicketsGet(
        {
          skip: (validatedPage - 1) * PER_PAGE,
          limit: PER_PAGE,
        }
      ),
    queryKey: ["maintenance-tickets", { page }],
  };
}

function MaintenanceTicketList() {
  const queryClient = useQueryClient();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({ search: (prev) => ({ ...prev, page }) });
  const {
    data: tickets,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getMaintenanceTicketQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData && tickets?.tickets.length === PER_PAGE;
  const hasPreviousPage = page > 1;

  useEffect(() => {
    queryClient.prefetchQuery(
      getMaintenanceTicketQueryOptions({ page: page + 1 })
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
        {tickets?.tickets && tickets?.tickets.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tickets?.tickets.map((ticket) => (
              <div key={ticket.id}>
                <MaintenanceTicketCard ticket={ticket} />
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

function MaintenanceTickets() {
  return (
    <ContentLayout title="Maintenance Tickets">
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
              <Link to="/maintenance/requests">Requests</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Tickets</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Navbar type="Ticket" />
      <MaintenanceTicketList />
    </ContentLayout>
  );
}
