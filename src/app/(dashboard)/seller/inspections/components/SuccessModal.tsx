"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import ActionButton from "@/components/ActionButton";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: {
    date: string;
    time: string;
    address: string;
  };
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  bookingDetails,
}) => {
  const handleReturnToDashboard = () => {
    onClose();
    // Navigate to dashboard - you can implement navigation logic here
    window.location.href = "/seller/dashboard";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-2xl p-0 overflow-hidden">
        {/* Header with back button */}
        <DialogHeader className="relative p-6 pb-0">
          <button
            onClick={onClose}
            className="absolute left-6 top-6 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5 text-gray-600" />
          </button>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 pb-6 pt-8 text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
              <Icon icon="mdi:check" className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">
              Inspection Booked Successfully
            </h2>
            <p className="text-sm text-gray-600">
              you&apos;ll receive confirmation via email
            </p>
          </div>

          {/* Booking Details */}
          <div className="space-y-4 text-left bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon icon="mdi:calendar" className="w-5 h-5 text-blue-500" />
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Date:{" "}
                </span>
                <span className="text-sm text-gray-600">
                  {bookingDetails.date}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Icon icon="mdi:clock" className="w-5 h-5 text-blue-500" />
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Time:{" "}
                </span>
                <span className="text-sm text-gray-600">
                  {bookingDetails.time}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Icon icon="mdi:map-marker" className="w-5 h-5 text-blue-500" />
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Address:{" "}
                </span>
                <span className="text-sm text-gray-600">
                  {bookingDetails.address}
                </span>
              </div>
            </div>
          </div>

          {/* Return to Dashboard Button */}
          <ActionButton
            onClick={handleReturnToDashboard}
            variant="primary"
            size="lg"
            fullWidth={true}
            rounded="xl"
            className="font-semibold bg-autobuy-orange-1 text-white border-autobuy-orange-1 hover:bg-autobuy-orange-2 hover:border-autobuy-orange-2 focus:ring-autobuy-orange-2"
            customBg="bg-orange-500"
            customHover="hover:bg-orange-600"
          >
            Return to Dashboard
          </ActionButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
