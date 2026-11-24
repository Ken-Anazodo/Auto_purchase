import React, { Suspense } from "react";
import EmptyLayout from "../components/EmptyLayout";
import VerifyOTPForm from "../components/VerifyotpForm";

const VerifyOTPContent = () => {
  return (
    <EmptyLayout>
      <VerifyOTPForm />
    </EmptyLayout>
  );
};

const page = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <VerifyOTPContent />
    </Suspense>
  );
};

export default page;
