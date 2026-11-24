import React from "react";
import { Icon } from "@iconify/react";

interface HistoryItem {
  label: string;
  value: string;
  valueStyle?: string;
}

interface CarHistoryProps {
  title?: string;
  reportLink?: {
    text: string;
    href: string;
  };
  historyItems?: HistoryItem[];
}

const CarHistory: React.FC<CarHistoryProps> = ({
  title = "Car History",
  reportLink = {
    text: "View Vehicle History Report",
    href: "#",
  },
  historyItems = [
    { label: "Accident Records:", value: "None" },
    { label: "Previous Owner:", value: "1" },
    { label: "Service History:", value: "Complete" },
    { label: "Status:", value: "Verified", valueStyle: "text-[#34B233]" },
  ],
}) => {
  return (
    <main>
      <div className="flex-col justify-between items-center mb-6">
        <h3 className="text-base font-medium text-autobuy-primary2.5">
          {title}
        </h3>
        <a
          className="text-base font-medium text-autobuy-primary2.5 italic  flex items-center"
          href={reportLink.href}
        >
          {reportLink.text}{" "}
          <Icon
            icon="heroicons:arrow-top-right-on-square-20-solid"
            className="text-base ml-1"
          />
        </a>
      </div>
      <main className="grid md:grid-cols-2 gap-4 ">
        <div className="space-y-2 ">
          {historyItems.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-3 border-b border-autobuy-neutral-5 ${
                index < historyItems.length - 1
                  ? "border-b border-autobuy-neutral-5"
                  : ""
              }`}
            >
              <span className="text-autobuy-neutral-2 text-base">
                {item.label}
              </span>
              <span
                className={`font-medium text-base ${item.valueStyle || "text-autobuy-neutral-1 "}`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </main>
    </main>
  );
};

export default CarHistory;
export type { HistoryItem };
