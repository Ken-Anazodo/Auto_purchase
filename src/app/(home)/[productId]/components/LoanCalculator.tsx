"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface LoanCalculatorProps {
  vehiclePrice?: number;
  initialLoanTenure?: string;
  initialDepositPercentage?: number;
  onCalculate?: (data: unknown) => void;
  onContinueFinancing?: () => void;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({
  vehiclePrice = 45050000,
  initialLoanTenure = "6 Months",
  initialDepositPercentage = 40,
  onCalculate,
  onContinueFinancing,
}) => {
  const [loanTenure, setLoanTenure] = useState(initialLoanTenure);
  const [depositPercentage, setDepositPercentage] = useState(
    initialDepositPercentage,
  );
  const [showResults, setShowResults] = useState(false);

  const depositAmount = (vehiclePrice * depositPercentage) / 100;
  const loanAmount = vehiclePrice - depositAmount;

  // Simple monthly payment calculation (this would be more complex in real scenario)
  const months = parseInt(loanTenure.split(" ")[0]);
  const monthlyPayment = loanAmount / months;

  const handleCalculate = () => {
    const calculationData = {
      vehiclePrice,
      loanTenure,
      depositPercentage,
      depositAmount,
      loanAmount,
      monthlyPayment,
    };
    setShowResults(true);
    onCalculate?.(calculationData);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 space-y-8 ${showResults ? "" : "md:w-1/2"}`}>

      <header className="spacing bg-[#F5F9FF] rounded-t-2xl py-5 ">
        <h3 className="text-2xl font-medium text-autobuy-neutral-1">
          Loan Financing
        </h3>
        <p className="text-autobuy-neutral-2 text-sm ">
          Finance this vehicle with flexible repayment options.
        </p>
      </header>

      <div
        className={`grid ${showResults ? "grid-cols-1 lg:grid-cols-2 gap-20" : "grid-cols-1"} pb-5 spacing`}
      >
        {/* Left Section - Input Form */}
        <div>
          <div className="space-y-6 mb-8">
            {/* Vehicle Price */}
            <div>
              <label className="block text-sm text-autobuy-neutral-2 mb-2">
                Vehicle price:
              </label>
              <input
                className="w-full px-4 py-2 border border-slate-200 rounded-xl font-bold text-blue-600 text-lg"
                readOnly
                type="text"
                value={`₦${vehiclePrice.toLocaleString()}`}
              />
            </div>

            {/* Loan Tenure */}
            <div>
              <label className="block text-sm text-autobuy-neutral-2 mb-2">
                Loan Tenure:
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-900 font-medium appearance-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                >
                  <option>6 Months</option>
                  <option>12 Months</option>
                  <option>18 Months</option>
                  <option>24 Months</option>
                  <option>36 Months</option>
                </select>
                <Icon
                  icon="heroicons:chevron-down-20-solid"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            {/* Deposit Payment */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm text-autobuy-neutral-2">
                  Deposit Payment:
                </label>
                <span className="text-sm font-bold text-blue-600">
                  ({depositPercentage}%) ₦{depositAmount.toLocaleString()}
                </span>
              </div>
              <div className="relative">
                <input
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                  max="70"
                  min="30"
                  type="range"
                  value={depositPercentage}
                  onChange={(e) => setDepositPercentage(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((depositPercentage - 30) / 40) * 100}%, #e2e8f0 ${((depositPercentage - 30) / 40) * 100}%, #e2e8f0 100%)`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-autobuy-neutral-2 mt-2">
                <span>Min deposit: 30% of car value</span>
                <span>Max deposit: 70% of car value</span>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-auto px-5 py-3 border border-autobuy-primary2.5 text-autobuy-primary2.5 font-semibold rounded-[12px] hover:bg-blue-50 transition-colors text-base"
          >
            Calculate
          </button>

          {/* Disclaimer */}
          <div className="mt-8">
            <p className="text-xs text-autobuy-neutral-2 leading-relaxed">
              <strong>Please note:</strong> Actual loan terms, rates, and
              approvals are determined by our lending partners and dealers.
              Estimates provided are for informational purposes only and may not
              include additional fees such as title, registration, or taxes.
              Final terms may vary based on your credit profile and lender
              requirements.
            </p>
          </div>
        </div>

        {/* Right Section - Payment Summary */}
        {showResults && (
          <div
            style={{
              boxShadow:
                "1px 1px 4px 0px #3385FF26 inset, -1px -1px 4px 0px #3385FF26 inset, 0px 1px 6px 0px #00000014",
            }}
            className="bg-slate-50 rounded-xl p-6 max-w-xl"
          >
            <div className="text-center mb-6">
              <h4 className="text-base font-medium text-autobuy-neutral-1 mb-2">
                Estimated Monthly Payment
              </h4>
              <div className="text-2xl font-semibold text-autobuy-primary2.5">
                ₦{monthlyPayment.toLocaleString()}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-autobuy-neutral-2 text-sm">
                  Vehicle Price:
                </span>
                <span className="font-medium text-base text-autobuy-neutral-1">
                  ₦{vehiclePrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-autobuy-neutral-2 text-sm">
                  Down Payment:
                </span>
                <span className="font-medium text-base text-autobuy-neutral-1">
                  ₦{depositAmount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-autobuy-neutral-2 text-sm">
                  Loan Tenure:
                </span>
                <span className="font-medium text-base text-autobuy-neutral-1">
                  {loanTenure}
                </span>
              </div>
            </div>

            <div className="text-xs text-autobuy-neutral-2 mb-6 leading-relaxed">
              <strong>Monthly installment includes:</strong>
              <br />
              Vehicle Registration, Comprehensive Insurance, Annual Maintenance
              Cost, Tracker, Credit Life Insurance, Roadworthiness, Vehicle
              Licence Renewal.
            </div>

            <button
              style={{
                boxShadow:
                  "1px 1px 8px 0px #061F4526 inset, -1px -1px 8px 0px #061F4526 inset, 0px 1px 6px 0px #00000014",
              }}
              onClick={onContinueFinancing}
              className="w-full py-3 text-base bg-autobuy-primary2.5 text-white font-semibold rounded-xl hover:bg-autobuy-primary2.7 transition-colors"
            >
              Continue with Financing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;
