import React from "react";
import { Icon } from "@iconify/react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface BulkPurchaseSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "bulk" | "quote";
}

const BulkPurchaseSuccessModal: React.FC<BulkPurchaseSuccessModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  const isBulk = type === "bulk";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[480px] p-0 flex flex-col items-center justify-center text-center bg-white rounded-3xl overflow-hidden shadow-xl border-none outline-none">
        
        {/* Close button is usually handled by Dialog primitive or can be custom added if needed, 
            but shadcn/ui DialogContent usually has a close button. 
            If specific styling is needed we can override or add our own. */}
            
        <div className="pt-12 pb-10 px-8 flex flex-col items-center w-full">
            {/* Success Icon */}
            <div className="w-[100px] h-[100px] rounded-full border-[6px] border-[#22C55E] flex items-center justify-center mb-6">
                 <Icon icon="heroicons:check-20-solid" className="text-6xl text-[#22C55E] stroke-[2]" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-3">
                {isBulk ? "Bulk Order Submitted" : "Custom Quote Submitted"}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-[340px]">
                {isBulk
                ? "Your bulk purchase request has been successfully placed You'll receive a confirmation and order details via your dashboard and email"
                : "Your custom quote request has been successfully submitted. You'll receive a confirmation within 24hours via your dashboard and email"}
            </p>

             {/* Action Button */}
             <button
                onClick={onClose}
                className="w-full py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm"
             >
                View Order Details
             </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BulkPurchaseSuccessModal;
