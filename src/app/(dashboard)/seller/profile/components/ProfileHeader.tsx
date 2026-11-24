import React from "react";
import { Icon } from "@iconify/react";

interface User {
  name: string;
  email: string;
  sellerSince: string;
  avatar: string;
}

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  const handleBackToHome = () => {
    // Navigate back to home/dashboard
    window.history.back();
  };

  return (
    <div className="  ">
      {/* Back to Home */}
      <header className="flex items-center justify-between py-5">
        <button
          onClick={handleBackToHome}
          className="flex items-center gap-2 text-autobuy-neutral-1 hover:text-gray-800 transition-colors group bg-white border border-autobuy-neutral-6 px-6 py-3 rounded-2xl"
        >
          <Icon
            icon="mdi:arrow-left"
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
          />
          <span className="text-sm  ">Back to Home</span>
        </button>

        <div className="text-center  mx-auto">
          <h2 className="text-xl font-semibold text-gray-900">
            Profile Overview
          </h2>
        </div>
      </header>

      {/* Header Content */}
      <div className="sm:flex items-center justify-between bg-[#F5F9FF] rounded-xl border space-y-5 sm:space-y-0 p-6">
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className=" size-[117px] bg-[#FEF2EC] rounded-full flex items-center text-6xl justify-center text-autobuy-primary2.5  font-medium">
            {user.avatar}
          </div>

          {/* User Info */}
          <div>
            <h1 className="text-2xl font-medium text-autobuy-neutral-2 mb-1">
              {user.name}
            </h1>
            <p className="text-autobuy-neutral-2 text-base mb-1">
              {user.email}
            </p>
            <p className="text-autobuy-neutral-2 text-base">
              Seller since: {user.sellerSince}
            </p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="flex items-center space-x-2 bg-orange-50 border border-orange-500 text-orange-500 hover:bg-orange-100 px-4 py-2 rounded-[33px] transition-colors font-medium text-sm">
          <Icon icon="lucide:user-pen" className="w-4 h-4" />
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
