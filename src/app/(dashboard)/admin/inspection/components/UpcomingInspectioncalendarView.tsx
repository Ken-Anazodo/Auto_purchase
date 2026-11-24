import React, { useState } from "react";
import { Icon } from "@iconify/react";
import InspectionDetailsModal from "./InspectionDetailsModal";
import RescheduleModal from "./RescheduleModal";
import RescheduleSuccessModal from "./RescheduleSuccessModal";
import CancelConfirmationModal from "./CancelConfirmationModal";
import CancelSuccessModal from "./CancelSuccessModal";

interface ScheduledInspection {
  id: string;
  time: string;
  numberOfCars: number;
  address: string;
  date: Date;
  email?: string;
  status?: "Pending" | "Confirmed" | "Cancelled";
}

const UpcomingInspectioncalendarView = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedInspection, setSelectedInspection] =
    useState<ScheduledInspection | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isCancelConfirmModalOpen, setIsCancelConfirmModalOpen] =
    useState(false);
  const [isCancelSuccessModalOpen, setIsCancelSuccessModalOpen] =
    useState(false);
  const [rescheduleDetails, setRescheduleDetails] = useState<{
    date: string;
    time: string;
    address: string;
  } | null>(null);

  const scheduledInspections: ScheduledInspection[] = [
    {
      id: "1",
      time: "10:00 AM",
      numberOfCars: 1,
      address: "Your address, Ikeja Lagos",
      date: new Date(2025, 10, 25), // Nov 25, 2025 (Friday)
      email: "Myemail@gmail.com",
      status: "Pending",
    },
    {
      id: "2",
      time: "9 AM",
      numberOfCars: 1,
      address: "Your address ikeja lagos",
      date: new Date(2025, 10, 9),
      email: "user@example.com",
      status: "Confirmed",
    },
    {
      id: "3",
      time: "11 AM",
      numberOfCars: 5,
      address: "Your address ikeja lagos",
      date: new Date(2025, 10, 11),
      email: "customer@example.com",
      status: "Pending",
    },
    {
      id: "4",
      time: "1 PM",
      numberOfCars: 4,
      address: "Your address ikeja lagos",
      date: new Date(2025, 11, 1),
      email: "client@example.com",
      status: "Confirmed",
    },
  ];

  // Time slots for the calendar
  const timeSlots = [
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 AM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
  ];

  // Get the week containing the current date
  const getWeekDays = (date: Date) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(day);
    }
    return weekDays;
  };

  const weekDays = getWeekDays(currentDate);

  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setCurrentDate(newDate);
  };

  const getInspectionsForTimeAndDay = (time: string, date: Date) => {
    return scheduledInspections.filter(
      (inspection) =>
        inspection.time === time &&
        inspection.date.toDateString() === date.toDateString()
    );
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  };

  const handleInspectionClick = (inspection: ScheduledInspection) => {
    setSelectedInspection(inspection);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInspection(null);
  };

  const handleCancelInspection = () => {
    setIsModalOpen(false);
    setIsCancelConfirmModalOpen(true);
  };

  const handleRescheduleInspection = () => {
    setIsModalOpen(false);
    setIsRescheduleModalOpen(true);
  };

  const handleRescheduleSuccess = (newDate: string, newTime: string) => {
    if (selectedInspection) {
      setRescheduleDetails({
        date: newDate,
        time: newTime,
        address: selectedInspection.address,
      });
    }
    setIsRescheduleModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleReturnToDashboard = () => {
    setIsSuccessModalOpen(false);
    setSelectedInspection(null);
    setRescheduleDetails(null);
    // You can add navigation to dashboard here if needed
  };

  const handleCloseRescheduleModal = () => {
    setIsRescheduleModalOpen(false);
    setSelectedInspection(null);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setRescheduleDetails(null);
  };

  const handleConfirmCancel = () => {
    setIsCancelConfirmModalOpen(false);
    setIsCancelSuccessModalOpen(true);
    // Here you would typically update the inspection status or remove it from the list
  };

  const handleCloseCancelConfirmModal = () => {
    setIsCancelConfirmModalOpen(false);
    setSelectedInspection(null);
  };

  const handleCancelReturnToDashboard = () => {
    setIsCancelSuccessModalOpen(false);
    setSelectedInspection(null);
    // You can add navigation to dashboard here if needed
  };

  const handleCloseCancelSuccessModal = () => {
    setIsCancelSuccessModalOpen(false);
  };

  const formatInspectionForModal = (inspection: ScheduledInspection) => {
    const date = inspection.date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return {
      id: inspection.id,
      date,
      time: inspection.time,
      email: inspection.email || "No email provided",
      address: inspection.address,
      status: inspection.status || "Pending",
    };
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <p className="text-gray-600 text-sm mb-4">
          Here&apos;s a list of your upcoming inspection bookings. You can
          reschedule any appointment
        </p>

        {/* Month Navigation */}
        <div className="flex items-center space-x-2 mb-4">
          <button
            onClick={() => navigateWeek("prev")}
            className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
          >
            <Icon
              icon="fluent:chevron-double-left-16-filled"
              className="w-8 h-5 text-autobuy-neutral-1"
            />
          </button>

          <h3 className="text-base font-medium text-autobuy-neutral-1mx-4">
            {formatMonthYear(currentDate)}
          </h3>

          <button
            onClick={() => navigateWeek("next")}
            className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
          >
            <Icon
              icon="fluent:chevron-double-right-16-filled"
              className="w-8 h-5 text-autobuy-neutral-1"
            />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Calendar Header */}
          <div className="grid grid-cols-8 border-b border-gray-200">
            <div className="p-3 text-sm font-bold text-gray-700 bg-gray-50 border-r border-gray-200 flex items-center justify-center">
              Time
            </div>
            {weekDays.map((date, index) => {
              const todayFlag = isToday(date);
              const selectedFlag = isSelected(date);

              return (
                <div
                  key={index}
                  className="p-2 text-center border-r border-gray-200 last:border-r-0 cursor-pointer hover:bg-gray-50 bg-[#F5F5F5]"
                  onClick={() => setSelectedDate(new Date(date))}
                >
                  <div
                    className={`inline-flex flex-row items-center justify-center gap-4 transition-all duration-200 rounded-lg px-3 py-4 w-full h-full ${
                      selectedFlag
                        ? "bg-autobuy-orange-1 text-white"
                        : todayFlag
                        ? "bg-blue-100 text-blue-700 border border-blue-300"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-xs font-medium">
                      {dayNames[index]}
                    </span>
                    <span className="text-sm font-semibold">
                      {date.getDate()}
                    </span>
                    {todayFlag && !selectedFlag && (
                      <span className="text-xs text-blue-600">Today</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Calendar Body */}
          <div className="divide-y divide-gray-200">
            {timeSlots.map((timeSlot) => (
              <div key={timeSlot} className="grid grid-cols-8 min-h-[80px]">
                {/* Time Column */}
                <div className="p-3 text-sm text-gray-600 bg-gray-50 border-r border-gray-200 flex items-center justify-center">
                  {timeSlot}
                </div>

                {/* Day Columns */}
                {weekDays.map((date, dayIndex) => {
                  const inspectionsForSlot = getInspectionsForTimeAndDay(
                    timeSlot,
                    date
                  );

                  return (
                    <div
                      key={dayIndex}
                      className=" border-r border-gray-200 last:border-r-0 relative hover:bg-gray-50 transition-colors duration-200 h-[8rem]"
                    >
                      {inspectionsForSlot.map((inspection) => (
                        <div
                          key={inspection.id}
                          className=" last:mb-0 h-full w-full"
                        >
                          <div
                            className="bg-orange-50 border-l-4 border-orange-500 rounded-r p-2 text-xs hover:bg-orange-100 transition-colors duration-200 cursor-pointer h-full w-full"
                            onClick={() => handleInspectionClick(inspection)}
                          >
                            <div className="text-orange-600 font-medium mb-1">
                              Scheduled inspection
                            </div>
                            <div className="text-gray-700 mb-1">
                              Today {inspection.time} -{" "}
                              {inspection.numberOfCars} car
                            </div>
                            <div className="text-gray-600">
                              {inspection.address}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Empty State (if no inspections) */}
      {scheduledInspections.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-gray-500 text-sm">
            No upcoming inspections scheduled.
          </p>
        </div>
      )}

      {/* Inspection Details Modal */}
      <InspectionDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        inspection={
          selectedInspection
            ? formatInspectionForModal(selectedInspection)
            : null
        }
        onCancel={handleCancelInspection}
        onReschedule={handleRescheduleInspection}
      />

      {/* Reschedule Modal */}
      <RescheduleModal
        isOpen={isRescheduleModalOpen}
        onClose={handleCloseRescheduleModal}
        onSuccess={handleRescheduleSuccess}
        inspectionData={
          selectedInspection
            ? {
                name: "Sylvester Matthew",
                email: selectedInspection.email || "No email",
                phone: "0123456789",
                address: selectedInspection.address,
                numberOfCars: selectedInspection.numberOfCars,
              }
            : undefined
        }
      />

      {/* Reschedule Success Modal */}
      <RescheduleSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
        onReturnToDashboard={handleReturnToDashboard}
        rescheduleDetails={rescheduleDetails || undefined}
      />

      {/* Cancel Confirmation Modal */}
      <CancelConfirmationModal
        isOpen={isCancelConfirmModalOpen}
        onClose={handleCloseCancelConfirmModal}
        onConfirmCancel={handleConfirmCancel}
      />

      {/* Cancel Success Modal */}
      <CancelSuccessModal
        isOpen={isCancelSuccessModalOpen}
        onClose={handleCloseCancelSuccessModal}
        onReturnToDashboard={handleCancelReturnToDashboard}
      />
    </div>
  );
};

export default UpcomingInspectioncalendarView;
