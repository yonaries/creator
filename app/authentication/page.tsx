import { Metadata } from "next";
import Link from "next/link";

import { UserAuthForm } from "@/app/authentication/components/user-auth-form";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:flex lg:max-w-none lg:px-0">
        <div className="absolute right-4 top-4 flex items-center md:right-8 md:top-8">
          <Link
            href="/examples/authentication"
            className={cn(
              "rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Login
          </Link>
          <ModeToggle />
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
