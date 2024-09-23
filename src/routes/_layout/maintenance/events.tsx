import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { z } from "zod";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Loader2 } from "lucide-react";

import { MaintenancePlanningService } from "@/client";
import { ContentLayout } from "../../../components/common/layout/ContentLayout";
import NavigateToMaintenanceEventButton from "../../../components/asset-care/MaintenanceEvent/MaintenanceEventButton";
// import { Button } from "@/components/ui/button";

const localizer = momentLocalizer(moment);

const eventsSearchSchema = z.object({
  page: z.number().default(1),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  search: z.string().optional(),
});

type EventsSearch = z.infer<typeof eventsSearchSchema>;

export const Route = createFileRoute("/_layout/maintenance/events")({
  component: MaintenanceEvents,
  validateSearch: (search) => {
    return eventsSearchSchema.parse(search);
  },
});

const PER_PAGE = 10;

function getEventsQueryOptions(search: EventsSearch) {
  const filteredSearch = Object.fromEntries(
    Object.entries(search).filter(
      ([_, value]) => value !== undefined && value !== ""
    )
  );

  return {
    queryFn: () =>
      MaintenancePlanningService.getMaintenanceEventsApiV1MaintenancePlanningEventsGet(
        {
          skip: (Number(filteredSearch?.page ?? 1) - 1) * PER_PAGE,
          limit: PER_PAGE,
          ...filteredSearch,
        }
      ),
    queryKey: ["maitenance-events", filteredSearch],
  };
}

function MaintenanceCalendar() {
  const queryClient = useQueryClient();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({ search: (prev) => ({ ...prev, page }) });

  const {
    data: events,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getEventsQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const formattedEvents = events?.maintenance_events.map((event) => ({
    id: event.id,
    title: event.description,
    start: new Date(event.planned_start),
    end: new Date(event.planned_end),
  }));

  const handleSelectEvent = (event: any) => {
    setSelectedEvent(event);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  useEffect(() => {
    if (page === 1) {
      setPage(1);
    }
  }, [page]);

  useEffect(() => {
    if (page) {
      queryClient.invalidateQueries({ queryKey: ["maitenance-events"] });
    }
  }, [page]);

  return (
    <ContentLayout title="Maintenance Calendar">
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
            <BreadcrumbPage>Maintenance Calendar</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
        {/* <div className="flex space-between justify-center">
          <Link to="/maintenance/add-event">
            <Button
              variant="outline"
              className="flex w-full"
              disabled={isPending}
            >
              <FaPlus /> Event
            </Button>
          </Link>
        </div> */}
        {isPending || isPlaceholderData ? (
          <div className="flex justify-center items-center mx-auto my-8">
            <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
          </div>
        ) : (
          <div className="w-full my-4 p-4 rounded-lg shadow-lg bg-[hsl(var(--background))] dark:bg-[hsl(var(--background))]">
            <Calendar
              localizer={localizer}
              events={formattedEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, margin: "auto" }}
              onSelectEvent={handleSelectEvent}
              className="rbc-calendar"
            />
          </div>
        )}
      </div>
      <Dialog
        onOpenChange={handleClose}
        open={!!selectedEvent}
        modal
        defaultOpen={!!selectedEvent}
      >
        <DialogContent
          className="sm:max-w-md"
          aria-describedby={"modal-description"}
        >
          <DialogHeader>
            <DialogTitle className="text-lg font-medium leading-6 text-gray-900">
              {selectedEvent?.title}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea>
            <DialogDescription>
              <p className="text-sm text-gray-500">
                Start: {moment(selectedEvent?.start).format("LLLL")}
              </p>
              <p className="text-sm text-gray-500">
                End: {moment(selectedEvent?.end).format("LLLL")}
              </p>
              <p className="text-sm text-gray-500">
                {selectedEvent?.description}
              </p>
            </DialogDescription>
          </ScrollArea>
          <DialogFooter>
            <NavigateToMaintenanceEventButton eventId={selectedEvent?.id} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ContentLayout>
  );
}

function MaintenanceEvents() {
  return (
    <>
      <MaintenanceCalendar />
    </>
  );
}
