"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface AccountActionsProps {
  onLogOut?: () => void;
  onDeleteAccount?: () => void;
}



export function AccountActions({
  onLogOut,
  onDeleteAccount,
}: AccountActionsProps) {
  return (
    <div className=" rounded-xl bg-[#FFFFFF] shadow-md ">
      <header className="bg-orange-50 w-full rounded-t-xl px-6 py-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Account Actions
        </h3>
      </header>
      
      <div className=" p-6">
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-1">Log Out</h4>
          <p className="text-sm text-gray-600 mb-4">
            Sign out of your account securely. Logging out will keep your
            account and data safe, and you can sign back in anytime.
          </p>

          <div className="flex justify-end">
            <Button
              onClick={onLogOut}
              className="border-red-300 bg-[#F8C6C6] text-[#F12323] hover:bg-red-50 hover:border-red-400 px-8 py-2 rounded-lg"
            >
              Log Out
            </Button>
          </div>
        </div>

        {/* Delete Account Section */}
        <div className="border-t border-orange-200 pt-6">
          <h4 className="font-medium text-gray-900 mb-1">Delete Account</h4>
          <p className="text-sm text-gray-600 mb-4">
            Deleting your account is permanent. All your data, orders and
            preferences will be removed and cannot be recovered.
          </p>

          <div className="flex justify-end">
            <Button
              onClick={onDeleteAccount}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-lg"
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
