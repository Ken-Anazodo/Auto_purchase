"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

const NotificationsSettings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  const [alertTypes, setAlertTypes] = useState({
    newUser: false,
    inspection: false,
    vehicle: false,
    payments: false,
    system: false,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleAlertChange = (key: keyof typeof alertTypes, checked: boolean) => {
    setAlertTypes((prev) => ({ ...prev, [key]: checked }));
  };

  return (
    <div className="bg-white rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
      <div className="bg-autobuy-blue-6/30 px-8 py-4 border-b border-autobuy-neutral-6">
        <h2 className="text-base font-bold text-autobuy-neutral-1">
          Notification Preferences
        </h2>
      </div>

      <div className="p-8 space-y-8">
        {/* Toggles */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-autobuy-neutral-1">
                Email Notifications:
              </h3>
              <p className="text-xs text-autobuy-neutral-3 mt-1">
                Get important updates about your listings and orders
              </p>
            </div>
            <Switch
              checked={notifications.email}
              onCheckedChange={() => toggleNotification("email")}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-autobuy-neutral-1">
                Push Notifications:
              </h3>
              <p className="text-xs text-autobuy-neutral-3 mt-1">
                Receive instant alerts on activities and inspection updates
              </p>
            </div>
            <Switch
              checked={notifications.push}
              onCheckedChange={() => toggleNotification("push")}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-autobuy-neutral-1">
                SMS Notifications:
              </h3>
              <p className="text-xs text-autobuy-neutral-3 mt-1">
                Stay informed via text messages
              </p>
            </div>
            <Switch
              checked={notifications.sms}
              onCheckedChange={() => toggleNotification("sms")}
            />
          </div>
        </div>

        {/* Alert Types */}
        <div>
          <p className="text-xs text-autobuy-neutral-2 mb-4">
            Choose what type of alerts you want to receive
          </p>
          <div className="space-y-4">
            <Checkbox
              label="New User Registration"
              checked={alertTypes.newUser}
              onCheckedChange={(c) => handleAlertChange("newUser", c)}
            />
            <Checkbox
              label="Inspection Updates"
              checked={alertTypes.inspection}
              onCheckedChange={(c) => handleAlertChange("inspection", c)}
            />
            <Checkbox
              label="Vehicle Listings"
              checked={alertTypes.vehicle}
              onCheckedChange={(c) => handleAlertChange("vehicle", c)}
            />
            <Checkbox
              label="Payments & transactions"
              checked={alertTypes.payments}
              onCheckedChange={(c) => handleAlertChange("payments", c)}
            />
            <Checkbox
              label="System alerts"
              checked={alertTypes.system}
              onCheckedChange={(c) => handleAlertChange("system", c)}
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button className="px-8 py-2.5 rounded-lg bg-autobuy-primary2.5 text-white text-sm font-medium hover:bg-blue-600 transition-colors">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSettings;
