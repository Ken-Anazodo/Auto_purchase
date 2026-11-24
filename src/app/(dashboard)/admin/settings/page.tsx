"use client";

import React from "react";
import BackButton from "@/components/BackButton";
import NotificationsSettings from "@/app/(dashboard)/admin/settings/components/NotificationsSettings";
import SecuritySettings from "@/app/(dashboard)/admin/settings/components/SecuritySettings";
import AccountActions from "@/app/(dashboard)/admin/settings/components/AccountActions";

const SettingsPage = () => {
  return (
    <div className=" space-y-8">
      {/* Header */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute left-0 top-0 hidden md:block">
          <BackButton text="Back to Home" />
        </div>
        <div className="md:hidden self-start mb-4">
            <BackButton text="Back to Home" /> 
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold text-autobuy-neutral-1">
            Account Settings
          </h1>
          <p className="text-sm text-autobuy-neutral-3 mt-1">
            Update your password, notification preferences, and security settings.
          </p>
        </div>
      </div>

      {/* Components */}
      <NotificationsSettings />
      <SecuritySettings />
      <AccountActions />
    </div>
  );
};

export default SettingsPage;