"use client";
import React from "react";
import { Icon } from "@iconify/react";

interface AdvancedFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const AdvancedFilterModal: React.FC<AdvancedFilterModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white relative rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto over">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Advanced Filters
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon icon="mdi:close" className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="p-6">{content}</div>
      </div>
    </div>
  );
};

export default AdvancedFilterModal;
