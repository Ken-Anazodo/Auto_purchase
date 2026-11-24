"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface AuthRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
  redirectUrl?: string; // Where to redirect after login/signup (optional)
}

const AuthRequiredModal: React.FC<AuthRequiredModalProps> = ({
  isOpen,
  onClose,
  message = "Create an account or login to submit an offer for this vehicle",
  redirectUrl,
}) => {
  const router = useRouter();

  const handleAuthNavigation = (path: string) => {
    // Optionally append redirectUrl to query params
    const destination = redirectUrl 
      ? `${path}?redirect=${encodeURIComponent(redirectUrl)}`
      : path;
    
    router.push(destination);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[400px] p-0 flex flex-col items-center justify-center text-center bg-white rounded-3xl overflow-hidden shadow-xl border-none outline-none [&>button]:hidden">
        <div className="pt-12 pb-10 px-8 flex flex-col items-center w-full">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Sign In To Continue
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-[280px]">
            {message}
          </p>

          <div className="w-full space-y-3">
            <button
              onClick={() => handleAuthNavigation("/auth/sign-up")}
              className="w-full py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-blue-100 shadow-lg"
            >
              Sign Up
            </button>
            <button
              onClick={() => handleAuthNavigation("/auth/login")}
              className="w-full py-3.5 bg-white text-[#2563EB] font-semibold rounded-xl border border-[#2563EB] hover:bg-blue-50 transition-colors text-sm"
            >
              Login
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthRequiredModal;
