import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface InspectionCategory {
  name: string;
  details: string[];
}

interface InspectionReportProps {
  title?: string;
  completionItems?: { text: string; completed: boolean }[];
  categories?: InspectionCategory[];
  footerNote?: string;
}

const InspectionReport: React.FC<InspectionReportProps> = ({
  title = "Inspection Report",
  completionItems = [
    { text: "150+ inspection Completed", completed: true },
    { text: "Verified Documents", completed: true },
    { text: "Test Driven", completed: true },
  ],
  categories = [
    { name: "Exterior Check", details: [] },
    { name: "Interior Check", details: [] },
    { name: "Engine / Performance", details: [] },
    { name: "Safety / Tech", details: [] },
  ],
  footerNote = "This vehicle has been inspected by AutoBuy-certified inspectors. All findings are verified and documented.",
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
        <div className="mb-3">
              <h3 className="text-base font-medium text-autobuy-primary2.5">{title}</h3>
        </div>

        {/* Completion Status */}
        <div className="mb-6">
          {completionItems.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="flex items-center justify-center  mr-3">
                <Icon
                  icon="gg:check-o"
                  className="size-5 text-blue-600"
                />
              </div>
              <span className="text-slate-900 font-medium">{item.text}</span>
            </div>
          ))}   
        </div>

        {/* Key Inspection Categories */}
        <div className="mb-3">
          <h4 className="text-base font-medium text-autobuy-primary2.5">
            Key Inspection Categories
          </h4>
        </div>

        {/* Inspection Categories */}
        <div className="space-y-2 mb-6">
          {categories.map((category, index) => (
            <div key={index} className="border-b border-slate-100">
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex justify-between items-center py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-autobuy-neutral-1 text-base font-medium">
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
                  <div className="pb-4 animate-fadeIn">
                    {category.details.length > 0 ? (
                      <ul className="space-y-2">
                        {category.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="text-slate-600 text-sm opacity-0 animate-slideInLeft"
                            style={{
                              animationDelay: `${detailIndex * 0.1}s`,
                              animationFillMode: "forwards",
                            }}
                          >
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        className="text-slate-500 text-sm opacity-0 animate-fadeIn"
                        style={{ animationFillMode: "forwards" }}
                      >
                        No details available for this category
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>


          <div className="flex items-start">
            <Icon icon="icon-park-outline:dot" width="1.2em" height="1.2em" className="mt-1 mr-3 text-autobuy-neutral-2" />
            <p className="text-autobuy-neutral-2 text-sm leading-relaxed">
              {footerNote}
            </p>
          </div>

      </main>
    </>
  );
};

export default InspectionReport;
export type { InspectionCategory };
