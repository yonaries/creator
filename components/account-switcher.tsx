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
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/config/firebase";
import { useAuth } from "@/app/context/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function AccountSwitcher() {
  const [selectedAccount, setSelectedAccount] = useState<number>(0);
  const { setTheme } = useTheme();
  const { currentUser } = useAuth();

  const accounts = [
    {
      name: currentUser?.displayName!,
      role: "supporter",
      avatar: currentUser?.photoURL!,
    },
  ];
  return (
    <div className="space-y-2">
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
          <Button className="w-full">Start Your Journey</Button>
        </CardContent>
      </Card>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={accounts[selectedAccount].avatar} />
                <AvatarFallback>
                  {accounts[selectedAccount].name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-clip text-sm font-medium text-gray-900 dark:text-gray-100">
                  {accounts[selectedAccount].name}
                </span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {accounts[selectedAccount].role}
                </span>
              </div>
            </div>
            <Icons.upDown className="h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuLabel>My Accounts</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {accounts.map((account, index) => (
            <DropdownMenuItem
              key={index * Date.now()}
              onClick={() => setSelectedAccount(index)}
            >
              <div className="flex items-center justify-between space-x-14 md:w-full lg:w-[13rem]">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={account.avatar} />
                    <AvatarFallback>{account.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {account.name}
                    </span>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      {account.role}
                    </span>
                  </div>
                </div>
                {index === selectedAccount && (
                  <Icons.check className="h-4 w-4" />
                )}
              </div>
            </DropdownMenuItem>
          ))}
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
  );
}
