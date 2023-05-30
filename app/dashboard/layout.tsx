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
    href: "/dashboard",
    icon: "home",
  },
  {
    title: "Supporters",
    href: "/supporters",
    icon: "heart",
  },
  {
    title: "Memberships",
    href: "/memberships",
    icon: "box",
  },
  {
    title: "Messages",
    href: "/messages",
    icon: "mail",
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: "bell",
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: "pieChart",
  },
  {
    title: "Payouts",
    href: "/payouts",
    icon: "banknote",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "settings",
  },
];

export default function PageLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="hidden space-y-6 md:block">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0">
          <aside className="h-screen p-5 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 bg-muted/60 p-10">{children}</div>
        </div>
      </div>
    </>
  );
}
