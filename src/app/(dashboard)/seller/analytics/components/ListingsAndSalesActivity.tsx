"use client";

import React, { useState } from "react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  {
    name: "Jan 1",
    activeListings: 70,
    orders: 40,
    sold: 15,
  },
  {
    name: "Jan 5",
    activeListings: 71,
    orders: 41,
    sold: 15,
  },
  {
    name: "Jan 10",
    activeListings: 70,
    orders: 40,
    sold: 15,
  },
  {
    name: "Jan 15",
    activeListings: 70,
    orders: 40,
    sold: 15,
  },
  {
    name: "Jan 20",
    activeListings: 70,
    orders: 40,
    sold: 15,
  },
  {
    name: "Jan 25",
    activeListings: 91,
    orders: 51,
    sold: 26,
  },
  {
    name: "Jan 31",
    activeListings: 70,
    orders: 40,
    sold: 15,
  },
];

interface LegendItemProps {
  color: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div
      className={`w-3 h-3 rounded-full`}
      style={{ backgroundColor: color }}
    />
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

interface TooltipPayload {
  name: string;
  value: number;
  color: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-gray-900 mb-2">{label}</p>
        {payload.map((entry: TooltipPayload, index: number) => (
          <p key={index} className="text-sm text-gray-600">
            {entry.name}:{" "}
            <span className="font-semibold" style={{ color: entry.color }}>
              {entry.value}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ListingsAndSalesActivity = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 days");

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            Listings & Sales Activity
          </h3>
          <p className="text-sm text-gray-600">
            Compare your listings, orders, and sales.
          </p>
        </div>

        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-[140px] h-9 rounded-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Last 7 days">Last 7 days</SelectItem>
            <SelectItem value="Last 30 days">Last 30 days</SelectItem>
            <SelectItem value="Last 90 days">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 mb-6">
        <LegendItem color="#3b82f6" label="Active Listings" />
        <LegendItem color="#f97316" label="Orders" />
        <LegendItem color="#22c55e" label="Sold" />
      </div>

      {/* Chart */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart
            data={data}
            margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
            barCategoryGap="20%"
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
            <Bar
              dataKey="activeListings"
              fill="#3b82f6"
              radius={[2, 2, 0, 0]}
              maxBarSize={24}
            />
            <Bar
              dataKey="orders"
              fill="#f97316"
              radius={[2, 2, 0, 0]}
              maxBarSize={24}
            />
            <Bar
              dataKey="sold"
              fill="#22c55e"
              radius={[2, 2, 0, 0]}
              maxBarSize={24}
            />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ListingsAndSalesActivity;
