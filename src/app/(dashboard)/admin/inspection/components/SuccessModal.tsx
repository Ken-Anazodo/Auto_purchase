"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import ActionButton from "@/components/ActionButton";

interface BookingUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  state: string;
  city: string;
}

export interface BookingResponse {
  _id: string;
  user: BookingUser;
  noOfCars: string;
  schedule: string;
  availableTime: string;
  status: string;
  createdAt: string;
}

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: BookingResponse;
}

const DetailRow = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex items-start space-x-3">
    <Icon icon={icon} className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
    <div>
      <span className="text-sm font-medium text-gray-700">{label}: </span>
      <span className="text-sm text-gray-600">{value}</span>
    </div>
  </div>
);

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, booking }) => {
  const handleReturnToDashboard = () => {
    onClose();
    window.location.href = "/admin/inspection";
  };

  const formattedDate = new Date(booking.schedule).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const fullName = `${booking.user.firstName} ${booking.user.lastName}`;
  const fullAddress = `${booking.user.address}, ${booking.user.city}, ${booking.user.state}`;

  const statusColors: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-700",
    CONFIRMED: "bg-green-100 text-green-700",
    CANCELLED: "bg-red-100 text-red-700",
  };
  const statusClass = statusColors[booking.status] ?? "bg-gray-100 text-gray-700";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-2xl p-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="relative p-6 pb-0">
          <button
            onClick={onClose}
            className="absolute left-6 top-6 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5 text-gray-600" />
          </button>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 pb-6 pt-8 text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-autobuy-primary2.5 rounded-full flex items-center justify-center">
              <Icon icon="mdi:check" className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Title + status badge */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">
              Inspection Booked Successfully
            </h2>
            <p className="text-sm text-gray-600">
              You&apos;ll receive confirmation via email
            </p>
            <span
              className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${statusClass}`}
            >
              {booking.status}
            </span>
          </div>

          {/* Booking Details */}
          <div className="space-y-3 text-left bg-gray-50 border border-gray-200 rounded-xl p-4">
            <DetailRow icon="mdi:account" label="Name" value={fullName} />
            <DetailRow icon="mdi:email-outline" label="Email" value={booking.user.email} />
            <DetailRow icon="mdi:phone" label="Phone" value={booking.user.phoneNumber} />
            <DetailRow icon="mdi:car" label="No. of Cars" value={booking.noOfCars} />
            <DetailRow icon="mdi:calendar" label="Date" value={formattedDate} />
            <DetailRow icon="mdi:clock-outline" label="Time" value={booking.availableTime} />
            <DetailRow icon="mdi:map-marker-outline" label="Address" value={fullAddress} />
          </div>

          {/* Return Button */}
          <ActionButton
            onClick={handleReturnToDashboard}
            variant="primary"
            size="lg"
            fullWidth={true}
            rounded="xl"
            className="font-semibold bg-autobuy-primary2.5 text-white border-autobuy-blue-1 hover:bg-autobuy-blue-2 hover:border-autobuy-blue-2 focus:ring-autobuy-blue-2"
            customBg="bg-blue-500"
            customHover="hover:bg-blue-600"
          >
            Return to Inspections
          </ActionButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
