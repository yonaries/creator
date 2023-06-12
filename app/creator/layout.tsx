import "@/app/globals.css";
import { Metadata } from "next";

import { SidebarNav } from "@/components/sidebar-nav";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";

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
    title: "My Page",
    href: "/creator",
    icon: "home",
  },
  {
    title: "Supporters",
    href: "/creator/supporters",
    icon: "heart",
  },
  {
    title: "Memberships",
    href: "/creator/memberships",
    icon: "box",
  },
  {
    title: "Messages",
    href: "/creator/messages",
    icon: "mail",
  },
  {
    title: "Notifications",
    href: "/creator/notifications",
    icon: "bell",
  },
  {
    title: "Analytics",
    href: "/creator/analytics",
    icon: "pieChart",
  },
  {
    title: "Payout",
    href: "/creator/payout",
    icon: "banknote",
  },
  {
    title: "Settings",
    href: "/creator/settings",
    icon: "settings",
  },
];

export default function PageLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="hidden space-y-6 md:block">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0">
          <aside className="h-screen border-r-2 border-muted p-5 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="h-screen flex-1 overflow-y-scroll bg-muted/60 p-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
