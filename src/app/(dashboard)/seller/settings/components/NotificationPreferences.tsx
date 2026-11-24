"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
}

interface NotificationPreferencesProps {
  initialSettings?: NotificationSettings;
  onUpdate?: (settings: NotificationSettings) => void;
}

export function NotificationPreferences({
  initialSettings = { email: true, push: false, sms: false },
  onUpdate,
}: NotificationPreferencesProps) {
  const [settings, setSettings] =
    useState<NotificationSettings>(initialSettings);

  const handleToggle = (type: keyof NotificationSettings) => {
    const newSettings = { ...settings, [type]: !settings[type] };
    setSettings(newSettings);
  };

  const handleUpdate = () => {
    onUpdate?.(settings);
  };



  return (
    <div className="rounded-xl bg-[#FFFFFF] shadow-md">
      <header className="bg-orange-50 w-full rounded-t-xl px-6 py-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {" "}
          Notification Preferences
        </h3>
      </header>

      <div className="space-y-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <Label className="text-base font-medium text-gray-900">
              Email Notifications:
            </Label>
            <p className="text-sm text-gray-600 mt-1">
              Get important updates about your listings and orders
            </p>
          </div>
          <Switch
            checked={settings.email}
            onCheckedChange={() => handleToggle("email")}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label className="text-base font-medium text-gray-900">
              Push Notifications:
            </Label>
            <p className="text-sm text-gray-600 mt-1">
              Receive instant alerts on activities and inspection updates
            </p>
          </div>
          <Switch
            checked={settings.push}
            onCheckedChange={() => handleToggle("push")}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label className="text-base font-medium text-gray-900">
              SMS Notifications:
            </Label>
            <p className="text-sm text-gray-600 mt-1">
              Stay informed via text messages
            </p>
          </div>
          <Switch
            checked={settings.sms}
            onCheckedChange={() => handleToggle("sms")}
          />
        </div>

        <div className="flex justify-end mt-8">
          <Button
            onClick={handleUpdate}
            className="bg-[#EF693E] hover:bg-orange-600 text-white px-8 py-2 rounded-lg"
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}
