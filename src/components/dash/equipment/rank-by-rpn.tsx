import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
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
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

type TopTenRPNProps = {
  top_ten_rpn?: {
    labels?: string[];
    data?: Array<{
      asset_number: string;
      status: string;
      rpn: number;
    }>;
    label?: string;
  };
};

const TopTenRPN: React.FC<TopTenRPNProps> = ({ top_ten_rpn }) => {
  // Format chart data
  const chartConfig: ChartConfig = [
    {
      // @ts-ignore
      asset_number: {
        label: "Asset Number",
      },
      rpn: {
        label: "RPN",
        color: "hsl(var(--chart-1))",
      },
    },
  ];

  // Ensure `top_ten_rpn` and its properties are not undefined or null
  const chartData =
    top_ten_rpn?.data?.map((item) => ({
      ...item,
    })) || [];

  const chartLabel = top_ten_rpn?.label || "Top Ten Equipment by RPN";

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>{chartLabel}</CardTitle>
          <CardDescription>
            Analysis of the top ten equipment ranked by Risk Priority Number
            (RPN).
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <ResponsiveContainer width="100%" height={300}>
            {/* Switch BarChart layout to horizontal */}
            <BarChart data={chartData} layout="horizontal" barSize={20}>
              {/* XAxis shows the asset numbers */}
              <XAxis type="category" dataKey="asset_number" />
              {/* YAxis shows the RPN values */}
              <YAxis type="number" dataKey="rpn" />
              <Tooltip
                content={({ payload }) => {
                  if (payload && payload.length > 0) {
                    const { asset_number, rpn } = payload[0].payload;
                    return (
                      <div className="p-2 bg-white dark:bg-gray-800 border rounded shadow">
                        <p className="font-semibold">{`Asset #: ${asset_number}`}</p>
                        <p>{`RPN: ${rpn}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
                cursor={<ChartTooltip />}
              />
              <Legend />
              {/* Render the bar using the rpn values */}
              <Bar dataKey="rpn" fill="hsl(var(--chart-2))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex flex-wrap gap-2 font-medium leading-none">
          {chartData.map((data, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
              <div>{data.asset_number}</div>
              <div className="text-muted-foreground">({data.status})</div>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TopTenRPN;
