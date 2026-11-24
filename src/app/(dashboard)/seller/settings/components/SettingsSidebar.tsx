"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { User, Bell, CreditCard, Shield, LogOut } from "lucide-react";

type SettingsSection =
  | "profile"
  | "notifications"
  | "bank"
  | "security"
  | "logout";

interface SettingsSidebarProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

interface SidebarItem {
  id: SettingsSection;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isAction?: boolean;
}

const sidebarItems: SidebarItem[] = [
  {
    id: "profile",
    icon: User,
    label: "My Profile",
  },
  {
    id: "notifications",
    icon: Bell,
    label: "Notifications",
  },
  {
    id: "bank",
    icon: CreditCard,
    label: "Bank Information",
  },
  {
    id: "security",
    icon: Shield,
    label: "Security",
  },
  {
    id: "logout",
    icon: LogOut,
    label: "Log Out",
    isAction: true,
  },
];

export function SettingsSidebar({
  activeSection,
  onSectionChange,
}: SettingsSidebarProps) {
  return (
    <>
      {/* Mobile Horizontal Sidebar */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4 mb-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "flex-shrink-0 flex flex-col items-center gap-1 p-3 h-auto rounded-lg min-w-[80px]",
                activeSection === item.id && !item.isAction
                  ? "bg-orange-50 text-orange-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50",
                item.isAction && "text-gray-600 hover:text-red-600"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs text-center">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Desktop Vertical Sidebar */}
      <div className="hidden md:block w-64 bg-white border-r border-gray-200 p-4 h-full">
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full justify-start gap-3 p-3 h-auto rounded-lg text-left",
                activeSection === item.id && !item.isAction
                  ? "bg-orange-50 text-orange-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50",
                item.isAction && "text-gray-600 hover:text-red-600"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
