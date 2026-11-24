"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SellerPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/seller/dashboard");
  }, [router]);


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to dashboard...</p>
      </div>
    </div>
  );
};

export default SellerPage;
