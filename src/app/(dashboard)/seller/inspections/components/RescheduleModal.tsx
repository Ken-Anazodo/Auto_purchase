/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface RescheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newDate: string, newTime: string) => void;
  inspectionData?: {
    name: string;
    email: string;
    phone: string;
    address: string;
    numberOfCars: number;
  };
}

const RescheduleModal: React.FC<RescheduleModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  inspectionData = {
    name: "Sylvester Matthew",
    email: "Myemail@gmail.com",
    phone: "0123456789",
    address: "My address is",
    numberOfCars: 2,
  },
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [address, setAddress] = useState(inspectionData.address);
  const [numberOfCars, setNumberOfCars] = useState(inspectionData.numberOfCars);
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 10)); // November 2024

  // Available time slots
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    // "12:00 PM",
    // "1:00 PM",
    // "2:00 PM",
    // "3:00 PM",
    // "4:00 PM",
  ];

  if (!isOpen) return null;

  // Generate calendar days for the current month
  const generateCalendarDays = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: prevMonth.getDate() - i,
        isCurrentMonth: false,
        isPreviousMonth: true,
      });
    }

    // Add current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: day,
        isCurrentMonth: true,
        isPreviousMonth: false,
      });
    }

    // Add next month's leading days
    const remainingSlots = 42 - days.length;
    for (let day = 1; day <= remainingSlots; day++) {
      days.push({
        date: day,
        isCurrentMonth: false,
        isPreviousMonth: false,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays(currentMonth);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentMonth);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentMonth(newDate);
  };

  const handleDateClick = (day: any) => {
    if (day.isCurrentMonth) {
      const newDate = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day.date
      );
      setSelectedDate(newDate);
      setSelectedTime(null); // Reset selected time when date changes
    }
  };

  const isSelected = (day: any) => {
    if (!selectedDate || !day.isCurrentMonth) return false;
    return (
      selectedDate.getDate() === day.date &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const handleConfirmReschedule = () => {
    if (selectedDate && selectedTime) {
      const formattedDate = selectedDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      onSuccess(formattedDate, selectedTime);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Reschedule Inspection
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <Icon icon="mdi:close" className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Customer Info */}
          <div className="space-y-3">
            <div>
              <span className="text-gray-600">Name: </span>
              <span className="font-medium">{inspectionData.name}</span>
            </div>
            <div>
              <span className="text-gray-600">Email: </span>
              <span className="font-medium">{inspectionData.email}</span>
            </div>
            <div>
              <span className="text-gray-600">Phone: </span>
              <span className="font-medium">{inspectionData.phone}</span>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter address"
            />
          </div>

          {/* Number of Cars */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              No of Cars
            </label>
            <select
              value={numberOfCars}
              onChange={(e) => setNumberOfCars(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-4">
              Pick a new date and time:
            </label>

            {/* Calendar */}
            <div className="border border-gray-200 rounded-lg p-4">
              {/* Month Header */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => navigateMonth("prev")}
                  className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
                >
                  <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                </button>

                <h3 className="text-lg font-medium text-blue-600">
                  {monthNames[currentMonth.getMonth()]}
                </h3>

                <button
                  onClick={() => navigateMonth("next")}
                  className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
                >
                  <Icon icon="mdi:chevron-right" className="w-5 h-5" />
                </button>
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-medium text-gray-500 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateClick(day)}
                    disabled={!day.isCurrentMonth}
                    className={`
                      w-8 h-8 text-sm rounded flex items-center justify-center transition-all duration-200
                      ${
                        day.isCurrentMonth
                          ? isSelected(day)
                            ? "bg-autobuy-orange-1 text-white"
                            : "text-gray-900 hover:bg-gray-100"
                          : "text-gray-300"
                      }
                      ${
                        day.isCurrentMonth
                          ? "cursor-pointer"
                          : "cursor-not-allowed"
                      }
                    `}
                  >
                    {day.date}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Available Time Slots */}
          {selectedDate && (
            <div className="flex flex-wrap items-center gap-2">
              <label className="block text-gray-700 text-sm font-medium text-nowrap">
                Available time:
              </label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
                      px-2 py-1 text-xs rounded-[12px] border transition-all duration-200
                      ${
                        selectedTime === time
                          ? "bg-autobuy-orange-1 text-white border-autobuy-orange-1"
                          : "bg-white text-gray-700 border-autobuy-orange-1 hover:border-orange-300 hover:bg-orange-50"
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-gray-200 space-y-3">
          <button
            onClick={handleConfirmReschedule}
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Confirm Reschedule
          </button>

          <button
            onClick={onClose}
            className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;
