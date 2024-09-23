import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import IncidentCard from "./IncidentCard";
import Navbar from "../../../components/common/NavBar";
import { SafetyService } from "../../../client";

// const incidentsSearchSchema = z.object({
//   page: z.number().catch(1),
// });

const PER_PAGE = 6;

function getIncidentsQueryOptions({ page }: { page: number }) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      SafetyService.readSheIncidentsApiV1SafetySheIncidentsGet({
        skip: (validatedPage - 1) * PER_PAGE,
        limit: PER_PAGE,
      }),
    queryKey: ["she-incidents", { page }],
  };
}

function IncidentsList() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    data: incidents,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getIncidentsQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData &&
    incidents &&
    incidents?.she_incidents?.length === PER_PAGE;

  const hasPreviousPage = page > 1;

  useEffect(() => {
    queryClient.prefetchInfiniteQuery(
      // @ts-ignore
      getIncidentsQueryOptions({ page: page + 1 })
    );
  }, [page]);

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
        {incidents?.she_incidents.length ? (
          incidents?.she_incidents.map((incident) => (
            <div key={incident.id}>
              <IncidentCard incidentData={incident} />
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-700 dark:text-gray-300">
            No data found.
          </p>
        )}
      </div>
      <div className="flex justify-between my-4">
        <Button
          disabled={!hasPreviousPage}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <p className="text-lg font-bold">Page: {page}</p>
        <Button
          disabled={!hasNextPage}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export function Incidents() {
  return (
    <>
      <Navbar type="Incident" />
      <IncidentsList />
    </>
  );
}
