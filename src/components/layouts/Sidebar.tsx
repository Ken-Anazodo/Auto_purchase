"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavigationItem {
  name: string;
  href: string;
  icon: string;
  current?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const isBuyer = pathname.startsWith("/buyer");
  const isAdmin = pathname.search("admin") > -1;

  const sellerNavigation: NavigationItem[] = [
    { name: "Dashboard", href: "/seller/dashboard", icon: "mdi:view-dashboard-outline" },
    { name: "Inspections", href: "/seller/inspections", icon: "solar:calendar-linear" },
    { name: "Cars & listings", href: "/seller/listings", icon: "mdi:car-outline" },
    { name: "Sales & Payment", href: "/seller/payments", icon: "mdi:credit-card-outline" },
    { name: "Analytics", href: "/seller/analytics", icon: "mdi:chart-line" },
  ];

  const adminNavigation: NavigationItem[] = [
    { name: "Dashboard", href: "/admin/dashboard", icon: "mdi:view-grid-outline" },
    { name: "Users", href: "/admin/users", icon: "heroicons:users" },
    {
      name: "Bookings & insp",
      href: "/admin/bookings",
      icon: "solar:calendar-linear",
    },
    { name: "Vehicles", href: "/admin/vehicles", icon: "mdi:car-outline" },
    { name: "Offers", href: "/admin/offers", icon: "mingcute:tag-line" },
    {
      name: "Custom Quotes",
      href: "/admin/quotes",
      icon: "heroicons:document-text",
    },
    {
      name: "Sales & Payment",
      href: "/admin/sales-payments",
      icon: "mdi:credit-card-outline",
    },
    {
      name: "Admin Mgt",
      href: "/admin/management",
      icon: "mdi:shield-account-outline",
    },
  ];

  const buyerNavigation: (NavigationItem & { badge?: number })[] = [
    { name: "Dashboard", href: "/buyer/dashboard", icon: "mdi:view-grid-outline" },
    { name: "My Orders", href: "/buyer/orders", icon: "hugeicons:package" },
    { name: "Offers", href: "/buyer/offers", icon: "mingcute:tag-line" },
    { name: "Transactions", href: "/buyer/transactions", icon: "heroicons:receipt-percent" },
  ];

  const buyerSecondaryNavigation: (NavigationItem & { badge?: number })[] = [
    { name: "Quote Requests", href: "/buyer/quotes", icon: "heroicons:document-text", badge: 1 },
    { name: "Favourites", href: "/buyer/favourites", icon: "heroicons:heart", badge: 2 },
    { name: "Garage", href: "/buyer/garage", icon: "mdi:car-outline", badge: 2 },
  ];

  let navigation;
  if (isBuyer) {
    navigation = buyerNavigation;
  } else if (isAdmin) {
    navigation = adminNavigation;
  } else {
    navigation = sellerNavigation;
  }

  const isCurrentPath = (href: string) => {
    return pathname.includes(href);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-70 bg-white shadow-sm border-r border-gray-100 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 pl-[40px] pt-[40px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full w-[250px]">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-3 pb-8">
              <Image
                src={"/logo/logo.svg"}
                width={150}
                height={50}
                alt="logo"
                className=""
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-8 overflow-y-auto">
            <div className="space-y-4">
              {navigation.map((item) => {
                const current = isCurrentPath(item.href);
                // Buyer & Admin active style: Custom Light Blue bg + Blue Text. Seller active style: Orange bg + Orange text
                const activeClass =
                  isBuyer || isAdmin
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "bg-autobuy-orange-5 text-autobuy-orange-1 font-medium";
                const inactiveClass =
                  "text-gray-500 hover:text-gray-900 hover:bg-gray-50 font-medium";
                const iconActive =
                  isBuyer || isAdmin ? "text-blue-600" : "text-orange-500";

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        onClose();
                      }
                    }}
                    className={`group flex items-center px-4 py-3 text-base rounded-lg transition-all duration-200 ${
                      current ? activeClass : inactiveClass
                    }`}
                  >
                    <Icon
                      icon={item.icon}
                      className={`w-6 h-6 mr-3 ${
                        current ? iconActive : "text-gray-400 group-hover:text-neutral"
                      }`}
                    />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {isBuyer && (
                  <>
                    <div className="border-t border-gray-100 my-4 pt-4"></div>
                    {buyerSecondaryNavigation.map((item) => {
                         const current = isCurrentPath(item.href);
                         // Reuse the same active logic
                         const activeClass = "bg-blue-100 text-blue-600 font-semibold";
                         const inactiveClass = "text-gray-500 hover:text-gray-900 hover:bg-gray-50 font-medium";
                         const iconActive = "text-blue-600";

                         return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group flex items-center justify-between px-4 py-3 text-base rounded-lg transition-all duration-200 ${
                                    current ? activeClass : inactiveClass
                                }`}
                            >
                                <div className="flex items-center flex-grow">
                                    <Icon 
                                        icon={item.icon} 
                                        className={`w-5 h-5 mr-3 ${current ? iconActive : "text-gray-400"}`} 
                                    />
                                    <span>{item.name}</span>
                                </div>
                                {item.badge && (
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs text-gray-600 font-medium">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                         )
                    })}
                  </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
