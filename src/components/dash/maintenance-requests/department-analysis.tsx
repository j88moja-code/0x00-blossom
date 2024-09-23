import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartTooltip } from "@/components/ui/chart";

type NameCounts = {
  [key: string]: number;
};

type DepartmentCountChartProps = {
  day_name_counts: NameCounts;
};

const CustomTooltip: React.FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const {
      name,
      value,
      payload: { dataKey },
    } = payload[0];

    return (
      <div className="tooltip-container dark:bg-gray-800 bg-white p-2 rounded-md shadow-lg">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {name}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {dataKey}: {value}
        </p>
      </div>
    );
  }

  return null;
};

const DepartmentCountChart: React.FC<DepartmentCountChartProps> = ({
  day_name_counts,
}) => {
  // Prepare the data for the chart, only including day counts
  const chartData = Object.keys(day_name_counts).map((name) => ({
    name,
    day: day_name_counts[name],
  }));

  const totalRequests = React.useMemo(
    () => chartData.reduce((acc, item) => acc + item.day, 0),
    [chartData]
  );

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Maintenance Departments</CardTitle>
          <CardDescription>
            Analysis of maintenance requests by department
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            layout="horizontal"
            barSize={40}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={<ChartTooltip />} />
            <Bar
              dataKey="day"
              fill="hsl(var(--chart-3))"
              name="Requests By Department"
            />
          </BarChart>
        </ResponsiveContainer>
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

export default DepartmentCountChart;
