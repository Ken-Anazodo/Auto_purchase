"use client";

import { Icon } from "@iconify/react";
import React, { useRef } from "react";
import Link from "next/link";
import DashboardStatCard from "./components/DashboardStatCard";
import ProductCard, { Vehicle } from "@/components/ProductCard";
import ActiveOrderRow from "./components/ActiveOrderRow";
import { useRouter } from "next/navigation";

const BuyerDashboard = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === "left"
          ? sliderRef.current.scrollLeft - scrollAmount
          : sliderRef.current.scrollLeft + scrollAmount;

      sliderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const stats = [
    {
      label: "Total Orders",
      count: 3,
      linkText: "Number of ordered vehicles",
      href: "/buyer/orders",
      icon: "mynaui:clipboard",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
    },
    {
      label: "Completed Orders",
      count: 3,
      linkText: "Number of successful purchased",
      href: "/buyer/orders?tab=completed",
      icon: "heroicons:check-circle",
      iconColor: "text-green-600",
      iconBg: "bg-green-50",
    },
    {
      label: "Active Orders",
      count: 3,
      linkText: "Track your purchase progress",
      href: "/buyer/orders",
      icon: "heroicons:clock",
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-50",
    },
    {
      label: "Garage",
      count: 3,
      linkText: "Your saved and ready to purchase",
      href: "/buyer/garage",
      icon: "streamline-ultimate:car-3",
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
    },
  ];

  // Mock Data for Recommended Cars
  const recommendedCars: Vehicle[] = [
    {
      id: 1,
      name: "Toyota Camry 2025",
      price: "₦45,000,000",
      isNegotiable: true,
      images: [
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww",
      ],
      specs: {
        mileage: "45,000km",
        transmission: "Automatic",
        fuel: "Fuel",
        location: "Lagos, Nigeria",
      },
      services: [],
      isVerified: true,
    },
    {
      id: 2,
      name: "Toyota Camry 2025",
      price: "₦45,000,000",
      isNegotiable: true,
      images: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww",
      ],
      specs: {
        mileage: "45,000km",
        transmission: "Automatic",
        fuel: "Fuel",
        location: "Lagos, Nigeria",
      },
      services: [],
      isVerified: true,
    },
    {
      id: 3,
      name: "Toyota Camry 2025",
      price: "₦45,000,000",
      isNegotiable: true,
      images: [
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww",
      ],
      specs: {
        mileage: "45,000km",
        transmission: "Automatic",
        fuel: "Fuel",
        location: "Lagos, Nigeria",
      },
      services: [],
      isVerified: true,
    },
    {
      id: 4,
      name: "Toyota Camry 2025",
      price: "₦45,000,000",
      isNegotiable: true,
      images: [
        "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      ],
      specs: {
        mileage: "45,000km",
        transmission: "Automatic",
        fuel: "Fuel",
        location: "Lagos, Nigeria",
      },
      services: [],
      isVerified: true,
    },
  ];

  // Mock Data for Active Orders
  const activeOrders = [
    {
      id: "ORD1234567891012",
      carName: "Toyota Camry 2025",
      price: "₦45,000,000",
      date: "10/12/2025",
      status: "In-Transit" as const,
    },
    {
      id: "ORD1234567891012",
      carName: "Toyota Camry 2025",
      price: "₦45,000,000",
      date: "10/12/2025",
      status: "Processing" as const,
    },
  ];

  const router = useRouter()

  return (
    <div className="min-h-screen space-y-10 pb-10">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-xl font-medium text-autobuy-neutral-1 mb-1">
            Welcome back, Ogechi
          </h1>
          <p className="text-sm text-autobuy-neutral-2">
            Find your next car, track your orders, and manage your saved
            vehicles all in one place.
          </p>
        </div>
        <button onClick={()=> router.push('/seller/dashboard')} className="flex items-center justify-center gap-2 px-5 py-3 text-white rounded-[12px] font-medium hover:bg-blue-700 transition-colors shadow-sm bg-[linear-gradient(217.57deg,#FAFCFF_-138.48%,#BDD7FF_-47.17%,#0067FF_17.55%,#064199_74.19%)]">
          Sell Your Car
          <Icon icon="heroicons:chevron-double-right" className="text-lg" />
        </button>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <DashboardStatCard key={idx} {...stat} />
        ))}
      </section>

      {/* Recommended for You */}
      <section>
        <div className="flex items-center justify-between mb-6 ">
          <div>
            <h2 className="text-xl font-medium text-autobuy-neutral-1">
              Recommended For You
            </h2>
            <p className="text-sm text-autobuy-neutral-2">
              Cars tailored to your interests and recent activity
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollSlider("left")}
              className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Icon icon="heroicons:arrow-left" />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Icon icon="heroicons:arrow-right" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 py-5 overflow-x-auto scroll-smooth scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {recommendedCars.map((car) => (
            <div key={car.id} className="min-w-[320px] md:min-w-[380px]">
              <ProductCard vehicle={car} />
            </div>
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* My Active Orders */}
      <section className="bg-white rounded-2xl border border-gray-100 md:p-8 p-3 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-autobuy-neutral-1">
            My Active Orders
          </h2>
          <Link
            href="/buyer/orders"
            className="flex items-center italic gap-1 text-base font-medium text-autobuy-primary2.5 hover:text-autobuy-blue-1"
          >
            View all
            <Icon icon="heroicons:chevron-double-right" className="text-xs" />
          </Link>
        </div>

        <div>
          {activeOrders.map((order, idx) => (
            <ActiveOrderRow key={idx} {...order} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BuyerDashboard;
