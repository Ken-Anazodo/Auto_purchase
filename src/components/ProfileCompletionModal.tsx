"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, User, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";

interface ProfileCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  completionPercentage?: number;
  missingFields?: string[];
  profilePath?: string;
}

const ProfileCompletionModal: React.FC<ProfileCompletionModalProps> = ({
  isOpen,
  onClose,
  completionPercentage = 80,
  missingFields = [],
  profilePath = "/seller/profile/update",
}) => {
  const router = useRouter();

  const handleCompleteProfile = () => {
    onClose();
    router.push(profilePath);
  };

  const handleDismiss = () => {
    onClose();
    // Optional: Store dismissal in localStorage to avoid showing too frequently
    localStorage.setItem("profileCompletionDismissed", Date.now().toString());
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="sm:max-w-[425px] p-0 bg-white rounded-2xl border-0 shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Profile completion
                </h3>
                <p className="text-blue-100 text-sm">
                  {completionPercentage}% complete
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-2 bg-gray-50">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-4">
            <div className="flex items-start space-x-3 mb-4">
              <div className="p-1 bg-amber-100 rounded-full">
                <AlertCircle className="h-4 w-4 text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Please complete your profile to unlock all features and
                  improve your selling experience.
                </p>

                {missingFields.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-2">
                      Missing information:
                    </p>
                    <ul className="space-y-1">
                      {missingFields.slice(0, 3).map((field, index) => (
                        <li
                          key={index}
                          className="text-xs text-gray-600 flex items-center"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                          {field}
                        </li>
                      ))}
                      {missingFields.length > 3 && (
                        <li className="text-xs text-gray-500">
                          +{missingFields.length - 3} more fields
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleCompleteProfile}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-between group"
            >
              <span>Complete your profile</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Dismiss Option */}
            <button
              onClick={handleDismiss}
              className="w-full mt-2 text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ProfileCompletionModal;
