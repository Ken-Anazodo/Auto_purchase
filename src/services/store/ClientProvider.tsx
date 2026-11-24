"use client";

import store from "@/services/store/store";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

// import "aos/dist/aos.css";
// import AOS from "aos";

function ClientProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     easing: "ease-in-out",
  //     once: false,
  //     mirror: false,
  //     offset: 120,
  //     delay: 0,
  //   });
  // }, []);

  return (
    <>
      <Provider store={store}>{children}</Provider>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default ClientProvider;
