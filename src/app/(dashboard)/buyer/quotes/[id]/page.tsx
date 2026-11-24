"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import BackButton from "@/components/BackButton";

const QuoteDetailsPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen pb-10">

      <div className="flex items-center justify-between mb-8">
      <BackButton/>

        <div className="text-center">
             <h1 className="text-lg font-medium text-autobuy-neutral-1">Quote Details</h1>
             <p className="text-xs text-autobuy-neutral-2">Review your custom quote and download the document</p>
        </div>
        
        <div className="w-[88px]" />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm  mx-auto">
           <div className="mb-8 pb-8 border-b border-gray-100">
               <h2 className="text-2xl font-medium text-autobuy-primary2.5 mb-2">Vehicle Purchase Quote</h2>
               <div className="flex gap-4 text-sm text-autobuy-neutral-2">
                   <p>Quote ID: <span className="font-medium text-autobuy-neutral-1">QB-2026-111-14</span></p>
                   <span>•</span>
                   <p>Generated on Jan 12, 2026</p>
               </div>
           </div>

           {/* Request Summary */}
           <div className="mb-6">
               <h3 className="text-lg font-medium text-autobuy-neutral-1 mb-4">Request Summary</h3>
               
               <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="w-full md:w-64 h-40 bg-gray-50 rounded-xl border border-gray-200 shrink-0 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D" className="w-full h-full object-cover" alt="Car" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-xl font-medium text-autobuy-neutral-1 mb-2">Toyota Camry 2018</h4>
                        <div className="space-y-1 text-sm text-autobuy-neutral-2">
                            <p>Vin: <span className="font-medium text-autobuy-neutral-1">Jtfldh25468962ldj</span></p>
                            <p>Quantity: <span className="font-medium text-autobuy-neutral-1">8 Units</span></p>
                        </div>
                        
                        <div className="mt-4 text-right">
                             <p className="text-sm text-autobuy-neutral-2">Date requested: <span className="font-medium text-autobuy-neutral-1">12 Jan, 2026</span></p>
                        </div>
                    </div>
               </div>

               <div>
                   <p className="text-sm text-autobuy-neutral-2 mb-1">Requirements:</p>
                   <p className="font-medium text-autobuy-neutral-1">Fleet vehicles for logistics use</p>
               </div>
           </div>



           {/* Price Breakdown */}
           <div className="mb-5 border-t border-gray-100 pt-5">
               <h3 className="text-lg font-medium text-autobuy-neutral-1 mb-6">Quote Overview (price Breakdown)</h3>
               
               <div className="space-y-4 text-sm">
                   <div className="flex justify-between py-2">
                       <span className="text-autobuy-neutral-2">Unit Price:</span>
                       <span className="font-medium text-autobuy-neutral-1">₦45,000,000</span>
                   </div>
                   <div className="flex justify-between py-2">
                       <span className="text-autobuy-neutral-2">Subtotal:</span>
                       <span className="font-medium text-autobuy-neutral-1">₦75,000,000</span>
                   </div>
                   <div className="flex justify-between py-2  pb-4">
                       <span className="text-autobuy-neutral-2">Discount (Bulk):</span>
                       <span className="font-medium text-autobuy-neutral-1">(₦15,000,000)</span>
                   </div>
                   <div className="flex justify-between py-4">
                       <span className="text-base font-medium text-autobuy-neutral-2">Total Amount:</span>
                       <span className="text-xl font-medium text-autobuy-neutral-1">₦85,000,000</span>
                   </div>
               </div>
           </div>

           {/* Footer */}
           <div className="text-center space-y-8 border-t border-gray-100 pt-10">
               <p className="text-sm text-autobuy-neutral-1">Quote is valid until 25 Jan, 2025</p>

               <button className="w-full py-3.5 bg-autobuy-primary2.5 text-white rounded-[12px] font-bold hover:bg-autobuy-primary2.5/80 transition-colors shadow-[1px 1px 8px 0px #061F4526 inset, -1px -1px 8px 0px #061F4526 inset, 0px 1px 6px 0px #00000014]">
                   Download Quote (PDF)
               </button>

               <div className="text-xs text-autobuy-neutral-2">
                   For next steps or clarifications, please contact autobuy directly. 
                   <a href="#" className="text-autobuy-primary2.5 hover:underline ml-3 italic font-medium">→ Contact Support</a>
               </div>
           </div>
      </div>
    </div>
  );
};

export default QuoteDetailsPage;
