import React from "react";
import { ProductionAnalysisService } from "@/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import ProductionAnalysisChart from "./production-kpis";
import SafetyStatsCounter from "./safety-stats-counter";

import { Button } from "@/components/ui/button";

const MainDashboard: React.FC = () => {
  // const queryClient = useQueryClient();
  // React.useEffect(() => {
  //   queryClient.prefetchQuery(["equipment-analysis"], () =>
  //     EquipmentAnalysisService.getEquipmentAnalysisApiV1EquipmentAnalysisGet()
  //   );
  // }, [queryClient]);

  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: ["production-analysis"],
    queryFn: () =>
      ProductionAnalysisService.getProductionAnalysisApiV1AnalyticsProductionGet(),
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

  // @ts-ignore
  const production_analysis = data?.data;

  if (!production_analysis) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <h4 className="text-red-500">No data available</h4>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 m-4">
      <div className="col-span-1">
        {/* <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
          Safety
        </h4> */}
        <SafetyStatsCounter />
      </div>
      <div className="col-span-1">
        {/* <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
          Production KPIs
        </h4> */}
        <ProductionAnalysisChart production_kpis={production_analysis} />
      </div>
      <div className="col-span-1">
        <div className="flex justify-end mb-4">
          <Button onClick={() => {}} variant="outline" className="default">
            Refresh
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
