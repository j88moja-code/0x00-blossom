// import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type DynamicChartProps = {
  title: string;
  data: {
    labels: string[];
    data: number[];
  };
  color: string;
};

// Dynamic chart component for TimeGroupedData or HistogramData
const DynamicChart = ({ title, data, color }: DynamicChartProps) => {
  // Convert labels and data into the format Recharts understands
  const formattedData = data.labels.map((label, index) => ({
    label,
    value: data.data[index],
  }));

  return (
    <div>
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DynamicChart;
