"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export interface BookingItem {
  _id: string;
  createdAt: string;
  user: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    state?: string;
    city?: string;
    address?: string;
    nin?: string;
  };
  details: {
    noOfCars: number;
  };
  status: string;
}

interface BookingsTableProps {
  bookings: BookingItem[];
  isLoading: boolean;
  onAddVehicle: (id: string) => void;
  onViewVehicle: (id: string) => void;
}

const formatDate = (dateString: string) => {
  if (!dateString) return "-";
  try {
    const d = new Date(dateString);
    const day = d.getDate().toString().padStart(2, "0");
    const month = d.toLocaleString("default", { month: "short" });
    const year = d.getFullYear();
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; 
    return `${day} ${month}, ${year}, ${hours}:${minutes} ${ampm}`;
  } catch (e) {
    return dateString;
  }
};

const BookingsTable: React.FC<BookingsTableProps> = ({
  bookings,
  isLoading,
  onAddVehicle,
  onViewVehicle,
}) => {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const getStatusStyle = (status: string) => {
    const s = status?.toLowerCase() || "";
    if (s === "pending") return "text-[#EFD80F]";
    if (s === "completed") return "text-[#34B233]";
    return "text-gray-500";
  };

  if (isLoading) {
    return (
      <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 flex justify-center items-center h-64">
        <Icon icon="mdi:loading" className="w-12 h-12 animate-spin text-autobuy-blue-2" />
      </div>
    );
  }

  return (
    <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-autobuy-blue-6 bg-opacity-50 text-left border-b border-autobuy-neutral-6">
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">
                Date/Time
              </th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">
                Name
              </th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">
                Email
              </th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">
                Phone
              </th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">
                State/city
              </th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">
                Address
              </th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">
                NIN/CAC
              </th>
              <th className="py-4 text-nowrap px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">
                No. of Cars
              </th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">
                Status
              </th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-autobuy-neutral-6 bg-white">
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center py-6 text-gray-500">
                  No bookings found.
                </td>
              </tr>
            ) : (
              bookings.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-[12px] font-[500] text-[#6B6B6B] whitespace-nowrap">
                    {formatDate(item.createdAt)}
                  </td>
                  <td className="py-4 px-6 text-xs font-medium text-gray-600 whitespace-nowrap capitalize">
                    {item.user?.firstName || item.user?.lastName ? `${item.user?.firstName || ""} ${item.user?.lastName || ""}` : "N/A"}
                  </td>
                  <td className="py-4 px-6 text-[12px] font-[500] text-[#6B6B6B] whitespace-nowrap">
                    {item.user?.email || "N/A"}
                  </td>
                  <td className="py-4 px-6 text-[12px] font-[500] text-[#6B6B6B] whitespace-nowrap">
                    {item.user?.phoneNumber || "-"}
                  </td>
                  <td className="py-4 px-6 text-[12px] font-[500] text-[#6B6B6B] whitespace-nowrap capitalize">
                    {item.user?.state || item.user?.city ? `${item.user?.state || ""} ${item.user?.city ? `, ${item.user.city}` : ""}` : "N/A"}
                  </td>
                  <td className="py-4 px-6 text-[12px] font-[500] text-[#6B6B6B] truncate max-w-[150px] capitalize">
                    {item.user?.address || "N/A"}
                  </td>
                  <td className="py-4 px-6 text-[12px] font-[500] text-[#6B6B6B] whitespace-nowrap">
                    {item.user?.nin || "N/A"}
                  </td>
                  <td className="py-4 px-6 text-[12px] font-[500] text-[#6B6B6B] text-center">
                    {item.details?.noOfCars || 0}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span
                        className={`text-[14px] font-[400] capitalize ${getStatusStyle(item.status)}`}
                      >
                        {item.status?.toLowerCase() || "unknown"}
                      </span>
                      <Icon
                        icon="mdi:chevron-down"
                        className="w-3 h-3 text-gray-400"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right whitespace-nowrap relative">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        onClick={() =>
                          item.status?.toLowerCase() === "pending"
                            ? onAddVehicle(item._id)
                            : onViewVehicle(item._id)
                        }
                        className="text-[14px] font-[500] text-[#0A6DFF] hover:text-autobuy-blue-1 italic"
                      >
                        {item.status?.toLowerCase() === "pending" ? "Add Vehicle" : "View"}
                      </button>
                      <button
                        onClick={(e) => toggleDropdown(item._id, e)}
                        className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Icon icon="mdi:dots-vertical" className="w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdown === item._id && (
                        <div
                          ref={dropdownRef}
                          className="absolute right-8 top-8  z-50 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden text-left animation-fade-in"
                        >
                          <div className="py-1">
                            <button
                              className="w-full px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 text-left transition-colors border-b border-gray-50"
                              onClick={() => console.log("Reschedule", item._id)}
                            >
                              Reschedule Inspection
                            </button>
                            <button
                              className="w-full px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 text-left transition-colors border-b border-gray-50"
                              onClick={() => console.log("Cancel", item._id)}
                            >
                              Cancel Inspection
                            </button>
                            <button
                              className="w-full px-4 py-2.5 text-xs text-autobuy-red-1 hover:bg-red-50 text-left transition-colors font-medium"
                              onClick={() => console.log("Delete", item._id)}
                            >
                              Delete Inspection
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsTable;
