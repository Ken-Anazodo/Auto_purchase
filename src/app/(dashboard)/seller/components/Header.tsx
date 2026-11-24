import React from "react";
import StatsCard from "@/components/ui/StatsCard";

const Header = () => {
  const statsData = [
    {
      id: 1,
      title: "Revenue",
      value: "₦5,000,000.00",
      description: "vs last month",
      icon: "stash:chart-trend-up-light",
      bgColor: "bg-[#FF8C42]",
      trend: {
        value: "+12.4",
        isPositive: true,
      },
    },
    {
      id: 2,
      title: "Cars Listed",
      value: "5",
      description: "Cars currently visible to buyers",
      icon: "hugeicons:car-01",
      bgColor: "bg-autobuy-blue-2",
    },
    {
      id: 3,
      title: "Cars Sold",
      value: "2",
      description: "Successful sales, congrats!",
      icon: "streamline-ultimate:car-actions-check-1",
      bgColor: "bg-[#1CB084]",
    },
    {
      id: 4,
      title: "Road to Sale",
      value: "12",
      description: "people interested in your listings",
      icon: "lsicon:order-edit-outline",
      bgColor: "bg-autobuy-orange-2",
    },
    {
      id: 5,
      title: "Total Views",
      value: "2550",
      description: "+100 new views this week",
      icon: "mdi:eye",
      bgColor: "bg-[#5297FF]",
      trend: {
        value: "+12.4",
        isPositive: true,
      },
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg text-autobuy-neutral-1 font-semibold">
          Welcome Back!
        </h1>
        <p className="text-base text-autobuy-neutral-2">
          Here&apos;s a quick look at your performance and listings
        </p>
      </div>

      {/* Stats Cards Section */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4 overflow-x-auto h-fit ">
        {statsData.map((stat) => (
          <StatsCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
            bgColor={stat.bgColor}
            trend={stat.trend}
          />
        ))}
      </section>
    </div>
  );
};

export default Header;
