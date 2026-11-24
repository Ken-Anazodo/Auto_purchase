import React from "react";

interface PurchaseOption {
  value: string;
  label: string;
}

interface PurchaseOptionsProps {
  options: PurchaseOption[];
  selectedOption: string;
  onOptionChange: (value: string) => void;
  title?: string;
  className?: string;
}

const PurchaseOptions: React.FC<PurchaseOptionsProps> = ({
  options,
  selectedOption,
  onOptionChange,
  title = "How would you like to proceed?",
  className = "",
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h3 className="text-lg font-medium text-autobuy-neutral-1 mb-4">
        {title}
      </h3>

      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={(e) => onOptionChange(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-autobuy-neutral-1 font-medium text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PurchaseOptions;
export type { PurchaseOption };
