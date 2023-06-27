import React from "react";
import Link from "next/link";
type Props = {};

const Success = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <span className="text-3xl">Your payment is succeed</span>
      <Link href="/account">Go back to Home</Link>
    </div>
  );
};

export default Success;
