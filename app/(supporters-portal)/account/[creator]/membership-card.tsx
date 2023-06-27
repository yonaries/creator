"use client";

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
import { Membership } from "@/types/Membership";
import { useAuth } from "@/app/context/auth-context";
import { subscribeMembership } from "../actions/subscribe";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

type Props = {
  membership: Membership;
};

const MembershipCardSmall = ({ membership }: Props) => {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  async function onSubmit() {
    try {
      const checkout_url = await subscribeMembership(
        currentUser?.uid!,
        membership.id
      );
      router.push(checkout_url);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops! something went wrong.",
      });
    }
  }
  return (
    <Card className="w-1/3">
      <CardHeader>
        <AspectRatio ratio={16 / 4}>
          <Image
            alt="membership image"
            width={200}
            height={100}
            src={membership.coverImage!}
          />
        </AspectRatio>
        <CardTitle>{membership.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <span className="text-3xl">{membership.fee}</span>
        {membership.description}
      </CardContent>
      <CardFooter>
        <Button onClick={onSubmit} className="w-full">
          Join
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MembershipCardSmall;
