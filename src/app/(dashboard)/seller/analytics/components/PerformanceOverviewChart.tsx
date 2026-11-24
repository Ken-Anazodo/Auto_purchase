"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Jan", activeListings: 18, orders: 22, views: 14 },
  { name: "Feb", activeListings: 25, orders: 28, views: 18 },
  { name: "Mar", activeListings: 45, orders: 38, views: 35 },
  { name: "Apr", activeListings: 62, orders: 45, views: 39 },
  { name: "May", activeListings: 60, orders: 44, views: 43 },
  { name: "Jun", activeListings: 58, orders: 28, views: 58 },
  { name: "Jul", activeListings: 65, orders: 30, views: 75 },
  { name: "Aug", activeListings: 82, orders: 65, views: 80 },
  { name: "Sep", activeListings: 85, orders: 77, views: 85 },
  { name: "Oct", activeListings: 80, orders: 72, views: 95 },
  { name: "Nov", activeListings: 86, orders: 85, views: 102 },
  { name: "Dec", activeListings: 87, orders: 87, views: 105 },
];

const PerformanceOverviewChart = ({
  actionBtns,
  hideClass,
}: {
  actionBtns?: React.ReactNode;
  hideClass?: string;
}) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-neutral-200 p-6 ">
      {/* Header with Title and Time Selector */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-semibold text-xl text-gray-900">
            Performance Overview
          </h2>
        </div>
        <main className="">{actionBtns}</main>
        {hideClass ? null : (
          <Select defaultValue="1year">
            <SelectTrigger
              className={`w-[120px] h-10 text-sm !rounded-[999px] px-5 `}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1year">1 Year</SelectItem>
              <SelectItem value="6months">6 Months</SelectItem>
              <SelectItem value="3months">3 Months</SelectItem>
              <SelectItem value="1month">1 Month</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-600">Active Listings</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-sm text-gray-600">Orders</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className="text-sm text-gray-600">Views</span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ReLineChart
            data={chartData}
            margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6b7280",
                fontSize: 12,
                fontWeight: 500,
              }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 500 }}
              domain={[10, 100]}
              tickCount={6}
            />

            {/* Active Listings Line - Blue */}
            <Line
              type="natural"
              dataKey="activeListings"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={false}
              activeDot={false}
            />

            {/* Orders Line - Red */}
            <Line
              type="natural"
              dataKey="orders"
              stroke="#ef4444"
              strokeWidth={3}
              dot={false}
              activeDot={false}
            />

            {/* Views Line - Yellow */}
            <Line
              type="natural"
              dataKey="views"
              stroke="#eab308"
              strokeWidth={3}
              dot={false}
              activeDot={false}
            />
          </ReLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceOverviewChart;
