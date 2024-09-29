import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// import { z } from "zod";

import InspectionCard from "./InspectionCard";
import Navbar from "../../../components/common/NavBar";
import { SafetyService } from "../../../client";

// const InspectionsSearchSchema = z.object({
//   page: z.number().catch(1),
// });

const PER_PAGE = 6;

function getInspectionsQueryOptions({ page }: { page: number }) {
  const validatedPage = Number.isFinite(page) && page > 0 ? page : 1;
  return {
    queryFn: () =>
      SafetyService.readSheInspectionApiV1SafetySheInspectionsGet({
        skip: (validatedPage - 1) * PER_PAGE,
        limit: PER_PAGE,
      }),
    queryKey: ["she-inspections", { page }],
  };
}

function InspectionsList() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    data: inspections,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getInspectionsQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage =
    !isPlaceholderData &&
    inspections &&
    inspections?.sheq_inspections?.length === PER_PAGE;

  const hasPreviousPage = page > 1;

  useEffect(() => {
    queryClient.prefetchInfiniteQuery(
      // @ts-ignore
      getInspectionsQueryOptions({ page: page + 1 })
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
        {inspections?.sheq_inspections.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {inspections?.sheq_inspections.map((inspection) => (
              <div key={inspection.id}>
                <InspectionCard inspectionData={inspection} />
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

export function Inspections() {
  return (
    <>
      {/* <ContentLayout title="OSHA Inspections">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/sheq">SHEQ</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>SHE Inspections</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      <Navbar type="Inspection" />
      <InspectionsList />
      {/* </ContentLayout> */}
    </>
  );
}
