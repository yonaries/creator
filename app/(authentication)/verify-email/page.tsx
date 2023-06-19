"use client";
import React from "react";
import { useAuth } from "@/app/context/auth-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { verifyEmail } from "../controllers/auth";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "@/components/icons";

type Props = {};

const VerifyEmailPage = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSent, setIsSent] = React.useState<boolean>(false);
  const [timer, setTimer] = React.useState<string>("");
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const { currentUser } = useAuth();
  const { toast } = useToast();

  function startTimer(duration: number) {
    var timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt((timer / 60).toString(), 10);
      seconds = parseInt((timer % 60).toString(), 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTimer(minutes + ":" + seconds);

      if (--timer < 0) {
        setTimer("");
        setIsDisabled(false);
        clearInterval(timer);
      }
    }, 1000);
  }

  async function onSubmit() {
    try {
      setIsLoading(true);
      setIsDisabled(true);
      await verifyEmail();
      toast({
        title: "Email Verification Sent",
        description: "Check your inbox for a verification email.",
      });
      startTimer(60 * 1);
      setIsSent(true);
    } catch (error: any) {
      setIsDisabled(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "We couldn't send you verification email.",
        action: (
          <ToastAction onClick={onSubmit} altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10">
      <Image src="/images/logo.png" width={100} height={100} alt="logo" />
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Verify Email</CardTitle>
          <CardDescription>Verify your email to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-sm text-gray-500">
            {`We've sent an email to ${currentUser?.email}. Click the link in your
            email to verify your email address.`}
          </p>
          <Button disabled={isDisabled} className="w-full" onClick={onSubmit}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {isSent ? "Resend Email" : "Verify Email"}
          </Button>
          {timer && <span className="text-sm">You can resend in {timer}</span>}
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyEmailPage;
