import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="space-y-5">
      <div className="mx-auto my-6 h-96 w-11/12 max-w-2xl animate-pulse rounded-md bg-muted"></div>
      <div className="mx-auto my-6 h-96 w-11/12 max-w-2xl animate-pulse rounded-md bg-muted"></div>
      <div className="mx-auto my-6 h-96 w-11/12 max-w-2xl animate-pulse rounded-md bg-muted"></div>
      <div className="mx-auto my-6 h-96 w-11/12 max-w-2xl animate-pulse rounded-md bg-muted"></div>
    </div>
  );
};

export default Loading;
