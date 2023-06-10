"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

type Props = {};

const PostCard = (props: Props) => {
  const [isLiked, setLiked] = useState(false);

  return (
    <Card className="w-[30rem] space-y-5 rounded-md border-muted bg-background">
      <CardContent>
        <AspectRatio className="mt-5" ratio={16 / 9}>
          <Image
            src="https://images.unsplash.com/photo-1561266311-e0e31ff8939d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <div className="flex flex-col">
          <span className="text-xl font-bold">Post Title</span>
          <span className="text-xs tracking-wide">March 31, 2022</span>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum.
          </p>
        </div>
      </CardContent>
      <CardFooter className="space-x-5">
        <div className="flex items-center space-x-1">
          <Icons.message className="h-5 w-5 text-gray-500" />
          <span>Comments</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icons.heart
            className={cn(
              "h-5 w-5 cursor-pointer text-gray-500",
              isLiked && "text-red-500"
            )}
            onClick={() => setLiked(!isLiked)}
          />
          <span>Like</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
