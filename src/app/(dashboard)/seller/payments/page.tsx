/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import EarningsCard from "./components/EarningsCard";
import BankAccountCard from "./components/BankAccountCard";
import SalesHistoryTable from "./components/SalesHistoryTable";
import BankDetailsModal from "./components/BankDetailsModal";

const PaymentsPage = () => {
  // State for bank details modal
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    bankName: "First Bank",
    accountName: "Mary Blessing",
    accountNumber: "01234567810",
  });

  // Sample data
  const earningsData = [
    {
      title: "Total Revenue",
      amount: "₦5,000,000.00",
      subtitle: "vs last month",
      icon: "mdi:trending-up",
      iconColor: "text-orange-500",
      subtitleColor: "text-xs text-[#0066CC]",
      changeIndicator: {
        value: "+12.4%",
        trend: "up" as const,
      },
    },
    {
      title: "Amount Remitted",
      amount: "₦5,000,000.00",
      subtitle: "Payment already sent to your bank",
      icon: "mdi:trending-up",
      iconColor: "text-orange-500",
      subtitleColor: "text-xs text-[#0066CC]",
      changeIndicator: {
        value: "+8.2%",
        trend: "up" as const,
      },
    },
    {
      title: "Pending Remittance",
      amount: "₦5,000,000.00",
      subtitle: "Payment for vehicle sold in processing",
      icon: "mdi:trending-up",
      iconColor: "text-orange-500",
      subtitleColor: "text-xs text-[#0066CC]",
    },
    {
      title: "Cars Sold",
      amount: "2",
      subtitle: "Successful sales, congrats!",
      icon: "mdi:car",
      iconColor: "text-orange-500",
      subtitleColor: "text-green-600",
      changeIndicator: {
        value: "+2",
        trend: "up" as const,
      },
    },
  ];

  const vehiclesData = [
    {
      id: "1",
      name: "Toyota Corolla",
      year: "2018",
      amountSold: "₦5,000,000.00",
      deliveryStatus: "In-Transit" as const,
      remittanceStatus: "Pending" as const,
      date: "12 Nov, 2025",
    },
    {
      id: "2",
      name: "Toyota Corolla",
      year: "2018",
      amountSold: "₦5,000,000.00",
      deliveryStatus: "Delivered" as const,
      remittanceStatus: "Paid" as const,
      date: "12 Nov, 2025",
    },
    {
      id: "3",
      name: "Toyota Corolla",
      year: "2018",
      amountSold: "₦5,000,000.00",
      deliveryStatus: "Awaiting Pickup" as const,
      remittanceStatus: "Pending" as const,
      date: "12 Nov, 2025",
    },
    {
      id: "4",
      name: "Toyota Corolla",
      year: "2018",
      amountSold: "₦5,000,000.00",
      deliveryStatus: "In-Transit" as const,
      remittanceStatus: "Pending" as const,
      date: "12 Nov, 2025",
    },
  ];

  const handleUpdateBankDetails = () => {
    setIsBankModalOpen(true);
  };

  const handleSaveBankDetails = (newBankDetails: any) => {
    setBankDetails(newBankDetails);
    setIsBankModalOpen(false);
    console.log("Bank details updated:", newBankDetails);
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Earnings Overview
            </h1>
            <p className="text-gray-600">
              Track your total sales and remittances. Every completed order is
              paid directly into your bank account.
            </p>
          </div>

          {/* First row: 3 Earnings Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <EarningsCard
              title={earningsData[0].title}
              amount={earningsData[0].amount}
              subtitle={earningsData[0].subtitle}
              icon={earningsData[0].icon}
              iconColor={earningsData[0].iconColor}
              subtitleColor={earningsData[0].subtitleColor}
              changeIndicator={earningsData[0].changeIndicator}
            />
            <EarningsCard
              title={earningsData[1].title}
              amount={earningsData[1].amount}
              subtitle={earningsData[1].subtitle}
              icon={earningsData[1].icon}
              iconColor={earningsData[1].iconColor}
              subtitleColor={earningsData[1].subtitleColor}
              changeIndicator={earningsData[1].changeIndicator}
            />
            <BankAccountCard
              bankName={bankDetails.bankName}
              accountName={bankDetails.accountName}
              accountNumber={bankDetails.accountNumber}
              remittanceNote="Remittance is paid after 72 hours"
              onUpdateBankDetails={handleUpdateBankDetails}
            />
            <EarningsCard
              title={earningsData[2].title}
              amount={earningsData[2].amount}
              subtitle={earningsData[2].subtitle}
              icon={earningsData[2].icon}
              iconColor={earningsData[2].iconColor}
              subtitleColor={earningsData[2].subtitleColor}
              changeIndicator={earningsData[2].changeIndicator}
            />
            <EarningsCard
              title={earningsData[3].title}
              amount={earningsData[3].amount}
              subtitle={earningsData[3].subtitle}
              icon={earningsData[3].icon}
              iconColor={earningsData[3].iconColor}
              subtitleColor={earningsData[3].subtitleColor}
              changeIndicator={earningsData[3].changeIndicator}
            />
          </div>
        </div>
        {/* Sales History Table */}
        <SalesHistoryTable vehicles={vehiclesData} />

        {/* Bank Details Modal */}
        <BankDetailsModal
          isOpen={isBankModalOpen}
          onClose={() => setIsBankModalOpen(false)}
          onSave={handleSaveBankDetails}
          existingDetails={bankDetails}
        />
      </div>
    </div>
  );
};

export default PaymentsPage;
