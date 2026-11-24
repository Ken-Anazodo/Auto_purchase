"use client";

import React, { useState } from "react";
import Calendar from "./Calendar";
import InspectionForm from "./InspectionForm";
import NextInspectionForm from "./NextInspectionForm";
import SuccessModal, { BookingResponse } from "./SuccessModal";
import { Icon } from "@iconify/react";
import ActionButton from "@/components/ActionButton";
import { useRouter } from "next/navigation";
import { useGetUserByIdQuery, useCreateBookingMutation } from "@/services/admin/adminuserApi";
import toast from "react-hot-toast";

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
  userId?: string;
}


function InspectionFormLayout({
  isFirstTimer = false,
  userId,
}: InspectionFormLayoutProps) {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingResponse, setBookingResponse] = useState<BookingResponse | null>(null);
  const router = useRouter();

  const { data: userData, isLoading: isUserLoading } = useGetUserByIdQuery(
    { userId: userId || "" },
    { skip: !userId }
  );

  const [createBooking, { isLoading: isSubmitting }] = useCreateBookingMutation();

  const user = userData?.data?.user;

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
      toast.error("Please complete the form and select a date and time");
      return;
    }

    try {
      const formattedDate = selectedDate.toISOString(); 

      if (!userId) {
         toast.error("Cannot book inspection without a valid User ID from the preceding directory view.");
         return;
      }

      const payload = {
         userId: userId,
         data: {
           noOfCars: formData.numberOfCars,
           schedule: formattedDate.split('T')[0], // Assuming API expects YYYY-MM-DD from 'schedule'
           availableTime: selectedTime,
         }
      };

      const result = await createBooking(payload).unwrap();

      toast.success("Inspection booked successfully.");

      setBookingResponse(result?.data ?? null);
      setShowSuccessModal(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error booking inspection:", error);
      toast.error(error?.data?.message || error?.message || "Failed to book inspection. Please try again.");
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };



  const isFormComplete = formData !== null;
  const isDateTimeSelected = selectedDate !== null && selectedTime !== null;
  const canSubmit = isFormComplete && isDateTimeSelected && !isSubmitting;

  if (isUserLoading) {
     return <div className="min-h-screen flex items-center justify-center"><Icon icon="mdi:loading" className="w-8 h-8 animate-spin text-autobuy-blue-1" /></div>;
  }

  return (
    <div className="bg-[#F5F9FF] w-full min-h-screen p-5 md:p-10 lg:p-20 rounded-lg space-y-6">
      {isFirstTimer ? (
        <InspectionForm 
            onSubmit={handleFormSubmit} 
            onBack={handleBack} 
            defaultValues={{
              firstName: user?.firstName || "",
              lastName: user?.lastName || "",
              email: user?.email || "",
              phone: user?.phoneNumber || "",
              address: user?.address || "",
              state: user?.state || "",
              city: user?.city || "",
              nin: user?.nin || "",
              sellerType: user?.userType === "SELLER" ? "Individual" : "Individual",
            }}
        />
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
          className="font-semibold bg-autobuy-primary2.5 border-autobuy-blue-1 hover:bg-autobuy-blue-2 hover:border-autobuy-blue-2 focus:ring-autobuy-blue-2"
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
      {showSuccessModal && bookingResponse && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={handleCloseSuccessModal}
          booking={bookingResponse}
        />
      )}
    </div>
  );
}

export default InspectionFormLayout;
