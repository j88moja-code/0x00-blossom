import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

import { type EquipmentInDB, EquipmentService } from "../../../client";
import EquipmentRelatedItems from "../../../components/asset-care/RelatedToEquipment/EquipmentRelatedItems";
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

// Define validation schema for equipmentId
const idNavigateSchema = z.object({
  equipmentId: z.preprocess((val) => Number(val), z.number().int().positive()),
});

// Define the route
export const Route = createFileRoute("/_layout/asset-care/$equipmentId")({
  component: IndividualEquipment,
});

// Function to get query options for fetching equipment by ID
function getEquipmentByIdQueryOptions({
  equipmentId,
}: {
  equipmentId: number;
}) {
  return {
    queryFn: () =>
      EquipmentService.getEquipmentByIdApiV1EquipmentIdGet({ id: equipmentId }),
    queryKey: ["equipment", equipmentId], // Use a more specific query key
  };
}

// Component to display individual equipment
function IndividualEquipment() {
  useTitle("Equipment");
  // Extract equipmentId from route params
  const params = Route.useParams();
  const result = idNavigateSchema.safeParse({
    equipmentId: params.equipmentId,
  });

  if (!result.success) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <h4 className="text-red-500">Error: Invalid equipment ID</h4>
      </div>
    );
  }

  const { equipmentId } = result.data;

  // Fetch equipment data
  const {
    data: equipment,
    error,
    isLoading,
  } = useQuery({
    ...getEquipmentByIdQueryOptions({ equipmentId }),
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

  return (
    <>
      <ContentLayout title="Equipment">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                {/* @ts-ignore */}
                <Link to="/asset-care/asset-regiter-equipment">
                  AR Equipment
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Equipment {equipment?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <EquipmentRelatedItems equipment={equipment as EquipmentInDB} />
      </ContentLayout>
    </>
  );
}
