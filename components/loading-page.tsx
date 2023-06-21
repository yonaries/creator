import React from "react";
import { Icons } from "./icons";

const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10">
      <Icons.spinner className="mr-2 h-10 w-10 animate-spin text-slate-400" />
      <span className="animate-pulse">
        Empowering your creativity, one supporter at a time.
      </span>
    </div>
  );
};

export default Loading;
