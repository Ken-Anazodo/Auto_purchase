"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  show: boolean;
  onToggleVisibility: () => void;
}

function PasswordInput({
  id,
  label,
  value,
  onChange,
  show,
  onToggleVisibility,
}: PasswordInputProps) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 mb-2 block"
      >
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 pr-12 border border-gray-300 rounded-xl focus:outline-none h-auto"
          placeholder="Enter password"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onToggleVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-500 hover:text-gray-700"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}

interface SecurityProps {
  onPasswordUpdate?: (currentPassword: string, newPassword: string) => void;
}

export function Security({ onPasswordUpdate }: SecurityProps) {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange =
    (field: keyof typeof passwords) => (value: string) => {
      setPasswords((prev) => ({ ...prev, [field]: value }));
      setErrors([]); // Clear errors when user starts typing
    };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const validatePasswords = (): boolean => {
    const newErrors: string[] = [];

    if (!passwords.current) {
      newErrors.push("Current password is required");
    }

    if (!passwords.new) {
      newErrors.push("New password is required");
    } else if (passwords.new.length < 8) {
      newErrors.push("New password must be at least 8 characters");
    }

    if (passwords.new !== passwords.confirm) {
      newErrors.push("New passwords do not match");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleUpdate = () => {
    if (validatePasswords()) {
      onPasswordUpdate?.(passwords.current, passwords.new);
      // Reset form on success
      setPasswords({ current: "", new: "", confirm: "" });
    }
  };



  return (
    <div className="rounded-xl bg-[#FFFFFF] shadow-md">
      <header className="bg-orange-50 w-full rounded-t-xl px-6 py-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
      </header>

      <main className="p-6">
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-1">Change Password</h4>
          <p className="text-sm text-gray-600">
            Update your login password to keep your account secure
          </p>
        </div>

        <div className="space-y-6">
          <PasswordInput
            id="current"
            label="Enter current password"
            value={passwords.current}
            onChange={handleInputChange("current")}
            show={showPasswords.current}
            onToggleVisibility={() => togglePasswordVisibility("current")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PasswordInput
              id="new"
              label="New password"
              value={passwords.new}
              onChange={handleInputChange("new")}
              show={showPasswords.new}
              onToggleVisibility={() => togglePasswordVisibility("new")}
            />

            <PasswordInput
              id="confirm"
              label="Confirm New password"
              value={passwords.confirm}
              onChange={handleInputChange("confirm")}
              show={showPasswords.confirm}
              onToggleVisibility={() => togglePasswordVisibility("confirm")}
            />
          </div>

          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <ul className="text-sm text-red-600 space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-end mt-8">
            <Button
              onClick={handleUpdate}
              className="bg-[#EF693E] hover:bg-orange-600 text-white px-8 py-2 rounded-lg"
            >
              Update Bank Details
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
