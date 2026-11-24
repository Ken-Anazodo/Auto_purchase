"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  PageHeader,
  ProfileUpdateForm,
  type ProfileFormData,
} from "./components";

export default function EditProfileInformation() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string>();


  const initialData: Partial<ProfileFormData> = {
    firstName: "Mary",
    lastName: "Mary",
    email: "myemail@gmail.com",
    phone: "0123456789641",
    city: "Lagos",
    state: "Lagos",
    address: "Lagos",
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleImageChange = (file: File) => {
    // Create a preview URL for the selected image
    const imageUrl = URL.createObjectURL(file);
    setProfileImageUrl(imageUrl);

    // Here you would typically upload the image to your server
    // and get back a permanent URL
  };

  const handleFormSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);

    try {
      // Here you would make an API call to update the profile
      console.log("Updating profile with data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message or redirect
      // router.push("/dashboard/seller/profile");
    } catch (error) {
      console.error("Error updating profile:", error);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex flex-col items-center">
      <PageHeader
        title="Edit Profile Information"
        onBackClick={handleBackClick}
        backLabel="Back to Home"
      />

      <ProfileUpdateForm
        initialData={initialData}
        onSubmit={handleFormSubmit}
        onImageChange={handleImageChange}
        profileImageUrl={profileImageUrl}
        isLoading={isLoading}
      />
    </div>
  );
}
