"use client";

import React from "react";
import { useRouter } from "next/navigation";

const QuotesTable = () => {
  const router = useRouter();

  const quotes = [
    {
      id: "Q-1234",
      buyer_email: "Myemail@gmail.com",
      company_name: "Mr Ebenezer Akeem",
      vehicle: "Toyota Camry 2018",
      quantity: "8 Units",
      date_requested: "12 Jan, 2012",
      status: "Pending",
    },
    {
      id: "Q-1234",
      buyer_email: "Myemail@gmail.com",
      company_name: "Mr Ebenezer Akeem",
      vehicle: "Toyota Camry 2018",
      quantity: "8 Units",
      date_requested: "12 Jan, 2012",
      status: "Issued",
    },
    {
      id: "Q-1234",
      buyer_email: "Myemail@gmail.com",
      company_name: "Mr Ebenezer Akeem",
      vehicle: "Toyota Camry 2018",
      quantity: "8 Units",
      date_requested: "12 Jan, 2012",
      status: "Issued",
    },
  ];

  return (
    <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden mt-8">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left">
          <thead>
            <tr className="bg-autobuy-blue-6 bg-opacity-50 text-autobuy-neutral-2 text-xs font-medium border-b border-autobuy-neutral-6">
              <th className="px-6 py-4 whitespace-nowrap">Quote ID</th>
              <th className="px-6 py-4 whitespace-nowrap">Buyer email</th>
              <th className="px-6 py-4 whitespace-nowrap">Company Name</th>
              <th className="px-6 py-4 whitespace-nowrap">Vehicle</th>
              <th className="px-6 py-4 whitespace-nowrap text-center">Quantity</th>
              <th className="px-6 py-4 whitespace-nowrap">Date Requested</th>
              <th className="px-6 py-4 whitespace-nowrap">Status</th>
              <th className="px-6 py-4 whitespace-nowrap text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-autobuy-neutral-6 text-xs text-autobuy-neutral-3">
            {quotes.map((quote, index) => (
              <tr key={index} className="hover:bg-autobuy-blue-6/20 transition-colors">
                <td className="px-6 py-4 font-medium text-autobuy-neutral-2">
                  {quote.id}
                </td>
                <td className="px-6 py-4">{quote.buyer_email}</td>
                <td className="px-6 py-4">{quote.company_name}</td>
                <td className="px-6 py-4 text-nowrap">{quote.vehicle}</td>
                <td className="px-6 py-4 text-center">{quote.quantity}</td>
                <td className="px-6 py-4">{quote.date_requested}</td>
                <td
                  className={`px-6 py-4 font-medium ${
                    quote.status === "Pending"
                      ? "text-autobuy-yellow-1"
                      : "text-autobuy-green-1"
                  }`}
                >
                  {quote.status}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => console.log("View", quote.id)}
                    className="text-autobuy-neutral-2 hover:text-autobuy-neutral-1 font-medium"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuotesTable;
