"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const ExportUsersModal = ({ children }: { children: React.ReactNode }) => {
  const [selectedOption, setSelectedOption] = useState<
    "all" | "page" | "date"
  >("page"); // Defaulting to 'page' as per screenshot shows it expanded often, or 'all'

  // Mock form handling
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px] p-6 bg-white rounded-2xl">
        {/* No Header Title shown in screenshot inside the white card directly? 
            Wait, screenshot shows radio items inside directly. 
            I'll skip DialogHeader text if not needed or put invisible one for a11y.
        */}
        <DialogHeader className="hidden">
           <DialogTitle>Export Users</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Option 1: Export all users */}
          <div
            onClick={() => setSelectedOption("all")}
            className={`cursor-pointer rounded-2xl border p-4 flex items-center gap-4 transition-all ${
              selectedOption === "all"
                ? "border-autobuy-blue-2 bg-blue-50/10" // Screenshot doesn't show background for 'Export all users' when unselected? 
                // Wait, screenshot 1: 'Export all users' is empty circle.
                // Screenshot 2: 'Export page' is SELECTED (Orange dot).
                // So styling depends on selection.
                : "border-gray-200 bg-white"
            } ${selectedOption === "all" ? "border-autobuy-blue-2" : ""}`}
            // Note: Screenshot 2 shows blue border for the SELECTED card "Export page".
            // Screenshot 1 shows just border for "Export all users".
          >
            <div
              className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 ${
                selectedOption === "all"
                  ? "border-autobuy-orange-1"
                  : "border-gray-400"
              }`}
            >
              {selectedOption === "all" && (
                <div className="w-3 h-3 rounded-full bg-autobuy-orange-1"></div>
              )}
            </div>
            <span className="text-gray-900 font-medium text-lg">
              Export all users
            </span>
          </div>

          {/* Option 2: Export page */}
          <div
            onClick={() => setSelectedOption("page")}
             className={`cursor-pointer rounded-2xl border p-5 transition-all w-full group ${
              selectedOption === "page"
                ? "border-autobuy-blue-2 bg-blue-50/20 shadow-[0_0_0_1px_rgba(59,130,246,0.1)]"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-4 mb-3">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  selectedOption === "page"
                    ? "border-autobuy-orange-1"
                    : "border-gray-400 group-hover:border-gray-500"
                }`}
              >
                {selectedOption === "page" && (
                  <div className="w-3 h-3 rounded-full bg-autobuy-orange-1"></div>
                )}
              </div>
              <span className="text-gray-900 font-medium text-lg">
                Export page
              </span>
            </div>

            {/* Expanded Content */}
            {selectedOption === "page" && (
              <div className="mt-4 animate-in fade-in slide-in-from-top-1 duration-200">
                <label className="block text-sm text-gray-600 mb-2 font-medium">Page number</label>
                <input
                  type="text"
                  placeholder="Enter Input"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 transition-shadow"
                />
              </div>
            )}
          </div>

          {/* Option 3: Export by date */}
          <div
            onClick={() => setSelectedOption("date")}
             className={`cursor-pointer rounded-2xl border p-5 transition-all w-full group ${
              selectedOption === "date"
                ? "border-autobuy-blue-2 bg-blue-50/20 shadow-[0_0_0_1px_rgba(59,130,246,0.1)]"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-4 mb-3">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  selectedOption === "date"
                    ? "border-autobuy-orange-1"
                    : "border-gray-400 group-hover:border-gray-500"
                }`}
              >
                {selectedOption === "date" && (
                  <div className="w-3 h-3 rounded-full bg-autobuy-orange-1"></div>
                )}
              </div>
              <span className="text-gray-900 font-medium text-lg">
                Export by date
              </span>
            </div>

             {/* Expanded Content */}
             {selectedOption === "date" && (
              <div className="mt-4 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-1 duration-200">
                <div>
                    <label className="block text-sm text-gray-600 mb-2 font-medium">Start date:</label>
                    <div className="relative">
                        <input
                        type="text"
                        defaultValue="10-11-25"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 text-center"
                        />
                    </div>
                </div>
                 <div>
                    <label className="block text-sm text-gray-600 mb-2 font-medium">End date:</label>
                     <div className="relative">
                        <input
                        type="text"
                        defaultValue="10-11-25"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 text-center"
                        />
                     </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
            <Button className="w-full bg-autobuy-primary2.5 hover:bg-blue-600 text-white rounded-xl h-12 text-base font-medium">
                Export
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExportUsersModal;
