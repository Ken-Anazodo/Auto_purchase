"use client";

import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const pageTitle = [
  {
    title: "Dashboard Overview",
    icon: "mdi:view-dashboard-outline",
    route: "/seller/dashboard",
  },
  {
    title: "Inpections",
    icon: "cuida:calendar-outline",
    route: "/seller/inspections",
  },
  {
    title: "cars & Listings",
    icon: "cil:car-alt",
    route: "/seller/listings",
  },
  {
    title: "Sales & Payment",
    icon: "solar:card-linear",
    route: "/seller/payments",
  },
  {
    title: "Analytics",
    icon: "carbon:analytics",
    route: "/seller/analytics",
  },
  {
    title: "Settings",
    icon: "pajamas:settings",
    route: "/seller/settings",
  },
  {
    title: "Profile",
    icon: "hugeicons:profile-02",
    route: "/seller/profile",
  },
  {
    title: "Support",
    icon: "streamline:customer-support-1-solid",
    route: "/seller/support",
  },
  {
    title: "Notifications",
    icon: "streamline:notification-alarm-2-remix",
    route: "/seller/notification",
  },
  // Admin Routes
  {
    title: "Dashboard Overview",
    icon: "mdi:view-grid-outline",
    route: "/admin",
  },
  {
    title: "Users",
    icon: "heroicons:users",
    route: "/admin/users",
  },
  {
    title: "Bookings & inspections",
    icon: "solar:calendar-linear",
    route: "/admin/bookings",
  },
  {
    title: "Vehicles",
    icon: "mdi:car-outline",
    route: "/admin/vehicles",
  },
  {
    title: "Offers & Negotiations",
    icon: "mingcute:tag-line",
    route: "/admin/offers",
  },
  {
    title: "Custom Quotes",
    icon: "heroicons:document-text",
    route: "/admin/quotes",
  },
  {
    title: "Sales & Payment",
    icon: "mdi:credit-card-outline",
    route: "/admin/sales-payments",
  },
  {
    title: "Admin Mgt",
    icon: "mdi:shield-account-outline",
    route: "/admin/management",
  },
];

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const isBuyer = pathname.startsWith("/buyer");
  const isAdmin = pathname.search("admin") > -1;
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);


  const startListening = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = false;
      recognition.lang = "en-US";
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
      };

      recognition.start();
    } else {
      alert("Speech recognition is not supported in this browser.");
    }
  };


  const getCurrentPageInfo = () => {
    const exactMatch = pageTitle.find((page) => pathname === page.route);
    if (exactMatch) return exactMatch;

    const partialMatch = pageTitle.find(
      (page) =>
        pathname.startsWith(page.route) && page.route !== "/seller/dashboard",
    );
    if (partialMatch) return partialMatch;

    return pageTitle[0];
  };

  const currentPage = getCurrentPageInfo();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleNotifications = (link: string) => {
    router.push(`/${isBuyer ? 'buyer' : isAdmin ? 'admin' : 'seller'}/${link}`);
  };

  const handleLogout = () => {
    router.push("/auth/login");
  };
  
  // Buyer-specific Header Layout
  if (isBuyer) {
      return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-30 w-full py-[10px]">
            <div className="flex items-center justify-between h-[4rem] px-4 sm:px-6 lg:px-8">
                 {/* Left Side: Mobile Menu + Browse Cars */}
                 <div className="flex items-center gap-4">
                    <button
                        onClick={onToggleSidebar}
                        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        aria-label="Toggle sidebar"
                    >
                        <Icon
                        icon={isSidebarOpen ? "mdi:close" : "mdi:menu"}
                        className="w-6 h-6"
                        />
                    </button>
                    <h1 className="text-xl font-medium text-autobuy-neutral-1 hidden md:block">Browse Cars</h1>
                 </div>

                 {/* Center: Search Bar */}
                 <div className="flex-1 max-w-2xl mx-4 lg:mx-12 hidden md:block">
                      <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Icon icon="heroicons:magnifying-glass" className="text-gray-400 w-5 h-5" />
                           </div>
                           <input 
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)} 
                              placeholder={isListening ? "Listening..." : "Search cars by brand, model, price..."}
                              className={`w-full pl-11 pr-24 py-3 bg-white border rounded-[14px] text-sm focus:outline-none focus:ring-1 shadow-sm transition-all ${
                                isListening 
                                    ? "border-red-400 focus:border-red-500 focus:ring-red-500 placeholder-red-400" 
                                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              }`}
                           />
                           <div className="absolute inset-y-0 right-0 p-1.5 flex items-center gap-2">
                                <button 
                                    onClick={startListening}
                                    className={`p-1.5 hover:bg-gray-100 rounded-[12px] transition-colors ${
                                        isListening ? "text-red-500 animate-pulse" : "text-autobuy-neutral-3 hover:text-autobuy-neutral-2"
                                    }`}
                                    title="Voice Search"
                                >
                                     <Icon icon={isListening ? "heroicons:microphone-solid" : "heroicons:microphone"} className="w-5 h-5" />
                                </button>
                                <button className="px-5 py-1.5 bg-autobuy-primary2.5 text-white text-sm font-medium rounded-[12px] hover:bg-autobuy-primary2.5/80 transition-colors">
                                    Search
                                </button>
                           </div>
                      </div>
                 </div>

     
     
                 <div className="flex items-center gap-4">
                      <button 
                        onClick={() => toggleNotifications("notification")}
                        className="relative p-2.5 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                          {/* <Icon icon="solar:bell-broken" className="w-5 h-5" /> */}
                          <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white hidden"></span> 
                      </button>

                      <div className="relative" ref={userMenuRef}>
                        <button 
                            onClick={toggleUserMenu}
                            className="flex items-center gap-3 p-1.5 pl-2 pr-4 rounded-full border border-gray-200 hover:border-blue-300 transition-all bg-white"
                        >
                            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-autobuy-primary2.5 font-medium">
                                A
                            </div>
                            <div className="hidden sm:block text-left space-y-2">
                                <div className="text-sm font-medium text-autobuy-primary2.5 leading-tight">Myemail@gmail.com</div>
                                <div className="text-xs text-autobuy-neutral-2 leading-tight">Buyer</div>
                            </div>
                            <Icon icon="heroicons:chevron-down" className="w-4 h-4 text-gray-400" />
                        </button>

                         {/* Reuse existing Dropdown logic */}
                        {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                          <div className="py-2 flex flex-col items-center">
                            <Link
                                href="/buyer/profile"
                                className="flex items-center justify-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors w-full"
                            >
                                <Icon icon="mdi:account-outline" className="w-5 h-5 mr-3 text-gray-500" />
                                Profile
                            </Link>
                            <Link
                                href="/buyer/profile"
                                className="flex items-center justify-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors w-full"
                            >
                                <Icon icon="mdi:cog-outline" className="w-5 h-5 mr-3 text-gray-500" />
                                Settings
                            </Link>
                            <Link
                                href="/seller/dashboard"
                                className="flex items-center justify-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors w-full"
                            >
                                <Icon icon="mdi:refresh" className="w-5 h-5 mr-3 text-gray-500" />
                                Switch to seller
                            </Link>
                            <div className="border-t border-gray-100 mt-2 pt-2">
                                <button
                                onClick={handleLogout}
                                className="flex items-center justify-center px-6 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
                                >
                                <Icon icon="mdi:logout-variant" className="w-5 h-5 mr-3 text-red-600" />
                                Log Out
                                </button>
                            </div>
                            </div>
                        </div>
                        )}
                      </div>
                 </div>
            </div>
        </header>
      )
  }

  // Existing Seller & Admin Header Layout
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-30 w-full py-[10px]">
      <div className="flex items-center justify-between h-[4rem] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <button
            onClick={onToggleSidebar}
            className={`lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-autobuy-blue-2 transition-colors`}
            aria-label="Toggle sidebar"
          >
            <Icon
              icon={isSidebarOpen ? "mdi:close" : "mdi:menu"}
              className="w-6 h-6"
            />
          </button>

          <div className="flex items-center space-x-3 mr-1">
            <Icon
              icon={currentPage.icon}
              className="w-6 h-6 text-gray-700 hidden md:inline"
            />
            <h1 className="text-xl font-medium text-autobuy-neutral-1">
              {currentPage.title} 
            </h1>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => toggleNotifications("support")}
            className={`p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-autobuy-blue-2 transition-colors relative w-8 h-8 ${isAdmin ? 'bg-blue-50 hidden' : 'bg-autobuy-blue-5'} rounded-full flex items-center justify-center`}
          >
            <Icon
              icon="stash:headset-light"
              className={`${isAdmin ? 'text-blue-600' : 'text-autobuy-blue-1'} font-medium text-xl w-6 h-6`}
            />
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => toggleNotifications("notification")}
              className={`p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-autobuy-blue-2 transition-colors relative w-8 h-8 ${isAdmin ? 'bg-blue-50' : 'bg-autobuy-blue-5'} rounded-full flex items-center justify-center`}
            >
              <Icon
                className={`${isAdmin ? 'text-blue-600' : 'text-autobuy-blue-1'} font-medium text-xl w-6 h-6`}
                icon="solar:bell-broken"
              />
            </button>

            {/* Notifications Dropdown */}
            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Notifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
                      <div className="flex-shrink-0">
                        <Icon
                          icon="mdi:information"
                          className="w-5 h-5 text-autobuy-blue-2"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          Welcome to Autobuy Dashboard
                        </p>
                        <p className="text-xs text-gray-500">2 minutes ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <button className="text-sm text-autobuy-blue-2 hover:text-autobuy-blue-1 font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={toggleUserMenu}
              className={`flex items-center space-x-3 p-2 rounded-[999px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-autobuy-blue-2 transition-colors border px-3`}
            >
              <div className={`w-8 h-8 ${isAdmin ? 'bg-blue-50' : 'bg-autobuy-blue-5'} rounded-full flex items-center justify-center`}>
                <span className={`${isAdmin ? 'text-blue-600' : 'text-autobuy-blue-1'} font-medium text-xl`}>
                  A
                </span>
              </div>
              <div className="hidden sm:block text-left mr-10">
                <p className="text-sm font-medium text-gray-900">
                  {isAdmin ? "Admin@autobuy.com" : "Myemail@gmail.com"}
                </p>
                <p className="text-xs text-gray-500">{isAdmin ? "Admin" : "Seller"}</p>
              </div>
              <Icon icon="mdi:chevron-down" className="w-4 h-4 text-gray-400" />
            </button>

            {/* User Menu Dropdown */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-3">
                    {/* Admin Dropdown Items */}
                    {isAdmin ? (
                        <>
                            <Link
                                href="/admin/profile"
                                className="flex items-center justify-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <Icon
                                icon="mdi:account-outline"
                                className="w-5 h-5 mr-3 text-gray-500"
                                />
                                Profile
                            </Link>
                            <Link
                                href="/admin/settings"
                                className="flex items-center justify-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <Icon
                                icon="mdi:cog-outline"
                                className="w-5 h-5 mr-3 text-gray-500"
                                />
                                Account Settings
                            </Link>

                             <div className="border-t border-gray-100 mt-2 pt-2">
                                <button
                                onClick={handleLogout}
                                className="flex items-center justify-center w-full px-6 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                >
                                <Icon
                                    icon="mdi:logout-variant"
                                    className="w-5 h-5 mr-3 text-red-600"
                                />
                                Log Out
                                </button>
                            </div>
                        </>
                    ) : (
                        /* Standard Seller Dropdown Items */
                        <>
                          <Link
                            href={pathname.startsWith("/buyer") ? "/buyer/profile" : "/seller/profile"}
                            className="flex items-center justify-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <Icon
                              icon="mdi:account-outline"
                              className="w-5 h-5 mr-3 text-gray-500"
                            />
                            Profile
                          </Link>
                          <Link
                            href={pathname.startsWith("/buyer") ? "/buyer/settings" : "/seller/settings"}
                            className="flex items-center justify-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <Icon
                              icon="mdi:cog-outline"
                              className="w-5 h-5 mr-3 text-gray-500"
                            />
                            Settings
                          </Link>
                          <Link
                            href={pathname.startsWith("/buyer") ? "/seller/dashboard" : "/buyer/dashboard"}
                            className="flex items-center justify-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <Icon
                              icon="mdi:refresh"
                              className="w-5 h-5 mr-3 text-gray-500"
                            />
                            {pathname.startsWith("/buyer") ? "Switch to seller" : "Switch to buyer"}
                          </Link>
                          <div className="border-t border-gray-100 mt-2 pt-2">
                            <button
                              onClick={handleLogout}
                              className="flex items-center justify-center w-full px-6 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <Icon
                                icon="mdi:logout-variant"
                                className="w-5 h-5 mr-3 text-red-600"
                              />
                              Log Out
                            </button>
                          </div>
                        </>
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
