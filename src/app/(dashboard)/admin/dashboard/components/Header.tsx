"use client";
import React from "react";
import StatsCard from "@/components/ui/StatsCard";
import { Button } from "@/components/ui/button"; // Assuming standard Shadcn button or similar
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const statsData = [
    {
      id: 1,
      title: "Total Users",
      value: "4000",
      description: (
        <span className="flex items-center font[600] gap-1 text-[8px] font-normal">
          <span className="text-[#0A6DFF]">Buyers: 2000</span>
          <span className="text-[#EF693E]">•</span>
          <span className="text-[#EF693E]">Sellers: 2000</span>
        </span>
      ),
      icon: "hugeicons:user-group-02",
      bgColor: "bg-white border border-gray-100",
      iconBgColor: "bg-autobuy-orange-1 bg-opacity-10",
      textColor: "text-[#333333]",
      iconColor: "text-autobuy-orange-base",
    },
    {
      id: 2,
      title: "Total Active Listings",
      value: "1000",
      description: (
         <span className="text-[8px] text-[#0A6DFF] font-normal">
          All vehicles currently listed on the platform
        </span>
      ),
      icon: "hugeicons:car-02",
      bgColor: "bg-white border border-gray-100",
      iconBgColor: "bg-autobuy-orange-1 bg-opacity-10",
      textColor: "text-[#333333]",
      iconColor: "text-autobuy-orange-base",
    },
    {
      id: 3,
      title: "Total Vehicle Inspected",
      value: "1000",
      description: (
        <span className="text-[8px] text-[#0A6DFF] font-normal">
         Total Inspected Vehicles
       </span>
     ),
      icon: "hugeicons:check-list",
      bgColor: "bg-white border border-gray-100",
      iconBgColor: "bg-autobuy-orange-1 bg-opacity-10",
      textColor: "text-[#333333]",
      iconColor: "text-autobuy-orange-base",
    },
    {
      id: 4,
      title: "Total Sales",
      value: "₦5,000,000.00",
      description: (
         <span className="text-[8px] text-[#0A6DFF] font-normal">
          Total value of completed transactions.
        </span>
      ),
      icon: "hugeicons:money-bag-02",
      bgColor: "bg-white border border-gray-100",
      iconBgColor: "bg-autobuy-orange-1 bg-opacity-10",
      textColor: "text-[#333333]",
      iconColor: "text-autobuy-orange-base",
    },
     {
      id: 5,
      title: "Total Vehicle Sold",
      value: "1000",
      description: (
         <span className="text-[8px] text-[#0A6DFF] font-normal">
          Total Sold Vehicles
        </span>
      ),
      icon: "hugeicons:car-03", // Different car icon
      bgColor: "bg-white border border-gray-100",
      iconBgColor: "bg-autobuy-orange-1 bg-opacity-10",
      textColor: "text-[#333333]",
      iconColor: "text-autobuy-orange-base",
    },
    {
      id: 6,
      title: "Road to Sales",
      value: "1000",
      description: (
         <span className="text-[8px] text-[#0A6DFF] font-normal">
          People who showed interested in listings
        </span>
      ),
      icon: "hugeicons:document-attachment",
      bgColor: "bg-white border border-gray-100",
      iconBgColor: "bg-autobuy-orange-1 bg-opacity-10",
      textColor: "text-[#333333]",
      iconColor: "text-autobuy-orange-base",
    },
  ];


    const handleBookInspection = () => {
    router.push(`/admin/inspection`);
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-[18px] font-[500] text-[#1A1A1A]">
          Welcome Back, Mr Abiodun
        </h1>
        <p className="text-[#6B6B6B] text-[14px] mt-1">
          Here what’s happening on the platform today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((stat) => (
          <StatsCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
            bgColor={stat.bgColor}
            iconBgColor={stat.iconBgColor}
            textColor={stat.textColor}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

       {/* Action Buttons */}
       <div className="flex flex-wrap justify-end gap-4 mt-8">
        <Button className="bg-autobuy-primary2.5 hover:bg-autobuy-primary2.5/80 text-white rounded-lg h-11 px-6 font-medium">
          Upload a Vehicle
        </Button>
        <Button onClick={()=>handleBookInspection()} variant="outline" className="border-autobuy-primary2.5 text-autobuy-primary2.5 hover:bg-autobuy-primary2.5/10 rounded-lg h-11 px-6 font-medium">
          Book an Inspection
        </Button>
         <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg h-11 px-6 font-medium flex items-center gap-2">
           <Icon icon="mdi:plus" className="w-5 h-5" />
          Add New Admin
        </Button>
      </div>
    </div>
  );
};

export default Header;
