"use client";

import React from "react";
import NotificationItem from "./NotificationItem";

const NotificationsList = () => {
  // Mock Data
  const sections = [
    {
      date: "November 12, 2025",
      items: [
        {
          id: 1,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: true,
        },
        {
          id: 2,
          title: "New Vehicle Listed",
          description: 'Vehicle "Toyota Camry 2018" has been listed.',
          time: "2hrs ago",
          isUnread: true,
        },
        {
          id: 3,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: false,
        },
      ],
    },
    {
      date: "November 16, 2025",
      items: [
         {
          id: 4,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: false,
        },
        {
          id: 5,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: false,
        },
        {
          id: 6,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: false,
        },
         {
          id: 7,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: false,
        },
         {
          id: 8,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: false,
        },
        {
          id: 9,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: false,
        },
      ],
    },
     {
      date: "November 16, 2025", // Keeping duplicate date as per image mock, or maybe it was a mistake in my reading? It shows Nov 16 again. I'll stick to unique dates or just follow the mock. The mock effectively shows groups.
      items: [
         {
          id: 10,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: false,
        },
        {
          id: 11,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: false,
        },
        {
          id: 12,
          title: "New Seller Registered",
          description: 'Seller "Oluwafemi Motors" just created an account.',
          time: "2hrs ago",
          isUnread: false,
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-[14px] font-[500] text-[#1A1A1A] mb-4">
            {section.date}
          </h3>
          <div className="flex flex-col gap-2">
            {section.items.map((item) => (
              <NotificationItem
                key={item.id}
                title={item.title}
                description={item.description}
                time={item.time}
                isUnread={item.isUnread}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsList;
