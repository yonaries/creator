import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup } from "@/components/ui/radio-group";

import { Icons } from "@/components/icons";
import Image from "next/image";

type Props = {};

const ShareDialog = (props: Props) => {
  const socials = [
    "instagram",
    "facebook",
    "snapchat",
    "linkedin",
    "telegram",
    "twitter",
    "discord",
    "messenger",
    "whatsapp",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Icons.share className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
          <DialogDescription>
            Share your page with the world and let them know about your
            creativity.
          </DialogDescription>
        </DialogHeader>
        <RadioGroup className="grid grid-cols-5 gap-2">
          {socials.map((link, index) => (
            <div
              key={index}
              className="h-fit w-fit rounded-md p-2 hover:bg-muted"
            >
              <Image
                src={`/images/logos/${link}.png`}
                width={50}
                height={50}
                alt={link}
              />
            </div>
          ))}
        </RadioGroup>
        <DialogFooter>
          <div className="h-10 w-full flex-1 rounded-md bg-muted px-4 py-2 text-popover-foreground">
            <span>http://jegool.com/creators-name</span>
          </div>
          <RadioGroup>
            <Button>
              <Icons.copy className="mr-2 h-4 w-4" />
              Copy link
            </Button>
          </RadioGroup>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
