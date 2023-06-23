"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Membership } from "@/types/Membership";
import Image from "next/image";
import { useState } from "react";

type Props = {
  membership: Membership;
};

export default function MembershipCard({ membership }: Props) {
  const [showMore, setShowMore] = useState(false);
  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="border p-0">
        <div className="flex gap-3">
          <Image
            width={600}
            height={300}
            src={membership.coverImage || ""}
            alt={membership.coverImage || ""}
            className="aspect-auto w-64"
          />
          <div className="flex-1 p-4">
            <CardTitle className="text-xl">{membership.title}</CardTitle>
            <CardTitle className="text-base">
              {membership.fee} Birr / month
            </CardTitle>
            <CardDescription className="text-sm">
              {membership.description}
            </CardDescription>
          </div>
        </div>
        {membership.Benefit.length > 0 && (
          <div className="flex w-full flex-col items-start px-4">
            <Separator />
            {showMore && (
              <div className="flex w-full flex-col justify-start px-8 py-4 transition">
                <Label className="text-base font-bold">{`What's included`}</Label>
                <ul className="flex w-full list-disc flex-col gap-1 text-sm">
                  {membership.Benefit.map((benefit, index) => (
                    <li key={`${benefit.id}`}>
                      <Label>{membership.title}</Label>
                      <CardDescription>{benefit.description}</CardDescription>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button
              variant="link"
              className=" p-0 font-bold capitalize text-blue-500"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "show less" : "show more"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
