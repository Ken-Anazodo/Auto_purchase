"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface CalendarProps {
  onDateTimeSelect?: (date: Date, time: string) => void;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

const Calendar: React.FC<CalendarProps> = ({ onDateTimeSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10)); 
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Available time slots
  const timeSlots: TimeSlot[] = [
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "01:00 PM", available: true },
    { time: "10:00 AM", available: false },
    { time: "10:00 AM", available: false },
    { time: "10:00 AM", available: false },
  ];

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

  const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; 

    const days = [];

    // Add previous month's days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonth.getDate() - i,
        isCurrentMonth: false,
        isNextMonth: false,
        date: new Date(year, month - 1, prevMonth.getDate() - i),
      });
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isNextMonth: false,
        date: new Date(year, month, day),
      });
    }

    // Add next month's days
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isNextMonth: true,
        date: new Date(year, month + 1, day),
      });
    }

    return days;
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth);
    if (direction === "prev") {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  const handleDateClick = (date: Date, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;
    setSelectedDate(date);
    setSelectedTime(null); 
  };

  const handleTimeClick = (time: string, available: boolean) => {
    if (!available || !selectedDate) return;
    setSelectedTime(time);
    if (onDateTimeSelect) {
      onDateTimeSelect(selectedDate, time);
    }
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="">
      <h2 className="text-base font-normal text-autobuy-neutral-2 mb-6">
        Select date & Time
      </h2>

      {/* Calendar Header */}
      <div className="flex items-center justify-between md:justify-center mb-6">
        <button
          onClick={() => navigateMonth("prev")}
          className="p-3 hover:bg-orange-50 rounded-full transition-colors bg-orange-100 md:hidden block"
        >
          <Icon icon="mdi:chevron-left" className="w-4 h-4 text-autobuy-orange-1 " />
        </button>

        <h3 className="text-base text-center font-medium text-blue-500">
          {monthNames[currentMonth.getMonth()]}
        </h3>

        <button
          onClick={() => navigateMonth("next")}
          className="p-3 hover:bg-orange-50 rounded-full transition-colors bg-orange-100 md:hidden block"
        >
          <Icon icon="mdi:chevron-right" className="w-4 h-4 text-autobuy-orange-1 " />
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 gap-2 mb-4 max-w-[600px] mx-auto">
        {dayNames.map((day, index) => (
          <div
            key={day}
            className={`text-center text-sm font-medium py-2 size-10   ${
              index >= 5 ? "text-blue-500" : "text-gray-700"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <section className="flex items-center max-w-[900px] mx-auto">
        <button
          onClick={() => navigateMonth("prev")}
          className="p-3 hover:bg-orange-50 rounded-full transition-colors bg-orange-100 hidden md:block"
        >
          <Icon icon="mdi:chevron-left" className="w-4 h-4 text-autobuy-orange-1 " />
        </button>

        <div className="grid grid-cols-7 gap-2 mb-8 w-full max-w-[600px] mx-auto">
          {days.map((dayInfo, index) => {
            const isCurrentMonth = dayInfo.isCurrentMonth;
            const isDateSelected = isSelected(dayInfo.date);
            const isDateToday = isToday(dayInfo.date);
            const isWeekend = index % 7 >= 5;

            return (
              <button
                key={index}
                onClick={() => handleDateClick(dayInfo.date, isCurrentMonth)}
                className={`
                size-10 text-sm rounded-lg transition-colors flex items-center justify-center
                ${
                  isCurrentMonth
                    ? isWeekend
                      ? "text-blue-500 hover:bg-autobuy-primary2.5 "
                      : "text-gray-900 hover:bg-autobuy-primary2.5 "
                    : "text-gray-300"
                }
                ${
                  isDateSelected
                    ? "bg-autobuy-primary2.5  text-white hover:bg-autobuy-blue-1/50"
                    : ""
                }
                ${
                  isDateToday && !isDateSelected
                    ? "bg-gray-200 text-gray-900"
                    : ""
                }
                ${!isCurrentMonth ? "cursor-default" : "cursor-pointer"}
              `}
                disabled={!isCurrentMonth}
              >
                {dayInfo.day}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => navigateMonth("next")}
          className="p-3 hover:bg-orange-50 rounded-full transition-colors bg-orange-100 hidden md:block"
        >
          <Icon icon="mdi:chevron-right" className="w-4 h-4 text-orange-500" />
        </button>
      </section>

      {/* Available Times */}
      <div className=" lg:flex items-center gap-5 w-fit mx-auto">
        <h4 className="text-base font-medium text-gray-900">Available Time:</h4>
        <div className="flex flex-wrap gap-3">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => handleTimeClick(slot.time, slot.available)}
              disabled={!slot.available || !selectedDate}
              className={`
                px-6 py-3 rounded-xl text-sm font-medium transition-colors min-w-[100px]
                ${
                  slot.available && selectedDate
                    ? selectedTime === slot.time
                      ? "bg-autobuy-orange-1  text-white"
                      : "border border-orange-200 text-gray-700 hover:border-orange-400 bg-white"
                    : "border border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50"
                }
              `}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
