import React from "react";
import { Icon } from "@iconify/react";

interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  bankCode?: string;
  routingNumber?: string;
  swiftCode?: string;
}

interface PaymentInformationCardProps {
  bankDetails: BankDetails;
  onUpdateBankDetails: () => void;
}

const PaymentInformationCard: React.FC<PaymentInformationCardProps> = ({
  bankDetails,
  onUpdateBankDetails,
}) => {
  // Mask account number for security (show last 4 digits)
  const maskedAccountNumber = bankDetails.accountNumber
    ? `****${bankDetails.accountNumber.slice(-4)}`
    : "****";

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Payment Information
        </h3>
        <button
          onClick={onUpdateBankDetails}
          className="flex items-center space-x-2 bg-orange-50 border border-orange-500 text-orange-500 hover:bg-orange-100 px-3 py-1.5 rounded-[20px] transition-colors font-medium text-sm"
        >
          <Icon icon="lucide:edit" className="w-3 h-3" />
          <span>Update Bank Details</span>
        </button>
      </div>

      {/* Bank Details */}
      <div className="space-y-6">
        {/* Bank Name */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Bank Name:
          </label>
          <p className="text-gray-900 font-medium">{bankDetails.bankName}</p>
        </div>

        {/* Account Name */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Account Name:
          </label>
          <p className="text-gray-900 font-medium">{bankDetails.accountName}</p>
        </div>

        {/* Account Number */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Account Number:
          </label>
          <div className="flex items-center space-x-2">
            <p className="text-gray-900 font-medium font-mono tracking-wider">
              {maskedAccountNumber}
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(bankDetails.accountNumber);
                // Could add toast notification here
              }}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title="Copy full account number"
            >
              <Icon icon="mdi:content-copy" className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Bank Code (if available) */}
        {bankDetails.bankCode && (
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Bank Code:
            </label>
            <p className="text-gray-900 font-medium">{bankDetails.bankCode}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default PaymentInformationCard;
