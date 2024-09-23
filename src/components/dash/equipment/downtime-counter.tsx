// @ts-nocheck
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

type DowntimeCounterProps = {
  downtimes_analysis?: {
    labels?: string[];
    data?: Array<{
      asset_number: string;
      machine_downtime: number;
      stock_prep_downtime: number;
      location: string;
    }>;
    label?: string;
  };
};

const DowntimeCounter: React.FC<DowntimeCounterProps> = ({
  downtimes_analysis,
}) => {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("machine_downtime");

  const chartConfig: ChartConfig = {
    machine_downtime: {
      label: "Equipment in Machine",
      color: "hsl(var(--chart-1))",
    },
    stock_prep_downtime: {
      label: "Equipment in Stock Prep",
      color: "hsl(var(--chart-2))",
    },
  };

  // Ensure `downtimes_analysis` and its properties are not undefined or null
  const chartData =
    downtimes_analysis?.data?.map((item) => ({
      asset_number: item.asset_number,
      machine_downtime: item.machine_downtime || 0,
      stock_prep_downtime: item.stock_prep_downtime || 0,
    })) || [];

  const total = React.useMemo(
    () => ({
      machine_downtime: chartData.reduce(
        (acc, item) => acc + item.machine_downtime,
        0
      ),
      stock_prep_downtime: chartData.reduce(
        (acc, item) => acc + item.stock_prep_downtime,
        0
      ),
    }),
    [chartData]
  );

  const chartLabel = downtimes_analysis?.label || "Downtime Analysis";

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>{chartLabel}</CardTitle>
          <CardDescription>
            Analysis of the Number of Downtime Entries for{" "}
            {chartConfig[activeChart].label} per asset.
          </CardDescription>
        </div>
        <div className="flex">
          {Object.keys(chartConfig).map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[chart].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="asset_number" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Bar
              dataKey={activeChart}
              fill={chartConfig[activeChart].color}
              name={chartConfig[activeChart].label}
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

export default DowntimeCounter;
