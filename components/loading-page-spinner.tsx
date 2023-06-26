import React from "react";
import { Icons } from "./icons";

const LoadingSpinner = () => {
  return (
    <div className="h-128 flex flex-col items-center justify-center space-y-10">
      <Icons.spinner className="mr-2 h-10 w-10 animate-spin text-slate-400" />
    </div>
  );
};

export default LoadingSpinner;
