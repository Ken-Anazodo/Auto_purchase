import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  text?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ text = "Back"}) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 text-autobuy-neutral-1 hover:text-gray-800 transition-colors group bg-white border border-autobuy-neutral-6 px-6 py-2 rounded-[12px]"
    >
      <Icon
        icon="mdi:arrow-left"
        className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
      />
      <span className="text-sm">{text}</span>
    </button>
  );
};

export default BackButton;
