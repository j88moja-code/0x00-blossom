import React from "react";
import { MaintenanceAnalysisService } from "@/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import CategoryCountChart from "./category-analysis";
import DepartmentCountChart from "./department-analysis";
import EquipmentMRAnalysis from "./equipment_maintenance_requests_analysis";
import StatusChart from "./status_analysis";
import TypeCountChart from "./type-analysis";

const MaintenanceAnalysisCharts: React.FC = () => {
  // const queryClient = useQueryClient();
  // React.useEffect(() => {
  //   queryClient.prefetchQuery(["maintenance-analysis"], () =>
  //     MaintenanceAnalysisService.getMaintenanceRequestsAnalysisApiV1MaintenanceAnalysisRequestsGet()
  //   );
  // }, [queryClient]);

  // Fetch data using useSuspenseQuery
  const { data, refetch, isLoading, error } = useSuspenseQuery({
    queryKey: ["maintenance-requests-analysis"],
    queryFn: () =>
      MaintenanceAnalysisService.getMaintenanceRequestsAnalysisApiV1MaintenanceAnalysisRequestsGet(),
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <h4 className="text-red-500">Something went wrong</h4>
      </div>
    );
  }

  // Data safety with optional chaining and default values
  // @ts-ignore
  const statusData = data?.data?.status?.day_name_counts || {};
  // @ts-ignore
  const categoryData = data?.data?.category?.day_name_counts || {};
  // @ts-ignore
  const departmentData = data?.data?.department?.day_name_counts || {};
  // @ts-ignore
  const typeData = data?.data?.request_type?.day_name_counts || {};
  // @ts-ignore
  const equipmentData = data?.data?.equipment_histogram || [];

  return (
    <>
      {error ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
          <h4 className="text-red-500">Something went wrong</h4>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 m-4">
          <div className="col-span-1">
            <StatusChart day_name_counts={statusData} />
          </div>
          <div className="col-span-1">
            <CategoryCountChart day_name_counts={categoryData} />
          </div>
          <div className="col-span-1">
            <DepartmentCountChart day_name_counts={departmentData} />
          </div>
          <div className="col-span-1">
            <TypeCountChart day_name_counts={typeData} />
          </div>
          <div className="col-span-1">
            <EquipmentMRAnalysis equipment_mr_analysis={equipmentData} />
          </div>
          <div className="flex justify-end mb-4">
            <Button
              onClick={() => refetch()}
              variant="outline"
              className="btn btn-primary"
            >
              Refresh
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MaintenanceAnalysisCharts;
