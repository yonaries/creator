import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const Messages = (props: Props) => {
  return (
    <div>
      <span className="text-3xl font-bold">Messages</span>
      <Separator className="my-3" />
    </div>
  );
};

export default Messages;
