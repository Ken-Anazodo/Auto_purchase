import React from "react";
import BackgroundLayout from "../components/BackgroundLayout";
import LoginForm from "@/app/auth/components/LoginForm";

const page = () => {
  return (
    <>
      <BackgroundLayout>
        <main className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-[500px] space-y-8">
          <header>
            <h1 className="text-autobuy-blue-2 text-2xl font-medium">
              Welcome Back!
            </h1>
            <p className="text-autobuy-neutral-1 text-base">
              Your trusted gateway to hassle-free car transactions
            </p>
          </header>

          <LoginForm />
        </main>
      </BackgroundLayout>
    </>
  );
};

export default page;
