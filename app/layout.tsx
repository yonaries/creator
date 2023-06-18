import "@/app/globals.css";
import { Metadata } from "next";

import AuthProvider from "@/app/context/auth-context";
import { StyleSwitcher } from "@/components/style-switcher";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface RootLayoutProps {
  children: React.ReactNode;
}

const metadata: Metadata = {
  title: "Jegool",
  description: "Where creativity unleash.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {" "}
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">{children}</div>
              </div>
            </ThemeProvider>
            <StyleSwitcher />
            <Toaster />
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
