"use client";

import BackButton from "@/components/BackButton";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import BulkPurchase from "./components/BulkPurchase";

const BulkPage = () => {
  return (
    <div className="space-y-5">
      <Navbar />
      <header className="container spacing ">
        <BackButton />
      </header>

      <main>
        <BulkPurchase />
      </main>

      <Footer />
    </div>
  );
};
   

export default BulkPage;
