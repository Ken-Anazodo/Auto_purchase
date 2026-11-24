import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface OrderCardProps {
  id: string;
  carName: string;
  price: string;
  status: "In-Transit" | "Processing" | "Delivered" | "Cancelled";
  fulfillment: string;
  payment: string;
  image?: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ id, carName, price, status, fulfillment, payment }) => {
  
  const getStatusColor = (status: string) => {
    switch (status) {
  case "In-Transit":
        return "bg-[linear-gradient(217.57deg,#FAFCFF_-138.48%,#BDD7FF_-47.17%,#0067FF_17.55%,#064199_74.19%)] text-white";
      case "Processing":
        return "bg-[linear-gradient(137.36deg,#F59E0B_16.23%,#E7A028_89.88%,#EBAC40_145.89%)] text-white";
      case "Delivered": return "bg-green-500 text-white";
      case "Cancelled": return "bg-red-500 text-white";
      default: return "bg-gray-200 text-gray-700";
    }
  };



  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row gap-6 mb-6 hover:shadow-sm transition-shadow">

      <div className="w-full md:w-64 h-40 bg-gray-50 overflow-hidden rounded-xl border border-gray-200 shrink-0">
        <Image
                src={
                  "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                }
                width={100}
                height={100}
                alt={carName}
                className="w-full h-full object-cover"
              />
        </div>

      <div className="flex-1">
         <div className="flex justify-between items-start mb-4">
             <h3 className="text-lg font-medium text-autobuy-neutral-1">{carName}</h3>
             <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
                 {status}
             </span>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-1 gap-y-2 text-sm text-autobuy-neutral-2 mb-6">
             <div>Order Id: <span className="text-autobuy-neutral-2">{id}</span></div>
             <div>Fulfillment: <span className="text-autobuy-neutral-2">{fulfillment}</span></div>
             <div>Payment: <span className="text-autobuy-neutral-2">{payment}</span></div>
         </div>

         <div className="flex justify-between items-end">
             <div className="text-xl font-medium text-autobuy-primary2.5">{price}</div>
             <Link 
                href={`/buyer/orders/${id}`}
                className="flex items-center gap-2 px-4 py-2 border border-autobuy-primary2.5 text-autobuy-primary2.5 rounded-[12px] text-sm font-medium italic hover:bg-autobuy-primary-2.5 transition-colors"
             >
                 Track my order
                 <Icon icon="heroicons:chevron-double-right" className="text-xs" />
             </Link>
         </div>
      </div>
    </div>
  );
};

export default OrderCard;
