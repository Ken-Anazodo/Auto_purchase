import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="wrapper w-full flex flex-col p-10 h-screen relative">
      <Link href={"/"} className=" cursor-pointer">
        <Image src={"/logo/logo.svg"} width={180} height={60} alt="logo" />
      </Link>
      <main className="absolute inset-0 flex items-center justify-center z-10">
        {children}
      </main>
    </section>
  );
};

export default EmptyLayout;
