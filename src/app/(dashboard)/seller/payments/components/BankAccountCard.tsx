import React from "react";
import { Icon } from "@iconify/react";

interface BankAccountCardProps {
  bankName: string;
  accountName: string;
  accountNumber: string;
  remittanceNote: string;
  onUpdateBankDetails: () => void;
}

const BankAccountCard: React.FC<BankAccountCardProps> = ({
  bankName,
  accountName,
  accountNumber,
  remittanceNote,
  onUpdateBankDetails,
}) => {
  return (
    <div className="bg-white rounded-[16px] border border-[#F9C4A1] p-6 col-span-1 row-span-2">
      <header className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">Bank Account</h3>
        </div>

        <p className="text-xs text-gray-600 mb-2">
          This is where your earnings will automatically remit after delivery
          confirmation
        </p>
        <hr />
      </header>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Bank Name:</span>
          <span className="text-sm font-medium text-gray-900">{bankName}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Account Name:</span>
          <span className="text-sm font-medium text-gray-900">
            {accountName}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Account Number:</span>
          <span className="text-sm font-medium text-gray-900">
            {accountNumber}
          </span>
        </div>

        <div className="flex items-start space-x-2 text-xs text-[#0066CC]">
          <Icon
            icon="mdi:information"
            className="w-4 h-4 mt-0.5 flex-shrink-0"
          />
          <span>{remittanceNote}</span>
        </div>

        <button
          onClick={onUpdateBankDetails}
          className="w-fit ml-auto mt-6 bg-orange-50 border border-orange-500 text-orange-500 hover:bg-orange-100 font-medium py-2 px-4 rounded-[33px] transition-colors duration-200 flex items-center text-[10px]      space-x-2"
        >
          <Icon icon="lucide:edit" className="w-3 h-3 mt-0.5 flex-shrink-0" />
          Update Bank Details
        </button>
      </div>
    </div>
  );
};

export default BankAccountCard;
