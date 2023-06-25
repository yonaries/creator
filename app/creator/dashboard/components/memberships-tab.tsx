import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import MembershipCard from "./membership-card";
import { useAuth } from "@/app/context/auth-context";
import { Membership } from "@/types/Membership";
import useSWR from "swr";
import { fetchMemberships } from "../../memberships/actions/membership";
import Link from "next/link";
import LoadingSpinner from "@/components/loading-page-spinner";

type Props = {
  className?: string;
};

export default function MembershipsTab({ className }: Props) {
  const { currentUserPage, idToken } = useAuth();
  const { data, error, isLoading } = useSWR("memberships", () =>
    fetchMemberships(currentUserPage?.id, idToken!)
  );

  if (isLoading || !currentUserPage) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex justify-center">
      <div
        className={cn(
          "mx-auto flex w-full min-w-[500px] max-w-3xl flex-col items-start gap-4",
          className
        )}
      >
        {data &&
          data.length > 0 &&
          data.map((membership: Membership) => (
            <MembershipCard
              key={membership.id}
              membership={membership}
              memberships={data}
            />
          ))}

        {data && data.length > 0 ? (
          <Button variant="default" className="my-4">
            <Link href="/creator/memberships/new" className="flex items-center">
              <Plus />
              Add Membership
            </Link>
          </Button>
        ) : (
          <Card className="flex flex-col items-center text-center">
            <CardHeader>
              <CardTitle>Choose what to offer</CardTitle>
              <CardDescription>
                Give your Supporters exclusive access to benefits for a monthly
                fee. From bonus content to a supporter-only community, you can
                choose what you want your membership to offer.
              </CardDescription>
            </CardHeader>
            <CardFooter className="text-center">
              <Button variant="default">
                <Link
                  href="/creator/memberships/new"
                  className="flex items-center"
                >
                  <Plus />
                  Add Membership
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
