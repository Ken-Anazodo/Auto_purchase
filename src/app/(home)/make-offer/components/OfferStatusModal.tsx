import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Icon } from "@iconify/react";

export type OfferStatus = "idle" | "success" | "failed";

interface OfferStatusModalProps {
  status: OfferStatus;
  isOpen: boolean;
  onClose: () => void;
  onSuccessAction?: () => void; // e.g., "See my Offers"
  onRetry?: () => void;
}

const OfferStatusModal: React.FC<OfferStatusModalProps> = ({
  status,
  isOpen,
  onClose,
  onSuccessAction,
  onRetry,
}) => {
  const content = {
    idle: null,
    success: (
      <>
        <div className="w-24 h-24 rounded-full border-[6px] border-[#22C55E] flex items-center justify-center mb-6">
          <Icon
            icon="heroicons:check"
            className="text-6xl text-[#22C55E] stroke-[3]"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Offer Sent Successfully
        </h2>
        <p className="text-gray-500 text-sm text-center max-w-[380px] mb-8 leading-relaxed">
          Expect seller response within 2-48 hours. We&apos;ll notify you as soon as
          there is an update
        </p>

        <p className="text-gray-400 text-xs text-center max-w-[400px] mb-8 leading-relaxed">
          <span className="font-semibold text-gray-500">Please Note:</span> Submitting
          an offer does not place the vehicle on hold. Availability is subject to
          other ongoing activity.
        </p>

        <div className="w-full space-y-3">
          <button
            onClick={onSuccessAction}
            className="w-full py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-blue-200 shadow-lg"
          >
            See my Offers
          </button>
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors text-sm"
          >
            Go Back
          </button>
        </div>
      </>
    ),
    failed: (
      <>
        <div className="w-24 h-24 rounded-full border-[6px] border-[#EF4444] flex items-center justify-center mb-6">
          <Icon
            icon="heroicons:x-mark"
            className="text-6xl text-[#EF4444] stroke-[3]"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Offer Submission Failed
        </h2>
        <p className="text-gray-500 text-sm text-center max-w-[340px] mb-8 leading-relaxed">
          Something went wrong while submitting your offer. Please try again.
        </p>

        <div className="w-full space-y-3">
          <button
            onClick={onRetry}
            className="w-full py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm"
          >
            Retry
          </button>
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </>
    ),
  };

  if (status === "idle") return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[520px] p-0 flex flex-col items-center justify-center text-center bg-white rounded-3xl overflow-hidden shadow-xl border-none outline-none [&>button]:hidden">
        <div className="pt-14 pb-12 px-10 flex flex-col items-center w-full relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <Icon icon="heroicons:x-mark" className="text-2xl stroke-2" />
          </button>

          {content[status]}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OfferStatusModal;
