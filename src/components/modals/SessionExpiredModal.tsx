"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store/store";
import { hideSessionExpiredModal } from "@/services/features/slices/appSlice";

const SessionExpiredModal: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.app?.isSessionExpiredModalOpen || false);

  const handleLoginRedirect = () => {
    dispatch(hideSessionExpiredModal());
    router.push("/auth/login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-[400px] p-0 flex flex-col items-center justify-center text-center bg-white rounded-3xl overflow-hidden shadow-xl border-none outline-none [&>button]:hidden select-none">
        <div className="pt-12 pb-10 px-8 flex flex-col items-center w-full">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Session Expired
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-[280px]">
            Your session has expired or you are unauthorized. Please log in again to continue.
          </p>

          <div className="w-full space-y-3">
            <button
              onClick={handleLoginRedirect}
              className="w-full py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-blue-100 shadow-lg"
            >
              Go to Login
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SessionExpiredModal;
