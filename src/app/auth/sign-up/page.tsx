import React from "react";
import BackgroundLayout from "../components/BackgroundLayout";
import SignUpForm from "@/app/auth/components/SignUpForm";

const page = () => {
  return (
    <>
      <BackgroundLayout>
        <main className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-[500px] space-y-8">
          <h1 className="text-autobuy-blue-2 text-2xl font-medium">
            Create Your Account
          </h1>

          <SignUpForm />
        </main>
      </BackgroundLayout>
    </>
  );
};

export default page;
