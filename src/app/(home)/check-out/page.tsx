"use client";

import React, { useState } from "react";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { Icon } from "@iconify/react";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [fulfillmentMethod, setFulfillmentMethod] = useState("home-delivery");
  const [paymentType, setPaymentType] = useState("pay-online");
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");

  const router = useRouter();

  return (
    <div className=" min-h-screen bg-[#FAFAFA]  space-y-6 ">
      <Navbar />

      <header className="spacing">
        <BackButton />
      </header>

      <main className="flex-grow container spacing">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Review Your Order
          </h1>
          <p className="text-autobuy-neutral-2  text-sm mt-1">
            Complete your details to reserve this vehicle and proceed to payment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Buyer Information */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <main className=" p-6 ">
                <h2 className="text-[#2563EB] font-semibold mb-1 text-lg">
                  Buyer Information
                </h2>
                <p className="text-xs text-autobuy-neutral-2  mb-6">
                  We&apos;ll use this info to contact you about your order
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputGroup label="First Name" placeholder="Kelvin" />
                  <InputGroup label="Last Name" placeholder="Kelvin" />
                  <InputGroup
                    label="Email"
                    placeholder="Myemail@gmail.com"
                    type="email"
                  />
                  <InputGroup
                    label="Phone"
                    placeholder="08156894887"
                    type="tel"
                  />
                </div>
              </main>

              {/* Delivery Address */}
              <main className=" p-6 ">
                <h2 className="text-[#2563EB] font-semibold mb-1">
                  Delivery Address
                </h2>
                <p className="text-xs text-autobuy-neutral-2  mb-6">
                  This is where your vehicle will be delivered after payment
                  confirmation.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputGroup label="State" placeholder="Lagos" />
                    <InputGroup label="City" placeholder="Ikeja" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputGroup
                      label="Street Address"
                      placeholder="My addresss is"
                    />
                    <InputGroup
                      label="Landmark(optional)"
                      placeholder="My addresss is"
                    />
                  </div>
                  <InputGroup
                    label="Delivery Notes(optional)"
                    placeholder="Call on arrival"
                  />
                </div>
              </main>
            </section>

            {/* Fulfillment Method */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-[#2563EB] font-semibold mb-6">
                Fulfillment Method
              </h2>
              <div className="space-y-3">
                <RadioCard
                  selected={fulfillmentMethod === "home-delivery"}
                  onClick={() => setFulfillmentMethod("home-delivery")}
                  icon="heroicons:truck"
                  label="Home Delivery (We'll deliver the car to your address)"
                />
                <RadioCard
                  selected={fulfillmentMethod === "pick-up"}
                  onClick={() => setFulfillmentMethod("pick-up")}
                  icon="heroicons:map-pin"
                  label="Pick-up at Car Lot (Location will be sent to you via Email)"
                />
              </div>
            </section>

            {/* Payment Type */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-[#2563EB] font-semibold mb-6">
                Payment Type
              </h2>
              <div className="space-y-3">
                <RadioCard
                  selected={paymentType === "pay-online"}
                  onClick={() => setPaymentType("pay-online")}
                  icon="heroicons:credit-card"
                  label="Pay Online (complete payment securely online now)"
                />
                <RadioCard
                  selected={paymentType === "pay-at-lot"}
                  onClick={() => setPaymentType("pay-at-lot")}
                  icon="heroicons:building-storefront"
                  label="Pay at Car Lot (Pay when you pick up or receive the car)"
                />
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-[#2563EB] font-semibold mb-6">
                Payment Method
              </h2>
              <div className="space-y-3">
                <RadioCard
                  selected={paymentMethod === "card"}
                  onClick={() => setPaymentMethod("card")}
                  icon="heroicons:credit-card"
                  label="Credit / Debit Card (Escrow protected)"
                />
                <RadioCard
                  selected={paymentMethod === "bank-transfer"}
                  onClick={() => setPaymentMethod("bank-transfer")}
                  icon="heroicons:banknotes"
                  label="Bank Transfer (Escrow protected)"
                />
              </div>
            </section>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div
              style={{
                boxShadow:
                  "inset 1px 1px 4px 0px #3385FF26, inset -1px -1px 4px 0px #3385FF26, 0px 1px 6px 0px #00000014",
              }}
              className="bg-white rounded-2xl p-6  sticky top-8"
            >
              <h2 className="text-[#2563EB] font-semibold mb-1">
                Order Summary
              </h2>
              <p className="text-xs text-autobuy-neutral-2  mb-6">Selected vehicle (3)</p>

              {/* Vehicle Mini Card */}
              <div className="flex gap-4 p-3 border border-gray-100 rounded-xl mb-6">
                <div className="w-20 h-20 bg-gray-100 rounded-lg shrink-0 overflow-hidden">
                  {/* Placeholder image matching the vibe */}
                  <div className="w-full h-full bg-slate-200"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-xl">
                    2018 Toyota Camry XLE
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-autobuy-neutral-2  mt-1">
                    <Icon icon="heroicons:map-pin" className="text-xs" />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div className="text-[#2563EB] font-bold text-xl mt-2">
                    ₦45,000,000
                  </div>
                </div>
              </div>

              {/* Dots Indicator (Mock) */}
              <div className="flex justify-center gap-1.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="w-2 h-2 rounded-full border border-gray-300"></div>
                <div className="w-2 h-2 rounded-full border border-gray-300"></div>
                <div className="w-2 h-2 rounded-full border border-gray-300"></div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold text-gray-900">
                    ₦45,000,000
                  </span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Delivery Fee:</span>
                  <span className="font-semibold text-gray-900">₦50,000</span>
                </div>
                <div className="flex justify-between text-base pt-4 border-t border-gray-100">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-bold text-[#2563EB]">₦45,050,000</span>
                </div>
              </div>

              {/* Info List */}
              <div className="space-y-3 mb-12 text-base">
                <div className="flex justify-between">
                  <span className="text-autobuy-neutral-2  flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    Payment Type:
                  </span>
                  <span className="text-gray-900 font-medium text-right">
                    Online(Bank Transfer)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-autobuy-neutral-2  flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    Fulfillment Method:
                  </span>
                  <span className="text-gray-900 font-medium text-right">
                    Home Delivery
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button onClick={()=> router.push('/check-out/payment')} className="w-full py-4 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-blue-200 shadow-lg mt-10">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// --- Helper Components ---

const InputGroup = ({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-autobuy-neutral-2 ">{label}:</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400 text-sm"
    />
  </div>
);

const RadioCard = ({
  selected,
  onClick,
  icon,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  icon: string;
  label: string;
}) => (
  <div
    onClick={onClick}
    className={`
        flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all
        ${
          selected
            ? "border-blue-500 bg-blue-50/10 ring-1 ring-blue-500"
            : "border-gray-200 hover:border-gray-300 bg-white"
        }
    `}
  >
    <div className={`text-xl ${selected ? "text-[#2563EB]" : "text-gray-400"}`}>
      <Icon icon={icon} />
    </div>
    <span
      className={`text-sm flex-1 ${selected ? "text-gray-900" : "text-gray-600"}`}
    >
      {label}
    </span>
    <div className="relative flex items-center justify-center w-5 h-5">
      <div
        className={`w-5 h-5 rounded-full border ${selected ? "border-[#2563EB]" : "border-gray-300"}`}
      ></div>
      {selected && (
        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#2563EB]"></div>
      )}
    </div>
  </div>
);

export default CheckoutPage;
