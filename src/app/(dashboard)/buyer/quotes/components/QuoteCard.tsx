import { Icon } from "@iconify/react";
import React from "react";
import Link from "next/link";
import { Vehicle } from "@/components/ProductCard";

interface QuoteCardProps {
    id: string;
    vehicle: Vehicle;
    quantity: number;
    dateRequested: string;
    status: "Pending" | "Quote Ready" | "Expired";
}

const QuoteCard: React.FC<QuoteCardProps> = ({ id, vehicle, quantity, dateRequested, status }) => {
    
    const getStatusStyle = (status: string) => {
        switch (status) {
            case "Pending":
                return "bg-[#FAF7DC] text-[#EFD80F] border border-[#EFD80F]";
            case "Quote Ready":
                return "bg-[#DCFADC] text-[#34B233] border border-[#80D67F]";
            case "Expired":
                return "bg-[#FAD7D7] text-[#E24848] border border-[#E24848]";
            default:
                return "bg-gray-50 text-gray-600";
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col md:flex-row gap-6 mb-6 hover:shadow-md shadow-sm transition-shadow">
            {/* Image */}
            <div className="w-full md:w-48 h-32 bg-gray-50 rounded-xl border border-gray-200 shrink-0 overflow-hidden">
                 <img 
                    src={vehicle.images[0] || "https://via.placeholder.com/400x300"} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between ">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium text-autobuy-neutral-1">{vehicle.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(status)}`}>
                        {status}
                    </span>
                </div>

                <div className="space-y-1 text-sm text-autobuy-neutral-2">
                <p  className="font-medium text-autobuy-neutral-2">Quantity Requested: <span className="font-medium text-autobuy-neutral-1">{quantity} units</span></p>
                <p  className="font-medium text-autobuy-neutral-2">Date Requested: <span className="font-medium text-autobuy-neutral-1">{dateRequested}</span></p>
                </div>

            {status !== "Pending" && (
                    <div className="flex justify-end">
                        <Link 
                            href={`/buyer/quotes/${id}`}
                            className="flex items-center gap-1 px-3 py-1.5 border border-autobuy-primary2.5 text-blue-600 rounded-[12px] italic text-sm font-medium hover:bg-blue-50 transition-colors"
                        >
                            View Quote
                            <Icon icon="heroicons:chevron-double-right" className="text-xs" />
                        </Link>
                    </div>
                )} 
            </div>
        </div>
    );
};

export default QuoteCard;
