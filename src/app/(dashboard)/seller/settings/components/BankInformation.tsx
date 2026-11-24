"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
}

interface BankInformationProps {
  initialData?: Partial<BankDetails>;
  onUpdate?: (data: BankDetails) => void;
}

export function BankInformation({
  initialData = {},
  onUpdate,
}: BankInformationProps) {
  const [bankDetails, setBankDetails] = useState<BankDetails>({
    bankName: initialData.bankName || "First Bank",
    accountName: initialData.accountName || "Olediaa mathew",
    accountNumber: initialData.accountNumber || "1234567890",
  });

  const handleInputChange = (field: keyof BankDetails) => (value: string) => {
    setBankDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = () => {
    onUpdate?.(bankDetails);
  };



  return (
    <div className="rounded-xl bg-[#FFFFFF] shadow-md">
      <header className="bg-orange-50 w-full rounded-t-xl px-6 py-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Bank Information
        </h3>
      </header>

      <main className="p-6">
        <p className="text-sm text-gray-600 mb-6">
          Your registered bank account for receiving earnings
        </p>

        <div className="space-y-6">
          <div>
            <Label
              htmlFor="bankName"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              Bank Name
            </Label>
            <Input
              id="bankName"
              type="text"
              value={bankDetails.bankName}
              onChange={(e) => handleInputChange("bankName")(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none h-auto"
              placeholder="Enter bank name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="accountName"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Account Name
              </Label>
              <Input
                id="accountName"
                type="text"
                value={bankDetails.accountName}
                onChange={(e) =>
                  handleInputChange("accountName")(e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none h-auto"
                placeholder="Enter account name"
              />
            </div>

            <div>
              <Label
                htmlFor="accountNumber"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Account Number
              </Label>
              <Input
                id="accountNumber"
                type="text"
                value={bankDetails.accountNumber}
                onChange={(e) =>
                  handleInputChange("accountNumber")(e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none h-auto"
                placeholder="Enter account number"
              />
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <Button
              onClick={handleUpdate}
              className="bg-[#EF693E] hover:bg-orange-600 text-white px-8 py-2 rounded-lg"
            >
              Update Bank Details
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
