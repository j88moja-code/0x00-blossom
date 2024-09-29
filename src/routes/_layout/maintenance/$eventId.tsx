import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { MaintenancePlanningService } from "../../../client";
import { ContentLayout } from "../../../components/common/layout/ContentLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useTitle from "@/hooks/useTitle";

// import MaintenanceEvent from "../../../components/asset-care/MaintenanceEvent/MaintenanceEvent";

const idNavigateSchema = z.object({
  eventId: z.preprocess((val) => Number(val), z.number().int().positive()),
});

export const Route = createFileRoute("/_layout/maintenance/$eventId")({
  component: IndividualMaintenanceEvent,
});

function getMaintenanceByIdQueryOptions({ eventId }: { eventId: number }) {
  return {
    queryKey: ["maintenance-event", eventId],
    queryFn: () =>
      MaintenancePlanningService.getMaintenanceEventApiV1MaintenancePlanningEventsIdGet(
        {
          id: eventId,
        }
      ),
  };
}

function IndividualMaintenanceEvent() {
  useTitle("Maintenance Event");
  const params = Route.useParams();
  const result = idNavigateSchema.safeParse({
    eventId: params.eventId,
  });

  if (!result.success) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <h4 className="text-red-500">Invalid maintenance event ID</h4>
      </div>
    );
  }

  const { eventId } = result.data;

  const {
    data: maintenanceEvent,
    error,
    isLoading,
  } = useQuery({
    ...getMaintenanceByIdQueryOptions({ eventId }),
  });

  if (isLoading)
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  if (error)
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <h4 className="text-red-500">Something went wrong</h4>
      </div>
    );

  if (!maintenanceEvent) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <h4 className="text-red-500">Something went wrong</h4>
      </div>
    );
  }

  return (
    <>
      <ContentLayout title="Maintenance Event">
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
              <BreadcrumbLink asChild>
                {/* @ts-ignore */}
                <Link to="/maintenance/task-risk-assessment">
                  Task Risk Assessment
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                {/* @ts-ignore */}
                <Link to="/maintenance/permit-to-work">Permit To Work</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Maintenance Event: {maintenanceEvent?.event_number}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* <MaintenanceEvent
          maintenanceEvent={maintenanceEvent as ApiMaintenanceEvent}
        /> */}
      </ContentLayout>
    </>
  );
}
