"use client";

import React from "react";
import BackButton from "@/components/BackButton";
import { Icon } from "@iconify/react";

const ProfilePage = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="relative mb-8 flex flex-col items-center justify-center">
        <div className="absolute left-0 top-0">
          <BackButton text="Back to Home" /> {/* Update text if needed, default is usually 'Back' */}
        </div>
        <div className="text-center mt-2 md:mt-0"> {/* Adjust margin for mobile if needed */}
          <h1 className="text-xl font-bold text-autobuy-neutral-1">
            My Profile
          </h1>
          <p className="text-sm text-autobuy-neutral-3 mt-1">
            Manage your personal information and account details.
          </p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl border border-autobuy-neutral-6 overflow-hidden shadow-sm">
        {/* Top Section */}
        <div className="bg-autobuy-blue-6/30 p-8 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-4xl font-semibold text-autobuy-primary2.5">
            E
          </div>
          <h2 className="text-lg font-bold text-autobuy-neutral-1">
            Emmanuel Williams
          </h2>
          <p className="text-sm text-autobuy-neutral-3 mt-1">
            Myemail@gmail.com
          </p>
          <p className="text-sm text-autobuy-neutral-3 mt-1">Super Admin</p>
        </div>

        {/* Bottom Section */}
        <div className="p-8">
          <h3 className="text-base font-bold text-autobuy-neutral-1 mb-6">
            Basic Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 mb-12">
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">
                First Name:
              </label>
              <p className="text-sm font-medium text-autobuy-neutral-1">
                Matthew
              </p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">
                Last Name:
              </label>
              <p className="text-sm font-medium text-autobuy-neutral-1">
                Matthew
              </p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">
                Status:
              </label>
              <p className="text-sm font-medium text-autobuy-green-1">
                Active
              </p>
            </div>

            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">
                Email:
              </label>
              <p className="text-sm font-medium text-autobuy-neutral-1">
                Myemail@gmail.com
              </p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">
                Phone Number:
              </label>
              <p className="text-sm font-medium text-autobuy-neutral-1">
                0123456789
              </p>
            </div>
             <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">
                User Role:
              </label>
              <p className="text-sm font-medium text-autobuy-neutral-1">
                Super Admin
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-autobuy-primary2.5 text-autobuy-primary2.5 text-sm font-medium hover:bg-blue-50 transition-colors">
              <Icon icon="mdi:pencil-outline" className="w-4 h-4" />
              Edit Profile Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;