"use client";

import { useAuth } from "@/app/context/auth-context";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import useSWR from "swr";
import { getUserSubscriptions } from "../actions/get-user-subscriptions";
import MembershipCard from "../components/membership-card";

type Props = {};

const Memberships = (props: Props) => {
  const { currentUser } = useAuth();
  const token = useSWR(currentUser?.getIdToken());
  const { data, error, isLoading } = useSWR(
    { uid: currentUser?.uid!, token: token.data },
    getUserSubscriptions
  );

  return (
    <div>
      <span className="text-3xl font-bold">Memberships</span>
      <Separator className="my-3" />
      {isLoading ? (
        <div className="flex h-96 w-full items-center justify-center">
          <Icons.spinner className="h-10 w-10 animate-spin text-primary" />
        </div>
      ) : error || !data ? (
        <div className="flex h-96 w-full items-center justify-center">
          <span className="text-3xl font-bold">No Memberships</span>
        </div>
      ) : (
        <div className="w-full space-y-5">
          {data?.map((membership: any, index: number) => (
            <MembershipCard key={index} membership={membership} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Memberships;
