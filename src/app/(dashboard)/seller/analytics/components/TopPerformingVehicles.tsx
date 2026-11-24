"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface Vehicle {
  id: string;
  name: string;
  views: number;
  status: "sold" | "active";
  revenue: number | null;
}

const vehiclesData: Vehicle[] = [
  {
    id: "1",
    name: "Toyota Camry",
    views: 225,
    status: "sold",
    revenue: 45000000,
  },
  {
    id: "2",
    name: "Toyota Camry",
    views: 225,
    status: "active",
    revenue: null,
  },
  {
    id: "3",
    name: "Toyota Camry",
    views: 225,
    status: "active",
    revenue: null,
  },
  {
    id: "4",
    name: "Toyota Camry",
    views: 225,
    status: "sold",
    revenue: 45000000,
  },
];

interface StatusBadgeProps {
  status: "sold" | "active";
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "sold":
        return "text-green-600 bg-green-50";
      case "active":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles()}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

interface RevenueDisplayProps {
  revenue: number | null;
}

const RevenueDisplay: React.FC<RevenueDisplayProps> = ({ revenue }) => {
  if (revenue === null) {
    return <span className="text-blue-400 text-lg">-------</span>;
  }

  return (
    <span className="text-blue-600 font-semibold text-lg">
      ₦{revenue.toLocaleString()}
    </span>
  );
};

export function TopPerformingVehicles() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          Top Performing Vehicles
        </h3>
        <p className="text-sm text-gray-600">
          See which of your listings are getting the most engagement
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Desktop Table Header - Hidden on Mobile */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 pb-4 border-b border-gray-200 mb-4">
            <div className="text-sm font-medium text-gray-700">
              Vehicle Name
            </div>
            <div className="text-sm font-medium text-gray-700">Views</div>
            <div className="text-sm font-medium text-gray-700">Status</div>
            <div className="text-sm font-medium text-gray-700">Revenue</div>
          </div>

          {/* Table Body */}
          <div className="space-y-4">
            {vehiclesData.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
              >
                {/* Mobile Layout */}
                <div className="md:hidden space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-900">
                      {vehicle.name}
                    </h4>
                    <StatusBadge status={vehicle.status} />
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Icon icon="mdi:eye" className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">
                        {vehicle.views} views
                      </span>
                    </div>
                    <RevenueDisplay revenue={vehicle.revenue} />
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-4 gap-4 items-center">
                  <div className="font-medium text-gray-900">
                    {vehicle.name}
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:eye" className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">{vehicle.views}</span>
                  </div>

                  <div>
                    <StatusBadge status={vehicle.status} />
                  </div>

                  <div>
                    <RevenueDisplay revenue={vehicle.revenue} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
