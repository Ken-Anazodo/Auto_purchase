import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface FeatureCategory {
  name: string;
  features: string[];
}

interface VehicleFeaturesProps {
  categories?: FeatureCategory[];
  title?: string;
}

const VehicleFeatures: React.FC<VehicleFeaturesProps> = ({
  categories = [
    { name: "Performance", features: [] },
    { name: "Convenience", features: [] },
    { name: "Safety", features: [] },
    { name: "luxury", features: [] },
    { name: "Comfort", features: [] },
    { name: "Interior", features: [] },
    { name: "Entertainment", features: [] },
    { name: "Exterior", features: [] },
    { name: "Tech", features: [] },
    { name: "Offroad", features: [] },
    { name: "Mechanical", features: [] },
    { name: "Advanced driver assistant system", features: [] },
    { name: "Sustainability & Efficiency", features: [] },
  ],
  title = "Vehicle Features",
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 500px;
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            max-height: 500px;
            opacity: 1;
          }
          to {
            max-height: 0;
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.4s ease-in-out;
        }
      `}</style>
      <main>
        <div className="mb-6">
          <h3 className="text-base font-medium text-autobuy-primary2.5">
            {title}
          </h3>
        </div>
        <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-14">
          {categories.map((category, index) => (
            <div key={index} className="border-b border-slate-100">
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex justify-between items-center py-4 px-2 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-slate-900 font-medium">
                  {category.name}
                </span>
                <Icon
                  icon="heroicons:chevron-down-20-solid"
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                    expandedCategories.has(category.name) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedCategories.has(category.name) && (
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    animation: expandedCategories.has(category.name)
                      ? "slideDown 0.3s ease-in-out"
                      : "slideUp 0.3s ease-in-out",
                  }}
                >
                  <div className="pb-4 pl-2 animate-fadeIn">
                    {category.features.length > 0 ? (
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-slate-600 text-sm opacity-0 animate-slideInLeft"
                            style={{
                              animationDelay: `${featureIndex * 0.1}s`,
                              animationFillMode: "forwards",
                            }}
                          >
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        className="text-slate-500 text-sm opacity-0 animate-fadeIn"
                        style={{ animationFillMode: "forwards" }}
                      >
                        No features listed for this category
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default VehicleFeatures;
export type { FeatureCategory };
