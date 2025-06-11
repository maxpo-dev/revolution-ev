import ThankYou from "@/components/ui/thankyou";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
};

export default page;
