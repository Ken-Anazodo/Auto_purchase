"use client";

import React from "react";
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const viewsData = [
  { name: "Jan", views: 12 },
  { name: "Feb", views: 18 },
  { name: "Mar", views: 55 },
  { name: "Apr", views: 63 },
  { name: "May", views: 60 },
  { name: "Jun", views: 58 },
  { name: "Jul", views: 65 },
  { name: "Aug", views: 87 },
  { name: "Sep", views: 85 },
  { name: "Oct", views: 80 },
  { name: "Nov", views: 90 },
  { name: "Dec", views: 92 },
];

interface ViewsOverTimeChartProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-600">
          Views:{" "}
          <span className="font-semibold text-yellow-600">
            {payload[0].value}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

const ViewsOverTimeChart: React.FC<ViewsOverTimeChartProps> = ({
  className = "",
}) => {

  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          Views Over Time
        </h3>
        <p className="text-sm text-gray-600">
          How many buyers are seeing your listings
        </p>
      </div>

      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <ReLineChart
            data={viewsData}
            margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
            
          >
            <CartesianGrid
              stroke="#f1f5f9"
              vertical={false}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 12,
                fontWeight: 500,
              }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 12,
                fontWeight: 500,
              }}
              domain={[0, 100]}
              tickCount={6}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#fbbf24"
              strokeWidth={4}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#fbbf24",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              strokeLinecap="round"
            />
          </ReLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ViewsOverTimeChart;
