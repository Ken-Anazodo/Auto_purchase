import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: {
      vehicle: string;
      transactionId: string;
      amount: string;
      date: string;
      status: string;
      paymentMethod: string;
  };
}

const ReceiptModal: React.FC<ReceiptModalProps> = ({ isOpen, onClose, transaction }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-xl animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="text-center pt-8 pb-6 px-6 relative">
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
                <Icon icon="heroicons:x-mark" className="w-5 h-5 text-gray-400" />
            </button>

            <h3 className="text-xl font-medium text-autobuy-neutral-1">Payment Receipt</h3>
            <p className="text-sm text-autobuy-neutral-2">Transaction summary for your purchase</p>
        </div>

        {/* Receipt Content */}
        <div className="px-6 pb-8">
            <div className="bg-[#FCFCFC] border border-gray-100 rounded-xl p-6 shadow-sm relative">
                 
                 <div className="flex justify-center mb-6">
                      <Image src="/logo/logo.svg" alt="Autobuy" width={120} height={40} />
                 </div>

                 <div className="space-y-4 text-sm">
                     <div className="pb-4 border-b border-gray-100">
                         <p className="text-xs text-gray-500 mb-1">Receipt Id: <span className="text-gray-900 font-medium">#ID-2451255</span></p>
                         <p className="text-xs text-gray-500 flex items-center gap-2 text-xs">
                             Status: 
                             <span className="text-green-600 font-medium">{transaction.status}</span>
                         </p>
                     </div>

                     <div className="space-y-3">
                         <div className="flex justify-between">
                            <span className="text-gray-600 text-xs">Vehicle:</span>
                            <span className="text-gray-900 font-medium">{transaction.vehicle}</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-gray-600 text-xs">Amount Paid:</span>
                            <span className="text-gray-900 font-medium">{transaction.amount}</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-gray-600 text-xs">Payment Method:</span>
                            <span className="text-gray-900 font-medium">{transaction.paymentMethod}</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-autobuy-neutral-2 text-xs">Transaction Reference:</span>
                            <span className="text-gray-900 font-medium">TX-2554796</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-autobuy-neutral-2 text-xs">Date:</span>
                            <span className="text-gray-900 font-medium">{transaction.date}, 10:52AM</span>
                         </div>
                     </div>

                     <div className="pt-4 border-t border-gray-100 space-y-3">
                         <div className="flex justify-between">
                            <span className="text-autobuy-neutral-2 text-xs">Buyer Name:</span>
                            <span className="text-gray-900 font-medium">Emmanuel Martins</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-autobuy-neutral-2 text-xs">Email:</span>
                            <span className="text-gray-900 font-medium">Myemail@gmail.com</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-autobuy-neutral-2 text-xs">Phone No:</span>
                            <span className="text-autobuy-neutral-1 font-medium">012457896310</span>
                         </div>
                     </div>
                 </div>


            <div className="mt-8 space-y-3">

                <button style={{background: "linear-gradient(217.57deg, #FAFCFF -138.48%, #BDD7FF -47.17%, #0067FF 17.55%, #064199 74.19%)"}} className="w-full py-2.5 text-white rounded-[12px] font-medium hover:bg-blue-700 transition-colors text-sm">
                    Download Receipt
                </button>

                <button onClick={onClose} className="w-full py-2.5 bg-gray-100 text-gray-700 rounded-[12px] font-medium  hover:bg-gray-200 transition-colors text-sm">
                    Close
                </button>
            </div>

            </div>
            
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
