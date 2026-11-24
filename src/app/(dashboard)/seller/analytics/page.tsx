"use client";

import React, { useState } from "react";
import {
  AnalyticsHeader,
  ViewsOverTimeChart,
  ListingsAndSalesActivity,
  TopPerformingVehicles,
} from "./components";
import PerformanceOverviewChart from "./components/PerformanceOverviewChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AnalyticsPage() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const analyticsData = {
    revenue: {
      value: "₦5,000,000.00",
      change: "+10.4",
      changeType: "positive" as const,
    },
    carsListed: {
      value: 5,
      subtitle: "Cars currently visible to buyers",
    },
    carsSold: {
      value: 2,
      subtitle: "Successful sales, congrats!",
    },
    orders: {
      value: 12,
      subtitle: "You have 12 processing orders",
    },
    totalViews: {
      value: 2550,
      change: "+12.4",
      changeType: "positive" as const,
    },
  };

  const yearSelector = (
    <div className="flex items-center gap-2">
      <Select value={selectedYear} onValueChange={setSelectedYear}>
        <SelectTrigger className="w-[130px] h-9 !rounded-full">
          <SelectValue placeholder="Select year" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2022">2022</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
          <SelectItem value="2024">2024</SelectItem>
          <SelectItem value="2025">2025</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className=" space-y-8">
      <AnalyticsHeader metrics={analyticsData} />
      <PerformanceOverviewChart hideClass="hidden" actionBtns={yearSelector} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ViewsOverTimeChart />
        <ListingsAndSalesActivity />

        <main className="lg:col-span-2">
          <TopPerformingVehicles />
        </main>
      </div>
    </div>
  );
}
