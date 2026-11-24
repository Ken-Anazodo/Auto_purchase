import React from "react";

interface InspectionRecord {
  id: string;
  name: string;
  numberOfCars: number;
  address: string;
  date: string;
  time: string;
  status: "Completed" | "Cancelled";
}

const InspectionHistory = () => {
  // Sample inspection history data
  const inspectionHistory: InspectionRecord[] = [
    {
      id: "1",
      name: "Martins peace",
      numberOfCars: 2,
      address: "My address is lagos",
      date: "25 Nov, 2025",
      time: "10:00 AM",
      status: "Completed",
    },
    {
      id: "2",
      name: "Martins peace",
      numberOfCars: 1,
      address: "My address is lagos",
      date: "25 Nov, 2025",
      time: "10:00 AM",
      status: "Completed",
    },
    {
      id: "3",
      name: "Martins peace",
      numberOfCars: 1,
      address: "My address is lagos",
      date: "25 Nov, 2025",
      time: "10:00 AM",
      status: "Completed",
    },
    {
      id: "4",
      name: "Martins peace",
      numberOfCars: 2,
      address: "My address is lagos",
      date: "25 Nov, 2025",
      time: "10:00 AM",
      status: "Cancelled",
    },
    {
      id: "5",
      name: "Martins peace",
      numberOfCars: 1,
      address: "My address is lagos",
      date: "25 Nov, 2025",
      time: "10:00 AM",
      status: "Cancelled",
    },
  ];

  const getStatusColor = (status: "Completed" | "Cancelled") => {
    return status === "Completed" ? "text-green-500" : "text-red-500";
  };

  return (
    <div className="rounded-lg  overflow-hidden">
      {/* Header Section */}
      <div className="px-6 py-6 border-b border-gray-200 ">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Inspection History
        </h2>
        <p className="text-gray-600 text-sm">
          Track all past inspections completed through the platform
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-[#EDF4FF]">
            <tr>
              <th className="px-6 py-4 text-left text-base font-medium text-[#1A1A1A]">
                Name
              </th>
              <th className="px-6 py-4 text-left text-nowrap text-base font-medium text-[#1A1A1A]">
                NO. of Cars
              </th>
              <th className="px-6 py-4 text-left text-base font-medium text-[#1A1A1A]">
                Address
              </th>
              <th className="px-6 py-4 text-left text-base font-medium text-[#1A1A1A]">
                Date
              </th>
              <th className="px-6 py-4 text-left text-base font-medium text-[#1A1A1A]">
                Time
              </th>
              <th className="px-6 py-4 text-left text-base font-medium text-[#1A1A1A]">
                Status
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {inspectionHistory.map((inspection) => (
              <tr
                key={inspection.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-sm text-gray-900 text-nowrap">
                  {inspection.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 text-nowrap">
                  {inspection.numberOfCars}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 text-nowrap">
                  {inspection.address}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 text-nowrap">
                  {inspection.date}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 text-nowrap">
                  {inspection.time}
                </td>
                <td
                  className={`px-6 py-4 text-sm font-medium text-nowrap ${getStatusColor(
                    inspection.status
                  )}`}
                >
                  {inspection.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State (if no data) */}
      {inspectionHistory.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-gray-500 text-sm">No inspection history found.</p>
        </div>
      )}
    </div>
  );
};

export default InspectionHistory;
