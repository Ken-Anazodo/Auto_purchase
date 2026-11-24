"use client";

import React from "react";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface DeactivateAdminModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  adminId?: number;
}

const DeactivateAdminModal: React.FC<DeactivateAdminModalProps> = ({
  open,
  onOpenChange,
  adminId,
}) => {
  const handleDeactivate = () => {
    console.log("Deactivating admin:", adminId);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] p-8 bg-white rounded-2xl flex flex-col items-center justify-center text-center">
        <h3 className="w-full text-left text-[24px] text-[#4D4C4C] font-[500] mb-4">Deactivate Admin</h3>
        
        <div className="mb-6">
             <Icon icon="mdi:alert" className="w-24 h-24 text-autobuy-orange-1" />
        </div>

        <h2 className="text-xl font-bold text-autobuy-neutral-1 mb-3">
          Deactivate Admin
        </h2>
        
        <p className="text-[16px] text-[#4D4C4C] font-[400] max-w-[300px] mb-8">
          The admin will temporarily lose access. You can reactivate them later.
        </p>

        <div className="flex gap-4 w-full">
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 py-3 px-4 rounded-lg bg-[#E4E4E4] text-autobuy-neutral-1 text-[16px] font-[600] hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDeactivate}
            className="flex-1 py-3 px-4 rounded-lg bg-[#F12323] text-white text-[16px] font-[600] hover:bg-red-600 transition-colors"
          >
            Deactivate
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeactivateAdminModal;
