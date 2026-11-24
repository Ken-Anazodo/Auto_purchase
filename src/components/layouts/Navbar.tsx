"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const pathname = usePathname();

  // Navigation links configuration
  const mainNavLinks = [
    { href: "/browse-cars", label: "Browse Cars" },
    { href: "/sell-your-car", label: "Sell Your Car" },
    { href: "/procurement", label: "Procurement" },
  ];

  const authenticatedNavLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/profile", label: "Profile" },
  ];

  const userMenuLinks = [
    { href: "/profile", label: "Profile" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 spacing">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={"/logo/logo.svg"}
                width={150}
                height={50}
                alt="logo"
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 bg-[#EDF4FF] text-autobuy-primary2.5 rounded-full size-10 transition-colors relative">
              <Icon
                icon="streamline-ultimate:car-3"
                width="1.2em"
                height="1.2em"
                className="h-6 w-6"
              />

              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 text-autobuy-neutral-1 hover:text-blue-600 transition-colors"
                >
                  <UserCircleIcon className="w-8 h-8" />
                  <span className="text-sm font-medium">John Doe</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform ${
                      showUserMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {userMenuLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-autobuy-neutral-1 text-base hover:bg-gray-50"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <hr className="my-1" />
                    <button
                      onClick={() => setIsAuthenticated(false)}
                      className="block w-full text-left px-4 py-2 text-autobuy-neutral-1 text-basehover:bg-gray-50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button
                    variant="ghost"
                    className=" text-base font-medium text-autobuy-neutral-1"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button
                    className=" text-base font-medium bg-autobuy-primary2.5 text-white rounded-[12px] hover:bg-blue-700 py-6 px-6"
                    style={{
                      boxShadow:
                        "1px 1px 8px 0px #061F4526 inset, -1px -1px 8px 0px #061F4526 inset, 0px 1px 6px 0px #00000014",
                    }}
                  >
                    Create Account
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Image
                src={"/logo/logo.svg"}
                width={120}
                height={40}
                alt="logo"
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* User Section (if authenticated) */}
          {isAuthenticated && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-12 h-12 text-blue-600" />
                <div>
                  <p className="font-medium text-autobuy-neutral-1 text-base">
                    John Doe
                  </p>
                  <p className="text-sm text-autobuy-neutral-1">
                    john@example.com
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Navigation Links */}
          <div className="space-y-3 mb-4">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-base font-medium transition-colors py-3 border-b border-gray-100 ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-autobuy-neutral-1 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Authenticated user links */}
            {isAuthenticated && (
              <>
                {authenticatedNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-autobuy-neutral-1 text-base hover:text-blue-600 font-medium transition-colors py-3 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            )}
          </div>

          {/* Mobile Notifications */}
          <div className="mb-8">
            <button className="flex items-center space-x-2 w-full text-autobuy-neutral-1 hover:text-blue-600 transition-colors py-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <Icon
                  icon="streamline-ultimate:car-3"
                  width="1.2em"
                  height="1.2em"
                  className="h-6 w-6"
                />
                <span className="font-medium">Garage</span>
              </div>
              <span className="bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Mobile Auth Section */}
          <div className="mt-auto">
            {isAuthenticated ? (
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  onClick={() => {
                    setIsAuthenticated(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <Link href="/auth/login" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/auth/sign-up" className="block">
                  <Button
                    className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Create Account
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Demo Toggle for Testing */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={() => setIsAuthenticated(!isAuthenticated)}
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              Toggle Auth State (Demo)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
