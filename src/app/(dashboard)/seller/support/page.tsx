import React from "react";
import SupportHeader from "./components/SupportHeader";
import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";

const page = () => {
  return (
    <div className="space-y-10">
      <SupportHeader />

      <section className="md:grid grid-cols-5 gap-10 space-y-10">
        
        <figure className=" col-span-3">
          <ContactForm />
        </figure>

        <figure className=" col-span-2">
          <ContactDetails />
        </figure>

      </section>
    </div>
  );
};

export default page;
