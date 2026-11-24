import Image from "next/image";
import Link from "next/link";
import React from "react";

const BackgroundLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <section className="wrapper w-full flex flex-row h-screen relative">
      <main className="absolute inset-0 flex items-center justify-center z-10">
        {children}
      </main>

      <aside className="bg-autobuy-blue-5 w-3/5 h-full p-10">
        <Link className=" cursor-pointer relative z-20 cursor-pointer" href={"/"}>
          <Image src={"/logo/logo.svg"} width={180} height={60} alt="logo" />
        </Link>
      </aside>
      <aside className="bg-white w-2/5 h-full"></aside>
    </section>
  );
};

export default BackgroundLayout;
