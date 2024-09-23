import React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type EquipmentSummaryProps = {
  summary_stats: Record<string, number>;
};

const EquipmentSummary: React.FC<EquipmentSummaryProps> = ({
  summary_stats,
}) => {
  // Define chart configuration with CSS variables
  const chartConfig: ChartConfig = {
    totalCount: {
      label: "Total Equipment",
    },
    operational_count: {
      label: "Operational",
      color: "hsl(var(--chart-2))",
    },
    non_operational_count: {
      label: "Non-operational",
      color: "hsl(var(--chart-3))",
    },
    under_repair_count: {
      label: "Under repair",
      color: "hsl(var(--chart-4))",
    },
    decommissioned_count: {
      label: "Decommissioned",
      color: "hsl(var(--chart-5))",
    },
  };

  // Format chart data
  const chartData = Object.entries(summary_stats)
    .map(([key, value]) => {
      if (typeof value === "number" && chartConfig[key]) {
        return {
          name: chartConfig[key].label,
          value,
          fill: chartConfig[key].color,
        };
      }
      return null;
    })
    .filter(
      (data): data is { name: string; value: number; fill: string } =>
        data !== null
    );

  const total = React.useMemo(() => {
    return chartData.reduce((acc, data) => acc + data.value, 0);
  }, [chartData]);

  // Prepare data for chart rendering
  //   const chartLabels = chartData.map((data) => data.name);
  //   const chartValues = chartData.map((data) => data.value);
  //   const chartColors = chartData.map((data) => data.color);

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Equipment Summary</CardTitle>
          <CardDescription>
            Analysis of the equipment on the site by status.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
              // @ts-ignore
              fill={({ payload }) => payload.color}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {total === 1 ? "Equipment" : "Equipment"}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex flex-wrap gap-2 font-medium leading-none">
          {chartData.map((data, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: data.fill }}
              ></div>
              <div>{data.name}</div>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default EquipmentSummary;
