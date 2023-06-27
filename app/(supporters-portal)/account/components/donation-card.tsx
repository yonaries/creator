"use client";

import { Icons } from "@/components/icons";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { donateCreator } from "../actions/donate";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

type Page = {
  [key: string]: any;
};

type Props = {
  page: Page;
};

const items = [
  {
    name: "Tea",
    price: 25,
    icon: <Icons.tea />,
    id: "747a0372-1b18-46e4-b9ab-f8502ec1096c",
  },
  {
    name: "Coffee",
    price: 50,
    icon: <Icons.coffee />,
    id: "2cd9edf8-1166-4259-aa9f-34660ffef282",
  },
  {
    name: "Beer",
    price: 100,
    icon: <Icons.beer />,
    id: "a6239c1b-e1f0-4d46-805d-01c5290505f8",
  },
  {
    name: "Slice of Pizza",
    price: 150,
    icon: <Icons.pizzaColor />,
    id: "97b75103-4521-443b-9aeb-84b3ed93056f",
  },
  {
    name: "Burger",
    price: 200,
    icon: <Icons.burger />,
    id: "39d2b963-237d-4553-85e9-b5d3d39fd1ef",
  },
];

const DonationCard = ({ page }: Props) => {
  const [selectedItem, setSelectedItem] = React.useState<number>();
  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  async function onSubmit() {
    try {
      setLoading(true);
      const checkout_link = await donateCreator({
        donorEmail: email,
        donorName: name,
        itemId: items[selectedItem!].id,
        pageId: page.id,
      });
      router.push(checkout_link);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops! something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-5">
      <span className="text-3xl font-bold">Support {page.name}</span>
      <Card className="flex h-2/3 w-1/3 flex-col justify-between">
        <div>
          <CardHeader>
            <CardTitle>
              Buy me{" "}
              <span className="text-primary">
                {items[selectedItem!] && items[selectedItem!].name}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex justify-between space-x-2 px-1">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-md p-1",
                    selectedItem === index && "bg-amber-700/50"
                  )}
                  onClick={() => setSelectedItem(index)}
                >
                  {item.icon}
                </div>
              ))}
            </div>
            <div>
              <Textarea rows={6} placeholder="Do you want to say something?" />
            </div>
          </CardContent>
        </div>
        <CardFooter>
          <Dialog>
            <DialogTrigger className="w-full">
              <Button className="w-full space-x-1">
                Support &nbsp;
                <span className="text-foreground">
                  {items[selectedItem!] && items[selectedItem!].price}
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Your Info</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    className="col-span-3"
                    value={name}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="col-span-3"
                    value={email}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={loading} onClick={onSubmit}>
                  {loading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Proceed to checkout
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DonationCard;
