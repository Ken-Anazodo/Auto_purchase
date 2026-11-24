import { Icon } from "@iconify/react";
import React from "react";

const navItems = [
  {
    id: "summary",
    label: "Vehicle Summary",
    icon: "streamline-ultimate:car-3",
    bg: "bg-[#F5F9FF]",
    text: "text-blue-600",
    border: "border-blue-50",
    iconBg: "bg-white",
    iconColor: "text-[#0A6DFF]",
  },
  {
    id: "inspection",
    label: "Inspection Summary",
    icon: "mynaui:file",
    bg: "bg-[#FEF2EC]",
    text: "text-gray-700",
    border: "border-orange-50",
    iconBg: "bg-[#FFFCFA]",
    iconColor: "text-[#EF693E]",
  },
  {
    id: "sales",
    label: "Sales History",
    icon: "ph:users",
    bg: "bg-[#E5FBE4]",
    text: "text-gray-700",
    border: "border-green-50",
    iconBg: "bg-[#F6FEF6]",
    iconColor: "text-[#34B233]",
  },
  {
    id: "salvage",
    label: "Salvage Auction Record",
    icon: "mingcute:auction-fill",
    bg: "bg-[#F8F4CF]",
    text: "text-gray-700",
    border: "border-yellow-50",
    iconBg: "bg-[#FBF9E4]",
    iconColor: "text-[#EFD80F]",
  },
  {
    id: "theft",
    label: "Theft Record",
    icon: "heroicons:exclamation-triangle",
    bg: "bg-[#F8C6C6]",
    text: "text-gray-700",
    border: "border-red-50",
    iconBg: "bg-[#FCE4E4]",
    iconColor: "text-red-600",
  },
];

const HistorySectionNav = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() =>
            document
              .getElementById(item.id)
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`flex items-center gap-3 px-4 py-8 rounded-[12px] border transition-all shadow-sm hover:shadow-sm ${item.bg} ${item.border}`}
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor}`}
          >
            <Icon icon={item.icon} className="size-7" />
          </div>
          <div className="flex flex-grow justify-between items-center overflow-hidden">
            <span
              className={`text-base font-medium text-autobuy-neutral-2 ${item.text} truncat text-left leading-tight`}
            >
              {item.label}
            </span>
            <Icon
              icon="f7:chevron-right-2"
              className="text-autobuy-primary2.5 w-6"
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default HistorySectionNav;
