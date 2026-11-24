"use client";

import React from "react";

interface ProfilePictureProps {
  imageUrl?: string;
  alt?: string;
  onImageChange?: (file: File) => void;
}

export function ProfilePicture({
  imageUrl,
  alt = "Profile",
  onImageChange,
}: ProfilePictureProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onImageChange) {
      onImageChange(file);
    }
  };

  return (
    <div className="flex justify-center md:justify-start">
      <div className="relative group">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={alt}
            className="w-40 h-40 rounded-full object-cover"
          />
        ) : (
          <div className="w-40 h-40 bg-[#4a84ff] rounded-full" />
        )}

        {onImageChange && (
          <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
            <span className="text-sm text-center">Change Photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  );
}
