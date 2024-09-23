//@ts-nocheck
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type TimeGroupedData = {
  labels: string[];
  data: number[];
};

type EquipmentHistograms = {
  equipment_id: string;
  group_by_day: Record<string, TimeGroupedData>;
  group_by_week: Record<string, TimeGroupedData>;
  group_by_month: Record<string, TimeGroupedData>;
  group_by_year: Record<string, TimeGroupedData>;
};

type EquipmentMRAnalysisProps = {
  equipment_mr_analysis?: Record<string, EquipmentHistograms>;
};

const EquipmentMRAnalysis: React.FC<EquipmentMRAnalysisProps> = ({
  equipment_mr_analysis,
}) => {
  const [activeGroup, setActiveGroup] = React.useState<
    "day" | "week" | "month" | "year"
  >("day");
  const [selectedEquipment, setSelectedEquipment] = React.useState<
    string | null
  >(null);

  const chartConfig: ChartConfig = {
    day: { label: "Daily Requests", color: "hsl(var(--chart-1))" },
    week: { label: "Weekly Requests", color: "hsl(var(--chart-2))" },
    month: { label: "Monthly Requests", color: "hsl(var(--chart-3))" },
    year: { label: "Yearly Requests", color: "hsl(var(--chart-4))" },
  };

  // Extract equipment options
  const equipmentOptions = equipment_mr_analysis
    ? Object.keys(equipment_mr_analysis)
    : [];

  // Handle the selected equipment's data or aggregate all equipment data
  const activeData = selectedEquipment
    ? equipment_mr_analysis?.[selectedEquipment]?.[`group_by_${activeGroup}`]
    : aggregateDataForAllEquipment(equipment_mr_analysis, activeGroup);

  const chartData = activeData
    ? activeData.labels.map((label, index) => ({
        label,
        count: activeData.data[index],
      }))
    : [];

  const totalRequests = chartData.reduce((acc, item) => acc + item.count, 0);

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>{chartConfig[activeGroup].label}</CardTitle>
          <CardDescription>
            Analysis of the number of maintenance requests by equipment.
          </CardDescription>
        </div>
        <div className="flex">
          {Object.keys(chartConfig).map((key) => (
            <button
              key={key}
              onClick={() => setActiveGroup(key as keyof typeof chartConfig)}
              className={`px-3 text-sm font-medium ${
                activeGroup === key ? "border-b-2" : "border-b-transparent"
              }`}
            >
              {chartConfig[key as keyof typeof chartConfig].label}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <div className="flex items-start gap-4 mb-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Equipment:
          </label>
          <select
            value={selectedEquipment || ""}
            className="border dark:bg-gray-700 dark:text-gray-300 text-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
            onChange={(e) => setSelectedEquipment(e.target.value)}
          >
            <option value="">All Equipment</option>
            {equipmentOptions.length > 0 ? (
              equipmentOptions.map((equipment_id) => (
                <option
                  className="dark:bg-gray-700 dark:text-gray-300 text-gray-700 "
                  key={equipment_id}
                  value={equipment_id}
                >
                  {equipment_id}
                </option>
              ))
            ) : (
              <option value="">No Equipment Available</option>
            )}
          </select>
        </div>
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
            layout="horizontal"
            barSize={40}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <YAxis tickLine={false} axisLine={false} />
            <Bar dataKey="count" fill={chartConfig[activeGroup].color} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  labelFormatter={(value) =>
                    `${chartConfig[activeGroup].label} ${value}`
                  }
                />
              }
              cursor={<ChartTooltip />}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div>
          <div className="text-xs text-muted-foreground">
            Total Requests: {totalRequests.toLocaleString()}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

// Helper function to aggregate data for all equipment
const aggregateDataForAllEquipment = (
  equipmentData?: Record<string, EquipmentHistograms>,
  activeGroup?: "day" | "week" | "month" | "year"
) => {
  if (!equipmentData || !activeGroup) return null;

  const aggregatedLabels: string[] = [];
  const aggregatedData: number[] = [];

  Object.values(equipmentData).forEach((histogram) => {
    const data = histogram[`group_by_${activeGroup}`];
    if (data) {
      data.labels.forEach((label, index) => {
        const labelIndex = aggregatedLabels.indexOf(label);
        if (labelIndex === -1) {
          aggregatedLabels.push(label);
          aggregatedData.push(data.data[index]);
        } else {
          aggregatedData[labelIndex] += data.data[index];
        }
      });
    }
  });

  return { labels: aggregatedLabels, data: aggregatedData };
};

export default EquipmentMRAnalysis;
