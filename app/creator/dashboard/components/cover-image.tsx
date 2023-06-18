import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

type Props = {};

const CoverImage = (props: Props) => {
  return (
    <AspectRatio ratio={16 / 4}>
      <Image
        src="https://images.unsplash.com/photo-1608408843596-b3119736057c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80"
        alt="Cover image"
        fill={true}
        quality={100}
      />
    </AspectRatio>
  );
};

export default CoverImage;
