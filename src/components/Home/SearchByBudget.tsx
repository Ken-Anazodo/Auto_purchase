import { Icon } from "@iconify/react";
import React from "react";

const SearchByBudget = () => {
  const budgetCategories = [
    {
      id: 1,
      label: "Budget Friendly",
      range: "Under ₦5,000,000",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      id: 2,
      label: "Mid Range",
      range: "₦5M - ₦15M",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 3,
      label: "Luxury",
      range: "₦16M - ₦30M",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      id: 4,
      label: "Premium",
      range: "₦31M+",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
  ];

  return (
    <div className="py-16 container pt-8 px-6 spacing space-y-8  mx-auto">
      <p className=" text-autobuy-neutral-2 text-lg">
        Search Verified Cars Within Your Budget. Choose a price range to start
        browsing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {budgetCategories.map((category) => (
          <div
            key={category.id}
            className={`bg-white shadow rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className={`${category.bgColor} p-3 rounded-full`}>
                <Icon
                  icon="streamline-ultimate:car-3"
                  className={`w-8 h-8 ${category.iconColor}`}
                />
              </div>

              <div className=" mr-auto">
                <h3 className="font-normal text-xs text-autobuy-neutral-2 mb-1">
                  {category.label}
                </h3>
                <p className="text-sm text-autobuy-neutral-1 font-medium">
                  {category.range}
                </p>
              </div>

              <div className=" text-autobuy-primary2.5 group-hover:text-autobuy-primary2.5 transition-colors  size-6">
                <Icon icon="mynaui:chevrons-right" className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchByBudget;
