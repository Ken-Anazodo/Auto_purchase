import React from "react";
import { Icon } from "@iconify/react";

interface RescheduleSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReturnToDashboard: () => void;
  rescheduleDetails?: {
    date: string;
    time: string;
    address: string;
  };
}

const RescheduleSuccessModal: React.FC<RescheduleSuccessModalProps> = ({
  isOpen,
  onClose,
  onReturnToDashboard,
  rescheduleDetails = {
    date: "25 Nov, 2025",
    time: "10:00 AM",
    address: "Your address, Ikeja Lagos",
  },
}) => {
  if (!isOpen) return null;

  const handleReturnToDashboard = () => {
    onReturnToDashboard();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <Icon icon="mdi:close" className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <Icon icon="mdi:check" className="w-8 h-8 text-orange-500" />
          </div>

          {/* Success Message */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Successful
          </h2>

          <p className="text-gray-600 mb-6">
            Your inspection has been successfully rescheduled for
          </p>

          {/* Reschedule Details */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-center space-x-3 bg-gray-50 py-3 px-4 rounded-lg">
              <Icon icon="mdi:calendar" className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">
                Date: {rescheduleDetails.date}
              </span>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-gray-50 py-3 px-4 rounded-lg">
              <Icon
                icon="mdi:clock-outline"
                className="w-5 h-5 text-blue-500"
              />
              <span className="text-gray-700">
                Time: {rescheduleDetails.time}
              </span>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-gray-50 py-3 px-4 rounded-lg">
              <Icon
                icon="mdi:map-marker-outline"
                className="w-5 h-5 text-blue-500"
              />
              <span className="text-gray-700">
                Address: {rescheduleDetails.address}
              </span>
            </div>
          </div>

          {/* Return Button */}
          <button
            onClick={handleReturnToDashboard}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default RescheduleSuccessModal;
