"use client";

import React, { useState } from "react";
import Calendar from "./Calendar";
import InspectionForm from "./InspectionForm";
import NextInspectionForm from "./NextInspectionForm";
import SuccessModal from "./SuccessModal";
import { Icon } from "@iconify/react";
import ActionButton from "@/components/ActionButton";
import { useRouter } from "next/navigation";

interface InspectionFormData {
  sellerType: string;
  cacNumber?: string;
  companyAddress?: string;
  nin?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  city: string;
  numberOfCars: string;
}

interface NextInspectionFormData {
  address: string;
  numberOfCars: string;
}

type FormData = InspectionFormData | NextInspectionFormData;

interface InspectionBookingData {
  selectedDate: Date | null;
  selectedTime: string | null;
  formData: FormData;
  isFirstTimer: boolean;
}

interface InspectionFormLayoutProps {
  isFirstTimer?: boolean;
}


function InspectionFormLayout({
  isFirstTimer = false,
}: InspectionFormLayoutProps) {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
  };

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleBack = () => {
    router.back();
  };

  const handleBookInspection = async () => {
    if (!formData || !selectedDate || !selectedTime) {
      alert("Please complete the form and select a date and time");
      return;
    }

    setIsSubmitting(true);

    const bookingData: InspectionBookingData = {
      selectedDate,
      selectedTime,
      formData,
      isFirstTimer,
    };

    try {
      // Here you would make the API call
      console.log("Booking inspection with data:", bookingData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success handling - show modal instead of alert
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error booking inspection:", error);
      alert("Failed to book inspection. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const formatBookingDetails = () => {
    if (!selectedDate || !selectedTime || !formData) return null;

    // Handle address formatting based on form type
    let address = "";
    if ("city" in formData && "state" in formData) {
      // First timer form (has city and state)
      address = `${formData.address}, ${formData.city} ${formData.state}`;
    } else {
      // Regular user form (just address)
      address = formData.address;
    }

    return {
      date: selectedDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      time: selectedTime,
      address,
    };
  };

  const isFormComplete = formData !== null;
  const isDateTimeSelected = selectedDate !== null && selectedTime !== null;
  const canSubmit = isFormComplete && isDateTimeSelected && !isSubmitting;

  // Debug information
  console.log("Form validation:", {
    formData,
    selectedDate,
    selectedTime,
    isFormComplete,
    isDateTimeSelected,
    canSubmit,
  });

  return (
    <div className="bg-[#F5F9FF] w-full min-h-screen p-5 md:p-10 lg:p-20 rounded-lg space-y-6">
      {isFirstTimer ? (
        <InspectionForm onSubmit={handleFormSubmit} onBack={handleBack} />
      ) : (
        <NextInspectionForm onSubmit={handleFormSubmit} onBack={handleBack} />
      )}
      <hr className="border-gray-200" />
      <Calendar onDateTimeSelect={handleDateTimeSelect} />

      {/* Book Inspection Button */}
      <div className="flex flex-col items-center space-y-4 pt-6">
        <ActionButton
          onClick={handleBookInspection}
          disabled={!canSubmit}
          isLoading={isSubmitting}
          loadingText="Booking Inspection..."
          variant="primary"
          size="lg"
          fullWidth={true}
          customWidth="max-w-md"
          rounded="xl"
          className="font-semibold bg-autobuy-orange-1 border-autobuy-orange-1 hover:bg-autobuy-orange-2 hover:border-autobuy-orange-2 focus:ring-autobuy-orange-2"
        >
          Book Inspection
        </ActionButton>

        {/* Help Text */}
        <div className="text-center text-sm text-gray-600">
          <span>
            Need help booking an inspection? We&apos;ve got you covered{" "}
          </span>
          <Icon
            icon="mdi:arrow-right"
            className="w-4 h-4 inline mx-1 text-blue-500"
          />
          <button className="text-blue-500 hover:text-blue-600 font-medium underline">
            Contact Support
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && formatBookingDetails() && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={handleCloseSuccessModal}
          bookingDetails={formatBookingDetails()!}
        />
      )}
    </div>
  );
}

export default InspectionFormLayout;
