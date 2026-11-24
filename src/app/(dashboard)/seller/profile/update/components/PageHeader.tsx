"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Icon } from "@iconify/react";

interface PageHeaderProps {
  title: string;
  onBackClick?: () => void;
  backLabel?: string;
}

export function PageHeader({
  title,
  onBackClick,
  backLabel = "Back to Home",
}: PageHeaderProps) {
  return (
    <div className="w-full flex  items-center mb-8">
      <div className="w-full flex items-center  justify-between mb-6">
        <button
          onClick={onBackClick}
          className="flex items-center gap-2 text-autobuy-neutral-1 hover:text-gray-800 transition-colors group  border border-autobuy-neutral-6 px-8 py-4 rounded-2xl"
        >
          <Icon
            icon="mdi:arrow-left"
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
          />
          <span className="text-sm  ">{backLabel}</span>
        </button>


        <h1 className="text-xl font-medium text-autobuy-neutral-1 mx-auto">{title}</h1>
      </div>
    </div>
  );
}
