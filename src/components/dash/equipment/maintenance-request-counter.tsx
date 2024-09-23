import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type MaintenanceRequestsCounterProps = {
  maintenance_analysis?: {
    labels?: string[];
    data?: Array<{
      asset_number: string;
      maintenance_request: number;
    }>;
    label?: string;
  };
};

const MaintenanceRequestsCounter: React.FC<MaintenanceRequestsCounterProps> = ({
  maintenance_analysis,
}) => {
  // Format chart data
  const chartConfig: ChartConfig = {
    asset_number: {
      label: "Asset Number",
    },
    maintenance_request: {
      label: "Maintenance Requests",
      color: "hsl(var(--chart-1))",
    },
  };
  // Ensure `maintenance_analysis` and its properties are not undefined or null
  const chartLabel =
    maintenance_analysis?.label || "Maintenance Requests Analysis";

  // Fallback to an empty array if maintenance_analysis or its data property is undefined or null
  const chartData =
    maintenance_analysis?.data?.map((item) => ({
      asset_number: item.asset_number || "Unknown",
      maintenance_request: item.maintenance_request || 0,
    })) || [];

  // Calculate total maintenance requests with a fallback in case chartData is empty
  //   const totalMaintenanceRequests = chartData.reduce(
  //     (acc, item) => acc + (item.maintenance_request || 0),
  //     0
  //   );

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>{chartLabel}</CardTitle>
          <CardDescription>
            Total number of maintenance requests per asset.
          </CardDescription>
        </div>
        {/* <div className="flex">
          <button
            key="total_maintenance_requests"
            className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
          >
            <span className="text-xs text-muted-foreground">
              Total Requests
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {totalMaintenanceRequests.toLocaleString()}
            </span>
          </button>
        </div> */}
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData} // chartData will always be an array, even if empty
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="asset_number" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Bar
              dataKey="maintenance_request"
              fill="hsl(var(--chart-1))"
              name="Maintenance Requests"
            />
            <ChartTooltip
              cursor={<ChartTooltip />}
              content={<ChartTooltipContent className="w-[150px]" />}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default MaintenanceRequestsCounter;
