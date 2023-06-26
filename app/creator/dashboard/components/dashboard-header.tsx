"use client";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import ColorPicker from "./color-picker";
import DashboardMoreMenu from "./more-menu";
import ShareDialog from "./share-dialog";
import { useAuth } from "@/app/context/auth-context";
import Link from "next/link";
import { Label } from "@/components/ui/label";

type Props = {};

const DashboardHeader = (props: Props) => {
  const { currentUserPage } = useAuth();
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Avatar className="-mt-20 h-[100px] w-[100px]">
        <AvatarImage src={currentUserPage?.profileImage} />
        <AvatarFallback>{currentUserPage?.name[0]!}</AvatarFallback>
      </Avatar>
      <div className="flex w-full justify-between">
        <ColorPicker />
        <div className="space-x-3">
          <ShareDialog />
          <DashboardMoreMenu />
        </div>
      </div>
      <span className="mt-5 text-xl font-semibold">
        {currentUserPage?.name}
      </span>

      <Label className="mb-5 text-lg text-slate-500">
        {currentUserPage?.headline}
      </Label>
      <div className="my-5 flex space-x-4">
        <Link className="h-5 w-5" href="#">
          <Icons.twitter className="h-5 w-5" />
        </Link>
        <Link className="h-5 w-5" href="#">
          <Icons.instagram className="h-5 w-5" />
        </Link>
        <Link className="h-5 w-5" href="#">
          <Icons.youtube className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
