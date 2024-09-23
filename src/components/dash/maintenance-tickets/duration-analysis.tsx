import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
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

type TicketsDurationAnalysisProps = {
  chart_data?: {
    labels?: string[];
    data?: Array<{
      ticket_id: string;
      duration: string;
      created_at: string;
    }>;
    label?: string;
  };
};

const TicketsDurationAnalysis: React.FC<TicketsDurationAnalysisProps> = ({
  chart_data,
}) => {
  // Format chart data
  const chartConfig: ChartConfig = [
    {
      // @ts-ignore
      ticket_id: {
        label: "Ticket ID",
      },
      duration: {
        label: "Duration (Minutes)",
        color: "hsl(var(--chart-1))",
      },
    },
  ];

  // Ensure `top_ten_rpn` and its properties are not undefined or null
  const chartData =
    chart_data?.data?.map((item) => ({
      ...item,
    })) || [];

  const chartLabel = chart_data?.label || "Analysis of Ticket Durations";

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>{chartLabel}</CardTitle>
          <CardDescription>
            Analysis of the duration of maintenance tickets.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            {/* Switch BarChart layout to horizontal */}
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
              layout="horizontal"
              barSize={20}
            >
              {/* XAxis shows the asset numbers */}
              <XAxis type="category" dataKey="ticket_id" />
              <CartesianGrid vertical={false} />
              <YAxis type="number" dataKey="duration" />
              <Tooltip
                content={({ payload }) => {
                  if (payload && payload.length > 0) {
                    const { ticket_id, duration } = payload[0].payload;
                    return (
                      <div className="p-2 bg-white dark:bg-gray-800 border rounded shadow">
                        <p className="font-semibold">{`Ticket #: ${ticket_id}`}</p>
                        <p>{`Duration: ${duration} hours`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
                cursor={<ChartTooltip />}
              />
              <Legend />
              {/* Render the bar using the rpn values */}
              <Bar dataKey="duration" fill="hsl(var(--chart-2))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex flex-wrap gap-2 font-medium leading-none">
          {chartData.slice(0, 50).map((data, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-secondary"></div>
              <div>
                {new Date(data.created_at).toLocaleDateString("en-ZA", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </div>
              <span className="text-muted-foreground">
                {data.ticket_id} - ({data.duration} hours)
              </span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TicketsDurationAnalysis;
