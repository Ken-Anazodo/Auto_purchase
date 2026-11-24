"use client";

import React from "react";
import { MetricCard } from "./MetricCard";

interface AnalyticsHeaderProps {
  metrics?: {
    revenue: {
      value: string;
      change: string;
      changeType: "positive" | "negative" | "neutral";
    };
    carsListed: { value: number; subtitle: string };
    carsSold: { value: number; subtitle: string };
    orders: { value: number; subtitle: string };
    totalViews: {
      value: number;
      change: string;
      changeType: "positive" | "negative" | "neutral";
    };
  };
}

const defaultMetrics = {
  revenue: {
    value: "₦5,000,000.00",
    change: "+10.4",
    changeType: "positive" as const,
  },
  carsListed: { value: 5, subtitle: "Cars currently visible to buyers" },
  carsSold: { value: 2, subtitle: "Successful sales, congrats!" },
  orders: { value: 12, subtitle: "You have 12 processing orders" },
  totalViews: { value: 2550, change: "+12.4", changeType: "positive" as const },
};

export function AnalyticsHeader({
  metrics = defaultMetrics,
}: AnalyticsHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Header Text */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">
          Performance Analytics
        </h1>
        <p className="text-gray-600">
          Track your selling performance, listing activity, and engagement over
          time
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        <MetricCard
          title="Revenue"
          value={metrics.revenue.value}
          subtitle="vs last month"
          icon="mdi:trending-up"
          iconColor="text-red-600"
          iconBgColor="bg-red-50"
          change={metrics.revenue.change}
          changeType={metrics.revenue.changeType}
        />

        <MetricCard
          title="Cars Listed"
          value={metrics.carsListed.value}
          subtitle={metrics.carsListed.subtitle}
          icon="mdi:car"
          iconColor="text-blue-600"
          iconBgColor="bg-blue-50"
        />

        <MetricCard
          title="Cars Sold"
          value={metrics.carsSold.value}
          subtitle={metrics.carsSold.subtitle}
          icon="temaki:car-dealer"
          iconColor="text-green-600"
          iconBgColor="bg-green-50"
        />

        <MetricCard
          title="Orders"
          value={metrics.orders.value}
          subtitle={metrics.orders.subtitle}
          icon="circum:receipt"
          iconColor="text-orange-600"
          iconBgColor="bg-orange-50"
        />

        <MetricCard
          title="Total Views"
          value={metrics.totalViews.value}
          subtitle="+100 new views this week"
          icon="mdi:eye"
          iconColor="text-[#0A6DFF]"
          iconBgColor="bg-[#F5F9FF]"
          change={metrics.totalViews.change}
          changeType={metrics.totalViews.changeType}
        />
      </div>
    </div>
  );
}
