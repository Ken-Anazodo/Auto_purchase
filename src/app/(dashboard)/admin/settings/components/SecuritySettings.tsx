"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

const SecuritySettings = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (key: keyof typeof showPassword) => {
    setShowPassword((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
      <div className="bg-autobuy-blue-6/30 px-8 py-4 border-b border-autobuy-neutral-6">
        <h2 className="text-base font-bold text-autobuy-neutral-1">Security</h2>
      </div>

      <div className="p-8">
        <h3 className="text-sm font-bold text-autobuy-neutral-1 mb-1">
          Change Password
        </h3>
        <p className="text-xs text-autobuy-neutral-3 mb-6">
          Update your login password to keep your account secure
        </p>

        <div className="space-y-6 max-w-3xl">
          <div>
            <label className="block text-xs text-autobuy-neutral-3 mb-1.5">
              Enter current password
            </label>
            <div className="relative">
              <input
                type={showPassword.current ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-lg border border-autobuy-neutral-6 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 text-sm text-autobuy-neutral-1 placeholder:text-autobuy-neutral-4"
              />
              <button
                onClick={() => togglePasswordVisibility("current")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-autobuy-neutral-3 hover:text-autobuy-neutral-1"
              >
                <Icon
                  icon={
                    showPassword.current
                      ? "mdi:eye-off-outline"
                      : "mdi:eye-outline"
                  }
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1.5">
                New password
              </label>
              <div className="relative">
                <input
                  type={showPassword.new ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg border border-autobuy-neutral-6 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 text-sm text-autobuy-neutral-1 placeholder:text-autobuy-neutral-4"
                />
                <button
                  onClick={() => togglePasswordVisibility("new")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-autobuy-neutral-3 hover:text-autobuy-neutral-1"
                >
                  <Icon
                    icon={
                      showPassword.new
                        ? "mdi:eye-off-outline"
                        : "mdi:eye-outline"
                    }
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1.5">
                Confirm New password
              </label>
              <div className="relative">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg border border-autobuy-neutral-6 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 text-sm text-autobuy-neutral-1 placeholder:text-autobuy-neutral-4"
                />
                <button
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-autobuy-neutral-3 hover:text-autobuy-neutral-1"
                >
                  <Icon
                    icon={
                      showPassword.confirm
                        ? "mdi:eye-off-outline"
                        : "mdi:eye-outline"
                    }
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-8">
          <button className="px-8 py-2.5 rounded-lg bg-autobuy-primary2.5 text-white text-sm font-medium hover:bg-blue-600 transition-colors">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
