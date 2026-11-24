"use client";

import React, { useState } from "react";
import ReceiptModal from "./components/ReceiptModal";

const TransactionsPage = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const transactions = [
      { id: 1, vehicle: "Toyota Camry 2018", transactionId: "TRX1234567891", amount: "₦45,000,000", paymentMethod: "Online", date: "11/12/2025", status: "Successful" },
      { id: 2, vehicle: "Toyota Camry 2018", transactionId: "TRX1234567891", amount: "₦45,000,000", paymentMethod: "Online", date: "11/12/2025", status: "Successful" },
      { id: 3, vehicle: "Toyota Camry 2018", transactionId: "TRX1234567891", amount: "₦45,000,000", paymentMethod: "Online", date: "11/12/2025", status: "Successful" },
  ];

  return (
    <div className="min-h-screen pb-10">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-autobuy-neutral-1 mb-1">Transactions</h1>
        <p className="text-sm text-autobuy-neutral-2 mb-4">Track all payments made on Autobuy</p>
        
        <ul className="list-disc list-inside text-xs text-autobuy-neutral-3 pl-1">
            <li>Track payment status, view receipts, and download invoices</li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
           {/* Table Header */}
           <div className="grid grid-cols-6 gap-4 p-5 bg-[#F5F9FF] border-b border-gray-100 text-sm font-medium text-autobuy-neutral-2">
               <div className="col-span-1">Vehicle</div>
               <div className="col-span-1">Transaction Id</div>
               <div className="col-span-1">Amount</div>
               <div className="col-span-1">Payment Method</div>
               <div className="col-span-1">Date</div>
               <div className="col-span-1 flex justify-between">
                   <span>Status</span>
                   <span>Actions</span>
               </div>
           </div>

           {/* Table Body */}
           <div>
               {transactions.map((trx) => (
                   <div key={trx.id} className="grid grid-cols-6 gap-4 p-5 border-b border-gray-100 text-sm text-autobuy-neutral-2 hover:bg-gray-50 transition-colors items-center">
                       <div className="col-span-1">{trx.vehicle}</div>
                       <div className="col-span-1">{trx.transactionId}</div>
                       <div className="col-span-1">{trx.amount}</div>
                       <div className="col-span-1">{trx.paymentMethod}</div>
                       <div className="col-span-1">{trx.date}</div>
                       <div className="col-span-1 flex justify-between items-center">
                           <span className="text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded text-xs">{trx.status}</span>
                           <button 
                                onClick={() => setSelectedTransaction(trx)}
                                className="text-gray-500 hover:text-blue-600 italic text-xs font-medium cursor-pointer"
                            >
                               View Receipt
                           </button>
                       </div>
                   </div>
               ))}
           </div>
      </div>

      {/* Modal */}
      <ReceiptModal 
        isOpen={!!selectedTransaction} 
        onClose={() => setSelectedTransaction(null)} 
        transaction={selectedTransaction || {}} 
      />
    </div>
  );
};

export default TransactionsPage;
