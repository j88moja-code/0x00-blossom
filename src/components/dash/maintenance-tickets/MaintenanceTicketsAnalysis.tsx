import React from "react";
import { MaintenanceAnalysisService } from "@/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import CompletedCountChart from "./completed-analysis";
import TicketsDurationAnalysis from "./duration-analysis";

const MaintenanceTicketsAnalysis: React.FC = () => {
  // const queryClient = useQueryClient();
  // // Fetch data using useSuspenseQuery
  // React.useEffect(() => {
  //   queryClient.prefetchQuery(["maintenance-analysis"], () =>
  //     MaintenanceAnalysisService.getMaintenanceTicketsAnalysisApiV1MaintenanceAnalysisTicketsGet()
  //   );
  // }, [queryClient]);

  // Fetch data using useSuspenseQuery
  const { data, refetch, isLoading, error } = useSuspenseQuery({
    queryKey: ["maintenance-tickets-analysis"],
    queryFn: () =>
      MaintenanceAnalysisService.getMaintenanceTicketsAnalysisApiV1MaintenanceAnalysisTicketsGet(),
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
  const completedData = data?.data?.completed?.day_name_counts || {};
  // @ts-ignore
  const chartData = data?.data?.chart_data || {};

  return (
    <div className="grid grid-cols-1 gap-4 m-4">
      {error ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
          <h4 className="text-red-500">Something went wrong</h4>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 m-4">
          <div className="col-span-1">
            <CompletedCountChart day_name_counts={completedData} />
          </div>
          <div className="col-span-1">
            <TicketsDurationAnalysis chart_data={chartData} />
          </div>
          <div className="flex justify-end mb-4">
            <Button
              onClick={() => refetch()}
              variant="outline"
              className="default"
            >
              Refresh
            </Button>
          </div>
          {/* <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div> */}
        </div>
      )}
    </div>
  );
};

export default MaintenanceTicketsAnalysis;
