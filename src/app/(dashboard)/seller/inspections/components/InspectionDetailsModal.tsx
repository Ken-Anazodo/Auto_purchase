import React from "react";
import { Icon } from "@iconify/react";

interface InspectionDetails {
  id: string;
  date: string;
  time: string;
  email: string;
  address: string;
  status: "Pending" | "Confirmed" | "Cancelled";
}

interface InspectionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  inspection: InspectionDetails | null;
  onCancel?: (id: string) => void;
  onReschedule?: (id: string) => void;
}

const InspectionDetailsModal: React.FC<InspectionDetailsModalProps> = ({
  isOpen,
  onClose,
  inspection,
  onCancel,
  onReschedule,
}) => {
  if (!isOpen || !inspection) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "Confirmed":
        return "text-green-500";
      case "Cancelled":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const handleCancel = () => {
    if (onCancel && inspection) {
      onCancel(inspection.id);
    }
    onClose();
  };

  const handleReschedule = () => {
    if (onReschedule && inspection) {
      onReschedule(inspection.id);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAFCFF] rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 italic">
            Scheduled inspection
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
          {/* Date */}
          <div className="flex items-center space-x-3">
            <Icon icon="mdi:calendar" className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">{inspection.date}</span>
          </div>

          {/* Time */}
          <div className="flex items-center space-x-3">
            <Icon icon="mdi:clock-outline" className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">Time: {inspection.time}</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <Icon icon="mdi:email-outline" className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">{inspection.email}</span>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-3">
            <Icon
              icon="mdi:map-marker-outline"
              className="w-5 h-5 text-blue-500"
            />
            <span className="text-gray-700">{inspection.address}</span>
          </div>

          {/* Status */}
          <div className="flex items-center space-x-3">
            <Icon
              icon="mdi:hourglass-empty"
              className="w-5 h-5 text-blue-500"
            />
            <span
              className={`font-medium ${getStatusColor(inspection.status)}`}
            >
              {inspection.status}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-2 py-4  border-t border-gray-200">
          <div className="flex  justify-between w-full">
            <button
              onClick={handleCancel}
              className="flex-1 text-[#F12323] text-left italic hover:text-red-700 font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              [Cancel]
            </button>
            <button
              onClick={handleReschedule}
              className="flex-1 text-[#0A6DFF] italic text-right hover:text-blue-700 font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              [Reschedule]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectionDetailsModal;
