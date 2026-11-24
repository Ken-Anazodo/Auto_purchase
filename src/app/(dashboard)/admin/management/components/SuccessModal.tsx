"use client";

import React from "react";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddAnother: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  open,
  onOpenChange,
  onAddAnother,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] p-8 bg-white rounded-2xl flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-autobuy-primary2.5 flex items-center justify-center">
             <Icon icon="mdi:check" className="w-10 h-10 text-white stroke-2" />
          </div>
        </div>

        <h2 className="text-[24px] font-[500] text-[#4D4C4C] mb-2">
          Admin Account Created Successfully
        </h2>
        
        <p className="text-[16px] text-[#4D4C4C] font-[400] max-w-[300px] mb-8">
          The new admin has been added to the system and is now ready to manage operations.
        </p>

        <div className="flex gap-4 w-full">
          <button
            onClick={onAddAnother}
            className="flex-1 py-3 px-4 rounded-lg border border-[#0A6DFF] text-autobuy-primary2.5 text-[16px] font-[600] hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
          >
            <Icon icon="mdi:plus" className="w-4 h-4" />
            Add Another Admin
          </button>
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 py-3 px-4 rounded-lg bg-[#0A6DFF] text-white text-[16px] font-[600] hover:bg-blue-600 transition-colors"
          >
            Go to Admin List
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
