import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Icon } from "@iconify/react";

export type PaymentStatus = "idle" | "verifying" | "success" | "pending" | "failed";

interface PaymentStatusModalProps {
  status: PaymentStatus;
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
  onChangeMethod: () => void;
}

const PaymentStatusModal: React.FC<PaymentStatusModalProps> = ({
  status,
  isOpen,
  onClose,
  onRetry,
  onChangeMethod,
}) => {
  const content = {
    idle: null,
    verifying: (
      <>
     
        <h2 className="text-lg font-medium text-autobuy-neutral-1  mb-2">
          Verifying Your Payment...
        </h2>
        <p className="text-gray-500 text-sm text-center max-w-[340px] mb-8 leading-relaxed">
          Please wait while we confirm your transfer. This should only take a few
          seconds.
        </p>

           <div className="mb-8 relative">
           {/* Custom Spinner to match design: Thick blue arc */}
           <div className="w-20 h-20 rounded-full border-[6px] border-[#EBF5FF] border-t-[#2563EB] border-r-[#2563EB] -rotate-45 animate-spin"></div>
        </div>

        <div className="text-center w-full max-w-[280px] space-y-3 mb-10">
           <div className="flex items-center justify-center text-center gap-2.5 text-sm text-gray-600 font-medium">
               <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
               Your payment is being validated
           </div>
           <div className="flex items-center justify-center text-center gap-2.5 text-sm text-gray-600 font-medium">
               <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
               Do not refresh this page
           </div>
           <div className="flex items-center justify-center text-center gap-2.5 text-sm text-gray-600 font-medium">
               <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
               Verification is automatic
           </div>
        </div>

        <button
          disabled
          className="w-full py-4 bg-[#60A5FA] text-white font-semibold rounded-xl cursor-not-allowed text-sm shadow-sm"
        >
          Payment In Progress
        </button>
      </>
    ),
    success: (
      <>
        <div className="w-24 h-24 rounded-full border-[6px] border-[#22C55E] flex items-center justify-center mb-6">
          <Icon
            icon="heroicons:check"
            className="text-8xl text-[#22C55E] stroke-[6]"
          />
        </div>
        <h2 className="text-xl font-medium text-autobuy-neutral-1 mb-2">
          Your Payment is Successful
        </h2>
        <p className="text-autobuy-neutral-2 text-base text-center max-w-[340px mb-8 leading-relaxed">
          Your payment has been confirmed and secured in escrow. Next, our team
          will process your order.
        </p>
        <hr />

        <div className="w-full space-y-2 mb-8 text-sm">
             <div className="flex justify-center gap-2 items-center">
                 <span className="text-gray-500">Amount Paid:</span>
                 <span className="font-medium text-autobuy-neutral-1">₦50,000</span>
             </div>
             <div className="flex justify-center gap-2 items-center">
                 <span className="text-gray-500">Payment Method:</span>
                 <span className="font-medium text-autobuy-neutral-1">Bank Transfer</span>
             </div>
             <div className="flex justify-center gap-2 items-center">
                 <span className="text-gray-500">Transaction ID:</span>
                 <span className="font-medium text-autobuy-neutral-1">UNW-PMT-99321</span>
             </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-4 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-blue-200 shadow-lg"
        >
          Track My Order
        </button>
      </>
    ),
    pending: (
      <>
        <div className="mb-6">
            <Icon icon="heroicons:exclamation-triangle" className="text-[100px] text-[#FACC15]" />
        </div>
        <h2 className="text-lg font-bold text-autobuy-neutral-1 mb-2">
          Payment Still Pending
        </h2>
        <p className="text-gray-500 text-sm text-center max-w-[320px] mb-8 leading-relaxed">
          We haven&apos;t received confirmation from your bank yet. This can happen
          during network delays.
        </p>

        <div className="w-full space-y-4">
            <button
            onClick={onRetry}
            className="w-full py-4 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm"
            >
            Retry Verification
            </button>
            <button
                onClick={onChangeMethod}
                className="w-full py-2 text-[#2563EB] font-semibold hover:underline text-sm"
            >
                Change Payment Method
            </button>
        </div>
      </>
    ),
    failed: (
      <>
        <div className="w-24 h-24 rounded-full border-[6px] border-[#EF4444] flex items-center justify-center mb-6">
             <Icon icon="heroicons:x-mark" className="text-6xl text-[#EF4444] stroke-[3]" />
        </div>
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          Payment Failed
        </h2>
        <p className="text-gray-500 text-sm text-center max-w-[340px] mb-8 leading-relaxed">
          We could not verify your payment. <br/> Please try again or choose another
          payment method.
        </p>

        <div className="w-full space-y-4">
            <button
            onClick={onRetry}
            className="w-full py-4 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm"
            >
            Retry Payment
            </button>
             <button
                onClick={onChangeMethod}
                className="w-full py-2 text-[#2563EB] font-semibold hover:underline text-sm"
            >
                Change Payment Method
            </button>
        </div>
      </>
    ),
  };

  if (status === "idle") return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[480px] p-0 flex flex-col items-center justify-center text-center bg-white rounded-3xl overflow-hidden shadow-xl border-none outline-none [&>button]:hidden">
        <div className="pt-14 pb-12 px-10 flex flex-col items-center w-full relative">
            {/* Close button only for Pending/Failed/Success states if needed, though designs show it for all EXCEPT Verifying sometimes. 
                Let's keep it generally available but maybe hide for verifying if strictly following 'no escape' pattern, 
                but user UX usually prefers escape. The screenshot for Success HAS an X. Text says 'Verifying' DOES NOT have X. */}
            {status !== 'verifying' && (
                <button 
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                    <Icon icon="heroicons:x-mark" className="text-2xl stroke-2" />
                </button>
            )}
            
           {content[status]}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentStatusModal;
