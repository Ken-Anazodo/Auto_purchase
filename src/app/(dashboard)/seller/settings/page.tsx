"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  SettingsSidebar,
  NotificationPreferences,
  BankInformation,
  Security,
  AccountActions,
  MyProfile,
} from "./components";
import { Icon } from "@iconify/react";

type SettingsSection =
  | "profile"
  | "notifications"
  | "bank"
  | "security"
  | "logout";

export default function SettingsPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] =
    useState<SettingsSection>("profile");

  // Refs for each section to enable smooth scrolling
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const bankRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const logoutRef = useRef<HTMLDivElement>(null);

  const handleBackClick = () => {
    router.back();
  };

  const handleSectionChange = (section: SettingsSection) => {
    setActiveSection(section);

    // Scroll to the appropriate section
    const refs = {
      profile: profileRef,
      notifications: notificationsRef,
      bank: bankRef,
      security: securityRef,
      logout: logoutRef,
    };

    const targetRef = refs[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (section === "logout") {
      handleLogOut();
    }
  };

  const handleLogOut = () => {
    // Implement logout logic here
    console.log("Logging out...");
    // You would typically clear session, redirect to login, etc.
  };

  const handleDeleteAccount = () => {
    // Implement delete account logic here
    console.log("Deleting account...");
    // You would typically show a confirmation modal, then delete account
  };

  const handleNotificationUpdate = (settings: {
    email: boolean;
    push: boolean;
    sms: boolean;
  }) => {
    console.log("Updating notification settings:", settings);
    // Implement API call to update notification preferences
  };

  const handleBankUpdate = (bankData: {
    bankName: string;
    accountName: string;
    accountNumber: string;
  }) => {
    console.log("Updating bank information:", bankData);
    // Implement API call to update bank information
  };

  const handlePasswordUpdate = (
    currentPassword: string,
    newPassword: string
  ) => {
    console.log("Updating password from", currentPassword, "to", newPassword);
    // Implement API call to update password
  };

  return (
    <div className="h-screen bg-[#f7f7f7] p-6 flex flex-col">
      <div className="space-y-3 pb-10 ">
        <div className="flex items-center justify-between space-y-5">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-autobuy-neutral-1 hover:text-gray-800 transition-colors group bg-white border border-autobuy-neutral-6 px-6 py-3 rounded-2xl"
          >
            <Icon
              icon="mdi:arrow-left"
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
            />
            <span className="text-sm  ">Back to Home</span>
          </button>

          <h1 className="text-xl font-semibold text-gray-900  mx-auto">
            Settings
          </h1>
        </div>

        <p className="text-sm text-center text-gray-600">
          Manage your account preferences, notifications and security
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex-1 overflow-hidden">

        <div className="flex gap-6 h-full">
          {/* Desktop Sidebar */}
          <div className="hidden md:block flex-shrink-0 min-h-full">
            <SettingsSidebar
              activeSection={activeSection}
              onSectionChange={handleSectionChange}
            />
          </div>

          {/* Content Area - Only this part scrolls */}
          <div className="flex-1 overflow-y-auto md:pr-2 space-y-6">
            {/* My Profile Section */}
            <div ref={profileRef} id="profile">
              <MyProfile />
            </div>

            {/* Notification Preferences Section */}
            <div ref={notificationsRef} id="notifications">
              <NotificationPreferences onUpdate={handleNotificationUpdate} />
            </div>

            {/* Bank Information Section */}
            <div ref={bankRef} id="bank">
              <BankInformation onUpdate={handleBankUpdate} />
            </div>

            {/* Security Section */}
            <div ref={securityRef} id="security">
              <Security onPasswordUpdate={handlePasswordUpdate} />
            </div>

            {/* Account Actions Section */}
            <div ref={logoutRef} id="logout">
              <AccountActions
                onLogOut={handleLogOut}
                onDeleteAccount={handleDeleteAccount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
