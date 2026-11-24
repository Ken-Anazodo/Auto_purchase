import React from "react";
import { Icon } from "@iconify/react";

interface CancelSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReturnToDashboard: () => void;
}

const CancelSuccessModal: React.FC<CancelSuccessModalProps> = ({
  isOpen,
  onClose,
  onReturnToDashboard,
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
            <Icon icon="mdi:check" className="w-8 h-8 text-autobuy-orange-1" />
          </div>

          {/* Success Message */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Successful
          </h2>

          <p className="text-gray-600 mb-14">
            Your inspection has been successfully cancelled
          </p>

          {/* Return Button */}
          <button
            onClick={handleReturnToDashboard}
            className="w-full bg-autobuy-orange-1 hover:bg-autobuy-orange-2 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelSuccessModal;
