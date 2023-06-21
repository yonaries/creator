"use client";

import { Icons } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/config/firebase";
import { useAuth } from "@/app/context/auth-context";
import { usePathname } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

type Account = {
  name: string;
  role: string;
  avatar: string;
};
export default function AccountSwitcher() {
  const { setTheme } = useTheme();
  const { currentUser, currentUserPage } = useAuth();

  const pathname = usePathname();

  return (
    <Suspense fallback={<Loading />}>
      <div className="space-y-3">
        {!currentUserPage && (
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-sm">Become a Creator</CardTitle>
              <CardDescription>
                <span className="text-xs">
                  Setup your profile and reach your true fans.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Start Your Journey
              </Button>
            </CardContent>
          </Card>
        )}

        <DropdownMenu>
          {pathname.includes("creator") ? (
            <DropdownMenuTrigger asChild>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={currentUserPage?.profileImage!} />
                    <AvatarFallback>{currentUserPage?.name!}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-clip text-sm font-medium text-gray-900 dark:text-gray-100">
                      {currentUserPage?.name!}
                    </span>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      creator
                    </span>
                  </div>
                </div>
                <Icons.upDown className="h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
          ) : (
            <DropdownMenuTrigger asChild>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={currentUser?.photoURL!} />
                    <AvatarFallback>
                      {currentUser?.displayName![0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-clip text-sm font-medium text-gray-900 dark:text-gray-100">
                      {currentUser?.displayName!}
                    </span>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      supporter
                    </span>
                  </div>
                </div>
                <Icons.upDown className="h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
          )}
          <DropdownMenuContent className="w-full">
            <DropdownMenuLabel>My Accounts</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center justify-between space-x-14 md:w-full lg:w-[13rem]">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={currentUser?.photoURL!} />
                    <AvatarFallback>
                      {currentUser?.displayName![0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {currentUser?.displayName!}
                    </span>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      supporter
                    </span>
                  </div>
                </div>
                {!pathname.includes("creator") && (
                  <Icons.check className="h-4 w-4" />
                )}
              </div>
            </DropdownMenuItem>
            {currentUserPage && (
              <DropdownMenuItem>
                <div className="flex items-center justify-between space-x-14 md:w-full lg:w-[13rem]">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={currentUserPage?.profileImage!} />
                      <AvatarFallback>
                        {currentUserPage?.name![0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {currentUserPage?.name!}
                      </span>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        creator
                      </span>
                    </div>
                  </div>
                  {pathname.includes("creator") && (
                    <Icons.check className="h-4 w-4" />
                  )}
                </div>
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Theme</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Icons.sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Icons.moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    <Icons.laptop className="mr-2 h-4 w-4" />
                    <span>System</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <Link href="/creator-resources">
              <DropdownMenuItem>
                <span>Creator resources</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/help-support">
              <DropdownMenuItem>
                <span>Help and Support</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/privacy-policies">
              <DropdownMenuItem>
                <span>Privacy & Policies</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href="/">
              <DropdownMenuItem
                onClick={() => auth.signOut()}
                className="h-10 justify-between"
              >
                <span>Logout</span>
                <Icons.logOut className="ml-2 h-4 w-4" />
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Suspense>
  );
}

const Loading = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarFallback className="animate-pulse"></AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="h-4 w-20 animate-pulse bg-muted"></div>
        <div className="h-4 w-10 animate-pulse bg-muted"></div>
      </div>
    </div>
  </div>
);
