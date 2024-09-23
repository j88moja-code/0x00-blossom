import { EquipmentAnalysisService } from "@/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import EquipmentSummary from "./summary";
import TopTenRPN from "./rank-by-rpn";
import EquipmentSDOChart from "./sod_analysis";
import DowntimeCounter from "./downtime-counter";
import MaintenanceRequestsCounter from "./maintenance-request-counter";

const EquipmentAnalysisCharts = () => {
  const {
    data: chartData,
    isLoading,
    refetch,
    error,
  } = useSuspenseQuery({
    queryKey: ["equipment-analysis"],
    queryFn: () =>
      EquipmentAnalysisService.getEquipmentAnalysisApiV1EquipmentAnalysisGet(),
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  const topTenRpnStats = chartData.top_ten_rpn;
  const topTenSDO = chartData.top_ten_sdo;
  const summary_stats = chartData.status_summary;
  const downtime_analysis = chartData.downtimes_analysis;
  const maintenance_request_analysis = chartData.maintenance_requests_analysis;
  //  Data for top ten RPN
  // const topTenRpnValues = topTenRpnStats.data.map((item) => item.rpn);
  // const topTenRpnLabels = topTenRpnStats.data.map((item) => item.asset_number);

  return (
    <>
      {error ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
          <h4 className="text-red-500">Something went wrong</h4>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 m-4">
          <div className="col-span-1">
            {/* First chart: Equipment Analysis by Status */}
            {/* @ts-ignore */}
            <EquipmentSummary summary_stats={summary_stats} />
          </div>
          <div className="col-span-1">
            {/* Second chart: Downtime Analysis */}
            <DowntimeCounter downtimes_analysis={downtime_analysis} />
          </div>
          <div className="col-span-1">
            {/* Third chart: Maintenance Request Analysis */}
            <MaintenanceRequestsCounter
              maintenance_analysis={maintenance_request_analysis}
            />
          </div>
          <div className="col-span-1">
            {/* Fourth chart: Top Ten RPN */}
            <TopTenRPN top_ten_rpn={topTenRpnStats} />
          </div>
          <div className="col-span-1">
            {/* Fifth chart: Top Ten SDO */}
            <EquipmentSDOChart top_ten_sdo={topTenSDO} />
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
        </div>
      )}
    </>
  );
};

export default EquipmentAnalysisCharts;
