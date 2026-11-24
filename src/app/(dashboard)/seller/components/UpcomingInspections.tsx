import React from "react";
import { Icon } from "@iconify/react";

interface Inspection {
  id: string;
  date: string;
  time: string;
  address: string;
  isHighlighted?: boolean;
}

const UpcomingInspections: React.FC = () => {
  const inspections: Inspection[] = [
    {
      id: "1",
      date: "Friday 25 Nov, 2025",
      time: "10:00 AM",
      address: "Your address, Ikeja Lagos",
      isHighlighted: true,
    },
    {
      id: "2",
      date: "Friday 25 Nov, 2025",
      time: "10:00 AM",
      address: "Your address, Ikeja Lagos",
      isHighlighted: false,
    },
  ];

  return (
    <div className=" bg-[#F5F9FF] rounded-2xl border border-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-medium text-autobuy-neutral-1">
          Upcoming Inspections
        </h2>
        <button className=" text-autobuy-primary2.5 italic hover:text-blue-700 text-sm font-medium transition-colors">
          [View All]
        </button>
      </div>

      {/* Inspections List */}
      <div className="space-y-4">
        {inspections.map((inspection) => (
          <div
           
            key={inspection.id}
            className={`p-4 rounded-xl transition-all duration-200 ${
              inspection.isHighlighted
                ? "bg-white border-l-4  border-autobuy-orange-1"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {/* Inspection Details */}
            <div className="space-y-3">
              {/* Date */}
              <div className="flex items-center gap-3">
                <Icon
                  icon="mdi:calendar-outline"
                  className={`w-4 h-4 ${
                    inspection.isHighlighted ? "text-blue-500" : "text-blue-500"
                  }`}
                />
                <div>
                  <span className="text-sm text-gray-600">Date: </span>
                  <span className="text-sm font-medium text-gray-900">
                    {inspection.date}
                  </span>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3">
                <Icon
                  icon="mdi:clock-outline"
                  className={`w-4 h-4 ${
                    inspection.isHighlighted ? "text-blue-500" : "text-blue-500"
                  }`}
                />
                <div>
                  <span className="text-sm text-gray-600">Time: </span>
                  <span className="text-sm font-medium text-gray-900">
                    {inspection.time}
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3">
                <Icon
                  icon="mdi:map-marker-outline"
                  className={`w-4 h-4 ${
                    inspection.isHighlighted ? "text-blue-500" : "text-blue-500"
                  }`}
                />
                <div>
                  <span className="text-sm text-gray-600">Address: </span>
                  <span className="text-sm font-medium text-gray-900">
                    {inspection.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Reschedule Link */}
            <div className="flex justify-end mt-4 pt-3 border-t border-gray-200">
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors italic">
                [Reschedule]
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingInspections;
