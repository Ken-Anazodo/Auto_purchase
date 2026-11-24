/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface AdvancedFilterProps {
  onFilterChange?: (filters: any) => void;
}

interface FilterSection {
  id: string;
  title: string;
  isExpanded: boolean;
  options: string[];
}

const AdvancedFilter: React.FC<AdvancedFilterProps> = ({ onFilterChange }) => {
  const [isMainExpanded, setIsMainExpanded] = useState(true);
  const [sections, setSections] = useState<FilterSection[]>([
    {
      id: "airbags",
      title: "Airbags",
      isExpanded: false,
      options: [
        "Driver Airbag",
        "Passenger Airbag",
        "Side Airbags",
        "Curtain Airbags",
      ],
    },
    {
      id: "transmission",
      title: "Transmission",
      isExpanded: false,
      options: ["Manual", "Automatic", "CVT", "Semi-Automatic"],
    },
    {
      id: "fuelType",
      title: "Fuel Type",
      isExpanded: false,
      options: ["Petrol", "Diesel", "Hybrid", "Electric", "CNG"],
    },
    {
      id: "drivetrain",
      title: "Drivetrain",
      isExpanded: false,
      options: ["FWD", "RWD", "AWD", "4WD"],
    },
    {
      id: "bodyType",
      title: "Body Type",
      isExpanded: false,
      options: ["Sedan", "SUV", "Hatchback", "Coupe", "Convertible"],
    },
    {
      id: "engine",
      title: "Engine",
      isExpanded: false,
      options: ["1.0L - 1.5L", "1.6L - 2.0L", "2.1L - 3.0L", "3.1L+"],
    },
    {
      id: "interior",
      title: "Interior",
      isExpanded: false,
      options: [
        "Leather Seats",
        "Fabric Seats",
        "Climate Control",
        "Premium Audio",
      ],
    },
    {
      id: "exterior",
      title: "Exterior",
      isExpanded: false,
      options: ["Sunroof", "Alloy Wheels", "LED Headlights", "Tinted Windows"],
    },
    {
      id: "safety",
      title: "Safety",
      isExpanded: false,
      options: ["ABS", "ESP", "Parking Sensors", "Backup Camera"],
    },
    {
      id: "technology",
      title: "Technology",
      isExpanded: false,
      options: ["Bluetooth", "Navigation", "USB Ports", "Wireless Charging"],
    },
  ]);

  const toggleMainSection = () => {
    setIsMainExpanded(!isMainExpanded);
  };

  const toggleSection = (sectionId: string) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
  };

  return (
    <div
      className="bg-white lg:shadow-inset-blue lg:border border-gray-200 rounded-lg">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={toggleMainSection}
      >
        <h3 className="text-gray-700 font-medium text-lg">Advanced Filter</h3>
        <Icon
          icon={isMainExpanded ? "mdi:chevron-up" : "mdi:chevron-down"}
          className="w-6 h-6 text-gray-500"
        />
      </div>

      {/* Expandable Content */}
      {isMainExpanded && (
        <div className="border-t border-gray-200">
          {sections.map((section, index) => (
            <div key={section.id}>
              {/* Section Header */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleSection(section.id)}
              >
                <span className="text-gray-700 font-medium">
                  {section.title}
                </span>
                <Icon
                  icon="mdi:chevron-down"
                  className={`w-6 h-6 text-[#4D4C4C] transition-transform ${
                    section.isExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Section Content */}
              {section.isExpanded && (
                <div className="px-4 pb-5">
                  <div className="space-y-2">
                    {section.options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {index < sections.length - 1 && (
                <div className="border-b border-[#C9C9C9] w-[90%] mx-auto rounded-xl"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdvancedFilter;
