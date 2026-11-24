"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";
import ProfileNotificationBanner from "@/components/ProfileNotificationBanner";


interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Check if current page is profile page
  const isProfilePage = pathname?.includes("/profile");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleProfileCompletion = () => {
    router.push("/seller/profile");
  };

  

  return (
    <div className="h-screen flex container !px-0 ">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <div className="flex flex-col transition-all duration-300 ease-in-out h-screen w-full overflow-hidden">
        {/* Header */}
        <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#ffffff]">
          <div className="p-4 sm:p-6 lg:p-8">
            <div data-aos="fade-up" className="mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>

      <ProfileNotificationBanner
        isVisible={isProfilePage}
        percentage={60}
        title="Profile completion"
        description="Please complete your profile"
        onComplete={handleProfileCompletion}
        position="top-right"
      />
    </div>
  );
};

export default DashboardLayout;
