import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

type Props = {
  membership: any;
};

const MembershipCard = ({ membership }: Props) => {
  return (
    <Card>
      <CardHeader>
        <AspectRatio ratio={16 / 4}>
          <Image src={membership.image} />
        </AspectRatio>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default MembershipCard;
