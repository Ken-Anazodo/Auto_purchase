"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import OrderTimeline from "../components/OrderTimeline";
import BackButton from "@/components/BackButton";
import Image from "next/image";

const OrderDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams();


  
  const isHomeDelivery = true; 

  const timelineSteps = isHomeDelivery ? [
      { label: "Order Placed", date: "11/10/2025", status: "completed" as const },
      { label: "Order Processing", date: "11/10/2025", status: "completed" as const },
      { label: "Order In-Transit", date: "11/10/2025", status: "current" as const, subLabel: "Current Status" },
      { label: "Delivered", date: "11/10/2025", status: "pending" as const, expected: true },
  ] : [
      { label: "Order Placed", date: "11/10/2025", status: "completed" as const },
      { label: "Order Processing", date: "11/10/2025", status: "completed" as const },
      { label: "Ready For Pick-Up", date: "11/10/2025", status: "current" as const, subLabel: "Current Status" },
      { label: "Delivered", date: "11/10/2025", status: "pending" as const, expected: true },
  ];

  return (
    <div className="min-h-screen">
      <div className="mb-6">
       <BackButton/>
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
           <h1 className="text-xl font-medium text-autobuy-neutral-1">My Orders</h1>
      </div>


      {/* Main Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm  mx-auto">
           <h2 className="text-xl font-medium text-autobuy-neutral-1 mb-2">Order Details</h2>
           <p className="text-sm text-autobuy-neutral-2 mb-8">Track and manage all your car purchase</p>

           <div className="flex flex-col md:flex-row gap-8 mb-12">

               <div className="w-full md:w-80 h-56 bg-gray-50 overflow-hidden rounded-[12px] border border-gray-200 shrink-0">
                 <Image
                    src={
                        "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    width={100}
                    height={100}
                    alt={'car'}
                    className="w-full h-full object-cover"
                    />
               </div>

               <div className="flex-1 space-y-6">
                   <div>
                        <h3 className="text-xl font-medium text-autobuy-neutral-1">Toyota Camry 2018</h3>
                        <p className="text-sm text-autobuy-neutral-2 mt-1">Order Id: {id ? id : '10124578963214'}</p>
                   </div>
                   
                   <div className="text-2xl font-medium text-autobuy-primary2.5">₦45,000,000</div>

                   <div className="grid grid-cols-3 gap-8">
                       <div>
                           <div className="text-sm text-autobuy-neutral-2 mb-1">Order Date</div>
                           <div className="font-medium text-autobuy-neutral-1">11/12/2025</div>
                       </div>
                       <div>
                           <div className="text-sm text-autobuy-neutral-2 mb-1">Fulfillment</div>
                           <div className="font-medium text-autobuy-neutral-1">{isHomeDelivery ? 'Home Delivery' : 'Pick Up at Lot'}</div>
                       </div>
                       <div>
                           <div className="text-sm text-autobuy-neutral-2 mb-1">Payment</div>
                           <div className="font-medium text-autobuy-neutral-1">{isHomeDelivery ? 'Online' : 'Pay At Lot'}</div>
                       </div>
                   </div>
               </div>
           </div>

           <div className="border-t border-gray-100 pt-8">
               <div className="flex items-center gap-2 mb-6 text-autobuy-neutral-1 font-medium">
                   <Icon icon="heroicons:truck" className="text-xl" />
                   Delivery Timeline
               </div>
               
               <OrderTimeline steps={timelineSteps} />
           </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
