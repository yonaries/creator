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

type Props = {
  className?: string;
};

export default function MembershipsTab({ className }: Props) {
  return (
    <div className="flex justify-center">
      <div
        className={cn(
          "mx-auto flex w-full min-w-[500px] max-w-3xl flex-col items-start gap-4",
          className
        )}
      >
        <MembershipCard
          membership={{
            id: "1",
            title: "Basic",
            description: "Basic membership",
            fee: 10,
            Benefit: [
              {
                id: "1",
                description: "Basic benefit description",
                title: "Basic benefit",
                membershipId: "1",
              },
              {
                id: "2",
                description: "Basic benefit description",
                title: "Basic benefit",
                membershipId: "1",
              },
            ],
            createdAt: new Date().toString(),
            updatedAt: new Date().toString(),
            pageId: "skdhjs",
            status: true,
            Subscription: [],
            coverImage: "https://picsum.photos/600/300",
          }}
        />

        {/*TODO: This ca
        rd is shown only if creator has no memberships*/}
        <Card className="flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle>Choose what to offer</CardTitle>
            <CardDescription>
              Give your patrons exclusive access to benefits for a monthly fee.
              From bonus content to a patron-only community, you can choose what
              you want your membership to offer.
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-center">
            <Button variant="default">
              <Plus />
              Add Membership
            </Button>
          </CardFooter>
        </Card>

        {/* TODO: THIS IS SHOWN WHEN creator has more than 0 memberships */}
        <Button variant="default" className="my-4">
          <Plus />
          Add Membership
        </Button>
      </div>
    </div>
  );
}
