"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { deleteSubscription } from "../actions/delete-subscritions";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  membership: any;
};

const MembershipCard = ({ membership }: Props) => {
  const { toast } = useToast();
  async function leaveMembership(id: string) {
    try {
      await deleteSubscription(id);
      toast({
        title: "You have left the membership",
      });
    } catch (error) {
      toast({
        title: "Oops! Something went wrong,",
        variant: "destructive",
      });
    }
  }
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{membership.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <span className="text-xl font-semibold">{membership.page.name}</span>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-end">
          <Dialog>
            <DialogTrigger>
              <Button variant="destructive">Leave Membership</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. You won&apos;t be able any of
                  the content from this page anymore. Unless you join again.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  onClick={() => leaveMembership(membership.id)}
                  variant="destructive"
                >
                  Leave
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MembershipCard;
