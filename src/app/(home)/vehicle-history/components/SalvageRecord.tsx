import { Icon } from "@iconify/react";
import React from "react";

const SalvageRecord = () => {
  return (
    <section
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8"
      id="salvage"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          style={{
            background:
              "linear-gradient(217.57deg, #FAFCFF -138.48%, #BDD7FF -47.17%, #0067FF 17.55%, #064199 74.19%)",
          }}
          className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0"
        >
          <Icon icon="hugeicons:auction" className="text-white text-xl" />
        </div>
        <h3 className="text-lg font-bold text-autobuy-primary2.5">
          Salvage Auction Records
        </h3>
      </div>
      <p className="text-sm text-[#3385FF] mb-8 ml-[52px]">
        This check identifies if the vehicle has a history at motor auctions
      </p>

      <div className="rounded-2xl border border-gray-100 p-8">
        <div className="mb-6">
          <h4 className="text-gray-900 font-bold text-sm">Auction Record 1</h4>
          <p className="text-gray-500 text-xs mt-1">Lot Number: 1-84608384</p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
          {[1, 2, 3, 4, 5].map((i, idx) => (
            <div
              key={idx}
              className=" aspect-[4/3] rounded-2xl border border-gray-200 flex items-center justify-center shrink-0 text-gray-400 text-sm bg-gray-50/10"
            >
              Image {i}
            </div>
          ))}
        </div>

        {/* Auction Information */}
        <div className="mb-10">
          <h4 className="text-blue-600 text-sm font-bold mb-6">
            Auction Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <InfoRow label="Seller Type:" value="Insurance Company" />
            <InfoRow label="Buyer Country:" value="N/A" />
            <InfoRow label="Auction Date:" value="15-04-2025" />
            <InfoRow label="Damage Ratio:" value="N/A" />
            <InfoRow label="Auction Type:" value="N/A" />
            <InfoRow label="Estimated Winning Bid:" value="N/A" />
            <InfoRow label="Location:" value="Island" />
            <InfoRow label="Ang Estimated Retail Value:" value="$3448.00" />
          </div>
        </div>

        {/* Title & Condition */}
        <div>
          <h4 className="text-blue-600 text-sm font-bold mb-6">
            Title & Condition
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <InfoRow
              label="Title Type:"
              value="Junked vehicle bill of sale (WI)"
            />
            <InfoRow label="Primary Damage:" value="Front End" />
            <InfoRow label="Title Description:" value="N/A" />
            <InfoRow label="Secondary Damage:" value="N/A" />
            <InfoRow label="VIN:" value="12345678910245" />
            <InfoRow label="Common:" value="N/A" />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
    <span className="text-autobuy-neutral-2 text-base font-normal">{label}</span>
    <span className="text-autobuy-neutral-1 text-base font-medium">{value}</span>
  </div>
);

export default SalvageRecord;
