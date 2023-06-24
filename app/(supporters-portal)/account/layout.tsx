import "@/app/globals.css";
import { Metadata } from "next";

import { SidebarNav } from "@/components/sidebar-nav";
import { Icons } from "@/components/icons";
import { Suspense } from "react";
import Loading from "./loading";

const metadata: Metadata = {
  title: "My Page - Jegool",
  description: "",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const sidebarNavItems: {
  href: string;
  title: string;
  icon: keyof typeof Icons;
}[] = [
  {
    title: "Feed",
    href: "/account",
    icon: "home",
  },
  {
    title: "Find Creators",
    href: "/account/search",
    icon: "compass",
  },
  {
    title: "Memberships",
    href: "/account/memberships",
    icon: "box",
  },
  {
    title: "Messages",
    href: "/account/messages",
    icon: "mail",
  },
  {
    title: "Settings",
    href: "/account/settings",
    icon: "settings",
  },
];

export default function PageLayout({ children }: RootLayoutProps) {
  return (
    <div className="space-y-6">
      <div className="flex space-y-8 lg:space-y-0">
        <aside className="h-screen border-r-[1px] p-5 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="h-screen flex-1 overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}
