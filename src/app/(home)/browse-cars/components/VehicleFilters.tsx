"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface VehicleFiltersProps {
  onFilter?: (filters: FilterState) => void;
}

interface FilterState {
  vehicleMake: string;
  vehicleModel: string;
  vehicleCondition: string;
  minYear: string;
  maxYear: string;
  priceRange: number;
}

const VehicleFilters: React.FC<VehicleFiltersProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<FilterState>({
    vehicleMake: "All",
    vehicleModel: "All",
    vehicleCondition: "All",
    minYear: "Oldest",
    maxYear: "Highest",
    priceRange: 45000000,
  });

  const handleFilterChange = (
    key: keyof FilterState,
    value: string | number
  ) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilter?.(updatedFilters);
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  const vehicleMakes = [
    "All",
    "Toyota",
    "Honda",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Ford",
    "Nissan",
    "Hyundai",
    "Kia",
  ];

  const vehicleModels = [
    "All",
    "Camry",
    "Corolla",
    "Accord",
    "Civic",
    "3 Series",
    "C-Class",
    "A4",
    "Focus",
  ];

  const vehicleConditions = [
    "All",
    "Brand New",
    "Foreign Used",
    "Locally Used",
    "Certified Pre-Owned",
  ];

  const years = ["Oldest", "2020", "2021", "2022", "2023", "2024", "2025"];

  const maxYears = ["Highest", "2025", "2024", "2023", "2022", "2021", "2020"];

  return (
    <div       className="bg-white lg:shadow-inset-blue lg:p-4 p-3 rounded-lg lg:border border-gray-200 space-y-6">
      {/* Vehicle Make */}
      <div>
        <label className="block text-gray-600 text-sm font-medium mb-3">
          Vehicle Make:
        </label>
        <div className="relative">
          <select
            value={filters.vehicleMake}
            onChange={(e) => handleFilterChange("vehicleMake", e.target.value)}
            className="w-full appearance-none bg-white border  border-autobuy-neutral-4 h-[40px] rounded-[12px] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          >
            {vehicleMakes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
          <Icon
            icon="mdi:chevron-down"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
          />
        </div>
      </div>

      {/* Vehicle Model */}
      <div>
        <label className="block text-gray-600 text-sm font-medium mb-3">
          Vehicle Model:
        </label>
        <div className="relative">
          <select
            value={filters.vehicleModel}
            onChange={(e) => handleFilterChange("vehicleModel", e.target.value)}
            className="w-full appearance-none bg-white border  border-autobuy-neutral-4 h-[40px] rounded-[12px] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          >
            {vehicleModels.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
          <Icon
            icon="mdi:chevron-down"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
          />
        </div>
      </div>

      {/* Vehicle Condition */}
      <div>
        <label className="block text-gray-600 text-sm font-medium mb-3">
          Vehicle Condition:
        </label>
        <div className="relative">
          <select
            value={filters.vehicleCondition}
            onChange={(e) =>
              handleFilterChange("vehicleCondition", e.target.value)
            }
            className="w-full appearance-none bg-white border border-autobuy-neutral-4 h-[40px] rounded-[12px] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          >
            {vehicleConditions.map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
          <Icon
            icon="mdi:chevron-down"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
          />
        </div>
      </div>

      {/* Year Range */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-3">
            Min Year:
          </label>
          <div className="relative">
            <select
              value={filters.minYear}
              onChange={(e) => handleFilterChange("minYear", e.target.value)}
              className="w-full appearance-none bg-white border  border-autobuy-neutral-4 h-[40px] rounded-[12px] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <Icon
              icon="mdi:chevron-down"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-3">
            Max Year:
          </label>
          <div className="relative">
            <select
              value={filters.maxYear}
              onChange={(e) => handleFilterChange("maxYear", e.target.value)}
              className="w-full appearance-none bg-white border  border-autobuy-neutral-4 h-[40px] rounded-[12px] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            >
              {maxYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <Icon
              icon="mdi:chevron-down"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-gray-600 text-sm font-medium mb-3">
          Price Range:
        </label>
        <div className="space-y-4">
          <input
            type="text"
            value={formatPrice(filters.priceRange)}
            readOnly
            className="w-full bg-white border  border-autobuy-neutral-4 h-[40px] rounded-[12px] px-4 py-2 focus:outline-none text-gray-700"
          />
          <div className="relative">
            <input
              type="range"
              min="1000000"
              max="100000000"
              step="1000000"
              value={filters.priceRange}
              onChange={(e) =>
                handleFilterChange("priceRange", parseInt(e.target.value))
              }
              className="w-full h-[7px] bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                  ((filters.priceRange - 1000000) / (100000000 - 1000000)) * 100
                }%, #e5e7eb ${
                  ((filters.priceRange - 1000000) / (100000000 - 1000000)) * 100
                }%, #e5e7eb 100%)`,
              }}
            />
            <style jsx>{`
              .slider::-webkit-slider-thumb {
                appearance: none;
                height: 15px;
                width: 15px;
                border-radius: 50%;
                background: #3b82f6;
                cursor: pointer;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              }
              .slider::-moz-range-thumb {
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background: #3b82f6;
                cursor: pointer;
                border: none;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleFilters;
