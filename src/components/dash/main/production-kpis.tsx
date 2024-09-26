// @ts-nocheck
import React from "react";
import {
  Bar,
  Line,
  LineChart,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
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

// const data = {
//   day: {
//     labels: ["11-9-2024"],
//     datasets: [
//       { label: "Total Production", data: [2699] },
//       { label: "Quality Rate", data: [100] },
//       { label: "Availability Rate", data: [99.03] },
//       { label: "Performance Rate", data: [98.71] },
//       { label: "OEE", data: [97.75] },
//     ],
//   },
//   week: {
//     labels: ["37"],
//     datasets: [
//       { label: "Total Production", data: [2699] },
//       { label: "Quality Rate", data: [100] },
//       { label: "Availability Rate", data: [99.03] },
//       { label: "Performance Rate", data: [98.71] },
//       { label: "OEE", data: [97.75] },
//     ],
//   },
//   month: {
//     labels: ["9"],
//     datasets: [
//       { label: "Total Production", data: [2699] },
//       { label: "Quality Rate", data: [100] },
//       { label: "Availability Rate", data: [99.03] },
//       { label: "Performance Rate", data: [98.71] },
//       { label: "OEE", data: [97.75] },
//     ],
//   },
//   year: {
//     labels: ["2024"],
//     datasets: [
//       { label: "Total Production", data: [2699] },
//       { label: "Quality Rate", data: [100] },
//       { label: "Availability Rate", data: [99.03] },
//       { label: "Performance Rate", data: [98.71] },
//       { label: "OEE", data: [97.75] },
//     ],
//   },
// };

type TimeGroupedData = {
  labels: string[];
  datasets: { label: string; data: number[] }[];
};

type ProductionKPIsProps = {
  day: Record<string, TimeGroupedData>;
  week: Record<string, TimeGroupedData>;
  month: Record<string, TimeGroupedData>;
  year: Record<string, TimeGroupedData>;
};

type ProductionAnalysisChartProps = {
  production_kpis?: Record<string, ProductionKPIsProps>;
};

// // Helper to format the data for Recharts
// const formatChartData = (period) => {
//   const chartData = data[period].labels.map((label, index) => ({
//     label,
//     TotalProduction: data[period].datasets[0].data[index],
//     QualityRate: data[period].datasets[1].data[index],
//     AvailabilityRate: data[period].datasets[2].data[index],
//     PerformanceRate: data[period].datasets[3].data[index],
//     OEE: data[period].datasets[4].data[index],
//   }));
//   return chartData;
// };

const ProductionAnalysisChart: React.FC<ProductionAnalysisChartProps> = ({
  production_kpis,
}) => {
  const [activePeriod, setActivePeriod] = React.useState<
    "day" | "week" | "month" | "year"
  >("day");

  const chartConfig: ChartConfig = {
    day: { label: "Daily", color: "hsl(var(--chart-1))" },
    week: {
      label: "Weekly",
      color: "hsl(var(--chart-2))",
    },
    month: {
      label: "Monthly",
      color: "hsl(var(--chart-3))",
    },
    year: { label: "Yearly", color: "hsl(var(--chart-4))" },
    // TotalProduction: {
    //   label: "Total Production",
    //   color: "hsl(var(--chart-5))",
    // },
  };

  // Extract chart options
  const formatedChartData = (period: "day" | "week" | "month" | "year") => {
    const chartData = production_kpis?.[period]?.[`labels`]?.map(
      (label, index) => ({
        label,
        TotalProduction:
          // @ts-ignore
          production_kpis?.[period]?.[`datasets`][0]?.data[index],
        QualityRate: production_kpis?.[period]?.[`datasets`][1]?.data[index],
        AvailabilityRate:
          production_kpis?.[period]?.[`datasets`][2]?.data[index],
        PerformanceRate:
          production_kpis?.[period]?.[`datasets`][3]?.data[index],
        OEE: production_kpis?.[period]?.[`datasets`][4]?.data[index],
      })
    );

    return chartData;
  };

  const chartData = formatedChartData(activePeriod);

  const TotalProductionChart = (
    <ChartContainer
      className="aspect-auto h-[250px] w-full"
      config={chartConfig}
    >
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 20,
        }}
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
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              className="w-[150px]"
              labelFormatter={(value) =>
                `${chartConfig[activePeriod].label} ${value}`
              }
            />
          }
        />
        <Bar
          dataKey="TotalProduction"
          fill={chartConfig[activePeriod].color}
          radius={8}
        >
          <LabelList
            position="top"
            offset={12}
            className="fill-foreground"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );

  const OEEChart = (
    <ChartContainer
      className="aspect-auto h-[250px] w-full"
      config={chartConfig}
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="OEE"
          type="monotone"
          stroke="#ff7300"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="QualityRate"
          type="monotone"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="AvailabilityRate"
          type="monotone"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="PerformanceRate"
          type="monotone"
          stroke="#ffc658"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Card className="col-span-1 sm:col-span-1/3">
        <CardHeader>
          <CardTitle>Total Production Analysis</CardTitle>
          <CardDescription>
            Showing performance metrics for production by {activePeriod}.
          </CardDescription>
        </CardHeader>
        <CardContent>{TotalProductionChart}</CardContent>
        <CardFooter>
          <div className="flex">
            {Object.keys(chartConfig).map((key) => (
              <button
                key={key}
                onClick={() => setActivePeriod(key as keyof typeof chartConfig)}
                className={`px-3 text-sm font-medium ${
                  activePeriod === key ? "border-b-2" : "border-b-transparent"
                }`}
              >
                {chartConfig[key as keyof typeof chartConfig].label}
              </button>
            ))}
          </div>
        </CardFooter>
      </Card>
      <Card className="col-span-1 sm:col-span-2/3">
        <CardHeader>
          <CardTitle>Production KPIs Analysis</CardTitle>
          <CardDescription>
            Showing performance metrics for OEE by {activePeriod}.
          </CardDescription>
        </CardHeader>
        <CardContent>{OEEChart}</CardContent>
      </Card>
    </div>
  );

  //   return (
  //     <Card className="flex flex-col">
  //       <CardHeader>
  //         <CardTitle>Production KPIs Analysis</CardTitle>
  //         <CardDescription>
  //           Showing {activePeriod} performance metrics for production and OEE.
  //         </CardDescription>
  //       </CardHeader>
  //       <CardContent>
  //         <ResponsiveContainer width="100%" height={400}>
  //           <BarChart
  //             accessibilityLayer
  //             data={chartData}
  //             margin={{
  //               left: 12,
  //               right: 12,
  //             }}
  //             layout="horizontal"
  //             barSize={40}
  //           >
  //             <CartesianGrid vertical={false} />
  //             <XAxis
  //               dataKey="label"
  //               tickLine={false}
  //               axisLine={false}
  //               tickMargin={8}
  //               minTickGap={32}
  //             />
  //             <YAxis tickLine={false} axisLine={false} />
  //             <Tooltip />
  //             <Legend />
  //             <Bar dataKey="TotalProduction" fill="#8884d8" />
  //           </BarChart>
  //         </ResponsiveContainer>

  //         <ResponsiveContainer width="100%" height={400}>
  //           <LineChart
  //             data={chartData}
  //             margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
  //           >
  //             <CartesianGrid strokeDasharray="3 3" />
  //             <XAxis dataKey="label" />
  //             <YAxis />
  //             <Tooltip />
  //             <Legend />
  //             <Line type="monotone" dataKey="QualityRate" stroke="#82ca9d" />
  //             <Line type="monotone" dataKey="AvailabilityRate" stroke="#8884d8" />
  //             <Line type="monotone" dataKey="PerformanceRate" stroke="#ffc658" />
  //             <Line type="monotone" dataKey="OEE" stroke="#ff7300" />
  //           </LineChart>
  //         </ResponsiveContainer>
  //       </CardContent>
  //       <CardFooter>
  //         <div className="flex justify-around">
  //           {["day", "week", "month", "year"].map((period) => (
  //             <button
  //               key={period}
  //               className={`px-4 py-2 text-sm font-medium ${
  //                 activePeriod === period ? "text-blue-500" : ""
  //               }`}
  //               onClick={() =>
  //                 setActivePeriod(
  //                   period as "day" | "weekly" | "monthly" | "yearly"
  //                 )
  //               }
  //             >
  //               {period.charAt(0).toUpperCase() + period.slice(1)}
  //             </button>
  //           ))}
  //         </div>
  //       </CardFooter>
  //     </Card>
  //   );
};

export default ProductionAnalysisChart;
