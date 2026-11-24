"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function MyProfile() {
  const router = useRouter();

  const handleEditProfile = () => {
    router.push("/seller/profile/update");
  };

  return (
    <div className=" rounded-xl bg-[#FFFFFF] shadow-md ">
      <header className="bg-orange-50 w-full rounded-t-xl px-6 py-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">My Profile</h3>
      </header>

      <main className="p-6">
        <p className="text-sm text-gray-600 mb-6">
          Update your personal information and profile details
        </p>

        <div className="flex justify-end">
          <Button
            onClick={handleEditProfile}
            className="bg-[#EF693E] hover:bg-orange-600 text-white px-8 py-2 rounded-lg"
          >
            Edit Profile
          </Button>
        </div>
      </main>
    </div>
  );
}
