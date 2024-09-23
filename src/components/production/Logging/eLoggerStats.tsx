import { useQuery } from "@tanstack/react-query";
import { SiPagespeedinsights } from "react-icons/si";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import type { ProductionKanbanRead, ProductionLog } from "../../../client";
import {
  MdEventAvailable,
  MdHighQuality,
  MdOutput,
  MdCheckCircle,
  MdCancel,
} from "react-icons/md";
// import {
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
//   TooltipProvider,
// } from "@/components/ui/tooltip";

interface ELoggerStatsProps {
  log: ProductionLog;
  //   hidden?: boolean;
  kanban: ProductionKanbanRead;
}

const ELoggerStats = ({ log }: ELoggerStatsProps) => {
  const { data: kanban } = useQuery({
    queryKey: ["production-kanbans"],
    queryFn: () => log.kanban,
  });
  const kanban_production_rate =
    log.kanban.planned_quantity /
    // @ts-ignore
    ((kanban?.available_production_time - kanban?.planned_down_time) / 60);

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full gap-2 mt-4">
        <p className="text-sm text-gray-600 font-bold">At A Glance</p>
        <h6 className="text-lg font-bold">
          <span>
            {log.log_number} - {(log.total_production / 1000).toFixed(2)} t -{" "}
          </span>
          <span>{log.total_downtime} mins - </span>
          <span>{log.average_machine_speed.toFixed(2)} m/min - </span>
          <span>
            {(
              ((log.running_production_rate / kanban_production_rate) *
                100 *
                log.quality_rate *
                log.availability_rate) /
              10000
            ).toFixed(2)}{" "}
            %
          </span>
        </h6>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Production Rate */}
        <Card>
          <CardHeader>
            <MdOutput className="text-2xl" />
            <p className="text-lg text-gray-600">
              {log.running_production_rate.toFixed(2)} t/h
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <p className="text-lg">
              {log.running_production_rate > kanban_production_rate ? (
                <MdCheckCircle className="text-green-500" />
              ) : (
                <MdCancel className="text-red-500" />
              )}
            </p>
          </CardContent>
        </Card>

        {/* Performance */}
        <Card>
          <CardHeader>
            <SiPagespeedinsights className="text-2xl" />
            <p className="text-lg text-gray-600">
              {(
                (log.running_production_rate / kanban_production_rate) *
                100
              ).toFixed(2)}{" "}
              %
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <p className="text-lg">
              {log.performance > 90 ? (
                <MdCheckCircle className="text-green-500" />
              ) : (
                <MdCancel className="text-red-500" />
              )}
            </p>
          </CardContent>
        </Card>

        {/* Quality Rate */}
        <Card>
          <CardHeader>
            <MdHighQuality className="text-2xl" />
            <p className="text-lg text-gray-600">
              {log.quality_rate.toFixed(2)} %
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <p className="text-lg">
              {log.quality_rate > 98 ? (
                <MdCheckCircle className="text-green-500" />
              ) : (
                <MdCancel className="text-red-500" />
              )}
            </p>
          </CardContent>
        </Card>
        {/* Availability Rate */}
        <Card>
          <CardHeader>
            <MdEventAvailable className="text-2xl" />
            <p className="text-lg text-gray-600">
              {log.availability_rate.toFixed(2)} %
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <p className="text-lg">
              {log.availability_rate > 92 ? (
                <MdCheckCircle className="text-green-500" />
              ) : (
                <MdCancel className="text-red-500" />
              )}
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ELoggerStats;
