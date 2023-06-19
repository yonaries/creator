import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { UserLoginForm } from "../components/user-sign-in-form";

export default function SignInPage() {
  return (
    <>
      <div className="container relative flex h-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
        <div className="absolute right-4 top-4 flex items-center md:right-8 md:top-8">
          <Link
            href="/signup"
            className={cn(
              "rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Sign Up
          </Link>
          <ModeToggle />
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials below to sign in
              </p>
            </div>
            <UserLoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
