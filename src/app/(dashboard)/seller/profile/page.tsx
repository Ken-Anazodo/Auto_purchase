"use client";

import React, { useState } from "react";
import ProfileHeader from "./components/ProfileHeader";
import PersonalInformationCard from "./components/PersonalInformationCard";
import PaymentInformationCard from "./components/PaymentInformationCard";
import EditPersonalInfoModal from "./components/EditPersonalInfoModal";
import BankDetailsModal from "../payments/components/BankDetailsModal";
import { useRouter } from "next/navigation";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  state: string;
  city: string;
  address: string;
  ninCac: string
}

interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  bankCode?: string;
  routingNumber?: string;
  swiftCode?: string;
}

const ProfilePage = () => {
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const router = useRouter();

  // Sample data
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "Matthew",
    lastName: "Matthew",
    email: "Myemail@gmail.com",
    phoneNumber: "0123456789",
    state: "Nigeria",
    city: "Lagos",
    address: "123, Victoria Island, Ikeja",
    ninCac: "12345678901",
  });

  const [bankDetails, setBankDetails] = useState<BankDetails>({
    bankName: "First Bank",
    accountName: "John Matthew Ugochukwu",
    accountNumber: "1234567891011112",
  });

  const userProfile = {
    name: "John Emmanuel",
    email: "Myemail@gmail.com",
    sellerSince: "11 June, 2025",
    avatar: "A",
  };

  const handleUpdateBankDetails = (updatedBankDetails: BankDetails) => {
    setBankDetails(updatedBankDetails);
    setIsBankModalOpen(false);
    console.log("Bank details updated:", updatedBankDetails);
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto p-6">
        <ProfileHeader user={userProfile} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <PersonalInformationCard
            personalInfo={personalInfo}
            onEdit={() => router.push("/seller/profile/update")}
          />

          <PaymentInformationCard
            bankDetails={bankDetails}
            onUpdateBankDetails={() => setIsBankModalOpen(true)}
          />
        </div>

        {/* Modals */}
        <BankDetailsModal
          isOpen={isBankModalOpen}
          onClose={() => setIsBankModalOpen(false)}
          onSave={handleUpdateBankDetails}
          existingDetails={bankDetails}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
