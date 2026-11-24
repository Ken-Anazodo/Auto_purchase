"use client";

import React from "react";

const AccountActions = () => {
  return (
    <div className="bg-white rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
      <div className="bg-autobuy-blue-6/30 px-8 py-4 border-b border-autobuy-neutral-6">
        <h2 className="text-base font-bold text-autobuy-neutral-1">
          Account Actions
        </h2>
      </div>

      <div className="p-8 space-y-8">
        {/* Log Out */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-autobuy-neutral-6">
          <div className="max-w-lg">
            <h3 className="text-sm font-bold text-autobuy-neutral-1 mb-1">
              Log Out
            </h3>
            <p className="text-xs text-autobuy-neutral-3">
              Sign out of your account securely. Logging out will keep your
              account and data safe, and you can sign back in anytime.
            </p>
          </div>
          <button className="px-8 py-2.5 rounded-lg bg-red-100/50 text-autobuy-red-1 text-sm font-bold hover:bg-red-100 transition-colors whitespace-nowrap">
            Log Out
          </button>
        </div>

        {/* Delete Account */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-lg">
            <h3 className="text-sm font-bold text-autobuy-neutral-1 mb-1">
              Delete Account
            </h3>
            <p className="text-xs text-autobuy-neutral-3">
              Deleting your account is permanent, All your data, orders and
              preferences will be removed and cannot be recovered.
            </p>
          </div>
          <button className="px-8 py-2.5 rounded-lg bg-autobuy-red-1 text-white text-sm font-bold hover:bg-red-600 transition-colors whitespace-nowrap">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountActions;
