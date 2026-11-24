import React from "react";
import { Icon } from "@iconify/react";

interface CancelConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmCancel: () => void;
}

const CancelConfirmationModal: React.FC<CancelConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirmCancel,
}) => {
  if (!isOpen) return null;

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
          {/* Cancel Icon */}
          <div className="mx-auto w-16 h-16 border-4 border-autobuy-red-1 rounded-full flex items-center justify-center mb-6">
            <Icon icon="mdi:close" className="w-10 h-10 text-autobuy-red-1" />
          </div>


          <h2 className="text-xl font-medium text-gray-900 mb-4">
            Cancel Inspection?
          </h2>

          <p className=" text-autobuy-neutral-2 text-xs font-medium ">
            Are you sure you want to cancel this inspection?
          </p>

          <p className=" text-autobuy-neutral-2 text-xs font-medium mb-8">
            You can always reschedule for later if you change your mind
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-3 rounded-lg transition-colors duration-200 text-xs"
            >
              Keep Inspection
            </button>

            <button
              onClick={onConfirmCancel}
              className="flex-1 bg-autobuy-red-1 hover:autobuy-red-2 text-white font-medium py-3 px-2 rounded-lg transition-colors duration-200 text-xs"
            >
              Yes, Cancel Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelConfirmationModal;
