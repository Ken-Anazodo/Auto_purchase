import React from "react";

interface Activity {
  id: string;
  message: string;
  timestamp: string;
  type: "views" | "upload" | "saved" | "status" | "listed";
}

const RecentActivities: React.FC = () => {
  const activities: Activity[] = [
    {
      id: "1",
      message: "Your Toyota Camry got 15 new views",
      timestamp: "~2 days ago",
      type: "views",
    },
    {
      id: "2",
      message: "Your Toyota Camry has been uploaded",
      timestamp: "~2 days ago",
      type: "upload",
    },
    {
      id: "3",
      message: "Honda Accord was saved by 3 new buyers",
      timestamp: "~2 days ago",
      type: "saved",
    },
    {
      id: "4",
      message: "You updated the status of Toyota Camry to sold",
      timestamp: "~2 days ago",
      type: "status",
    },
    {
      id: "5",
      message: "Toyota Camry is now live and listed",
      timestamp: "~5 days ago",
      type: "listed",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Activities
        </h2>
      </div>

      {/* Activities List */}
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
          >
            {/* Orange Dot Indicator */}
            <div className="flex-shrink-0 w-2.5 h-2.5 bg-autobuy-orange-1 rounded-full mt-2"></div>

            {/* Activity Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 leading-relaxed">
                {activity.message}
              </p>
              <p className="text-xs text-gray-500 mt-1 font-normal">
                {activity.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="flex justify-end mt-6 pt-4 border-t border-gray-100">
        <button className="text-blue-600 italic hover:text-blue-700 text-sm font-medium transition-colors">
          [View all Activities]
        </button>
      </div>
    </div>
  );
};

export default RecentActivities;
