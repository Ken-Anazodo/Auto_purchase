"use client";

import React, { useState } from "react";
import { MOCK_OFFERS } from "@/data/mockOffers";
import { Icon } from "@iconify/react";

type Offer = (typeof MOCK_OFFERS)[0];
type ViewState = "negotiating" | "accepted" | "payment_ready";

interface OfferChatProps {
  selectedOffer: Offer;
  viewState: ViewState;
  onAcceptOffer: () => void;
  onProceedToPayment: () => void;
}

const OfferChat: React.FC<OfferChatProps> = ({
  selectedOffer,
  viewState,
  onAcceptOffer,
  onProceedToPayment,
}) => {
  const [counterOfferAmount, setCounterOfferAmount] = useState("");

  return (
    <>
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 border border-gray-200 rounded-[12px] flex-shrink-0" />
          <div>
            <h2 className="text-lg font-medium text-autobuy-primary2.5 mb-1">
              {selectedOffer.carName}
            </h2>
            <p className="text-sm text-autobuy-neutral-2">
              Listed Price:{" "}
              <span className="font-medium text-autobuy-neutral-1">
                {selectedOffer.price}
              </span>
            </p>
          </div>
        </div>
        {selectedOffer.status === "Seller Countered" && (
          <span className="px-3 py-1 bg-[#FDECE2] text-[#F17F5A] text-xs font-medium rounded-[12px] border-[0.4px] border-[#F5A07B]">
            Seller Countered
          </span>
        )}
      </div>

      {/* Info Banner */}
      <div className="px-8 py-4 text-center">
        <p className="text-xs text-autobuy-neutral-2">
          You&apos;re negotiating directly with the seller.
          <br />
          Response typically arrive within 2-48 hours.
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
        {selectedOffer.history && selectedOffer.history.length > 0 ? (
          selectedOffer.history.map((item) => (
            <div key={item.id} className="space-y-3 ">
              <div
                className={` p-3 w-3/5 ${
                  item.sender === "You"
                    ? "bg-[#EDF4FF] border-[0.5px] rounded-t-[12px] rounded-bl-[12px] border-[#99C2FF] ml-auto"
                    : "bg-white border-[0.5px] border-[#E4E4E4] shadow-sm mr-auto rounded-t-[12px] rounded-br-[12px]"
                }`}
              >
                <div className="mb-2">
                  <span
                    className={`inline-block px-2.5 py-1 ${item.sender === "You" ? "bg-[#CCE0FF] border border-[#66A3FF] text-blue-700" : "bg-[#FDECE2] border border-[#F5A07B] text-[#F17F5A]"} text-[10px] font-medium rounded-[12px]`}
                  >
                    {item.sender === "You" ? "Your Offer" : "Seller Countered"}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-autobuy-neutral-1 mb-1">
                  {item.amount}
                </h3>
                <hr className="my-2" />
                <p className="text-xs text-autobuy-neutral-2">
                  {item.sender} • {item.date}
                </p>
              </div>
            </div>
          ))
        ) : (
          // Default view for mock items without history
          <div className="space-y-3">
            <div className="rounded-xl p-5 bg-[#E8F4FF] border border-[#66A3FF]">
              <div className="mb-2">
                <span className="inline-block px-2.5 py-1 bg-[#CCE0FF] border-[#66A3FF] text-blue-700 text-[10px] font-medium rounded-[12px]">
                  Your Offer
                </span>
              </div>
              <h3 className="text-sm font-bold text-autobuy-neutral-1 mb-1">
                {selectedOffer.myOffer}
              </h3>
              <hr className="my-2" />
              <p className="text-xs text-autobuy-neutral-2">
                You • {selectedOffer.lastUpdated}
              </p>
            </div>
          </div>
        )}

        {/* Simulated Accepted State in Flow */}
        {viewState === "payment_ready" && (
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full border border-green-200">
              Seller Accepted
            </span>
            <div className="rounded-xl p-3 bg-white border border-[#E4E4E4] shadow-sm">
              <div className="mb-2">
                <span className="inline-block px-2.5 py-1 bg-green-100 text-green-700 text-[10px] font-medium rounded-[12px]">
                  Accepted Price
                </span>
              </div>
              <h3 className="text-sm font-bold text-autobuy-neutral-1 mb-1">
                ₦43,200,000.00
              </h3>
              <p className="text-xs text-autobuy-neutral-2">
                You • 12 April 2025, 11:05 AM
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-6  border-gray-100 mt-auto">
        {viewState === "payment_ready" ? (
          <div className="space-y-3">
            <button
              onClick={onProceedToPayment}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Proceed to Payment
            </button>
            <p className="text-xs text-center text-autobuy-neutral-2">
              Payment secures the vehicle. This car is not reserved until
              payment is completed
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Counter Offer Input */}
            <div>
              <figure className="flex items-center justify-between gap-2">
                <label className="block text-sm font-medium text-autobuy-neutral-1 mb-2">
                  Your Offer{" "}
                </label>
                <div className="h-[0.5px] flex-1 bg-[#C9C9C9]"></div>
              </figure>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-autobuy-neutral-2 font-medium">
                  ₦
                </span>
                <input
                  type="text"
                  value={counterOfferAmount}
                  onChange={(e) => setCounterOfferAmount(e.target.value)}
                  placeholder="Enter a new amount to counter"
                  className="w-full pl-8 pr-12 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-autobuy-neutral-1 placeholder:text-autobuy-neutral-2"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#EDF4FF] p-2 rounded-[8px] text-autobuy-primary2.5 hover:text-blue-700 ">
                  <Icon icon="ic:outline-send" width="1.2em" height="1.2em" />
                </button>
              </div>
            </div>

            {/* Accept Offer Button - Full Width */}
            {(selectedOffer.status === "Seller Countered" ||
              selectedOffer.status === "Awaiting seller response") && (
              <button
                onClick={onAcceptOffer}
                className="w-full bg-autobuy-primary2.5 text-white py-3.5 rounded-[12px] font-semibold hover:bg-autobuy-primary3 transition-colors shadow-sm"
              >
                Accept Offer
              </button>
            )}

            <p className="text-xs text-center text-autobuy-neutral-2">
              Payment secures the vehicle. This car is not reserved until
              payment is completed
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default OfferChat;
