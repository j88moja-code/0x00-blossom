import React from "react";
import {
  LineChart,
  Line,
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

type EquipmentSDOData = {
  top_ten_sdo?: {
    labels?: string[];
    data?: Array<{
      asset_number: string;
      severity: number;
      detectability: number;
      occurrence: number;
    }>;
    label?: string;
  };
};

const EquipmentSDOChart: React.FC<EquipmentSDOData> = ({ top_ten_sdo }) => {
  // Define chart configuration with CSS variables
  const chartConfig: ChartConfig = [
    {
      // @ts-ignore
      severity: {
        label: "Severity",
        color: "hsl(var(--chart-2))",
      },
      detectability: {
        label: "Detectability",
        color: "hsl(var(--chart-3))",
      },
      occurrence: {
        label: "Occurrence",
        color: "hsl(var(--chart-4))",
      },
    },
  ];

  // Format chart data
  const chartData =
    top_ten_sdo?.data?.map((item) => ({
      ...item,
    })) || [];

  const chartLabel =
    top_ten_sdo?.label || "Equipment SDOs (must DOs) Data Analysis";

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>{chartLabel}</CardTitle>
          <CardDescription>
            Tracking Severity, Detectability, and Occurrence across "Critical"
            assets.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              {/* XAxis showing asset numbers */}
              <XAxis dataKey="asset_number" />
              {/* YAxis showing numeric values */}
              <YAxis />
              {/* Custom Tooltip */}
              <Tooltip
                content={({ payload }) => {
                  if (payload && payload.length > 0) {
                    const {
                      asset_number,
                      severity,
                      detectability,
                      occurrence,
                    } = payload[0].payload;
                    return (
                      <div className="p-2 bg-white dark:bg-gray-800 border rounded shadow">
                        <p className="font-semibold">{`Asset: ${asset_number}`}</p>
                        <p>{`Severity: ${severity}`}</p>
                        <p>{`Detectability: ${detectability}`}</p>
                        <p>{`Occurrence: ${occurrence}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
                cursor={<ChartTooltip />}
              />
              <Legend />
              {/* Render lines for each data series */}
              <Line
                type="monotone"
                dataKey="severity"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="detectability"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="occurrence"
                stroke="hsl(var(--chart-4))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex flex-wrap gap-2 font-medium leading-none">
          {chartData?.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
              <div>{item.asset_number}</div>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default EquipmentSDOChart;
