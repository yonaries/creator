"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/react-hook-form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "./ui/use-toast";
import axios from "axios";
import { AuthContext } from "@/app/context/auth-context";
import { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const pageFormSchema = z.object({
  name: z.string().min(3, "minimum of 3 characters required"),
});
export type PageFormValues = z.infer<typeof pageFormSchema>;

type Props = {};

export default function CreatePageDialog({}: Props) {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const form = useForm<PageFormValues>({
    resolver: zodResolver(pageFormSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmitHandler(data: PageFormValues) {
    if (currentUser) {
      const token = await currentUser.getIdToken();
      const { data: responseData, status } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/page`,
        {
          name: data.name,
          ownerId: currentUser.uid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (status.toString().startsWith("2")) {
        toast({
          title: "Page Created Successfully",
        });
      } else if (status.toString().startsWith("4")) {
        toast({
          title: "Page Creation Failed",
        });
      }
    } else {
      console.log("user not logged in");
    }
    setOpen(false);
  }
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm">Become a Creator</CardTitle>
        <CardDescription>
          <span className="text-xs">
            Setup your profile and reach your true fans.
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="w-full">
            <Button size="sm" className="w-full">
              Start Your Journey
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Page</DialogTitle>
              <DialogDescription>Just give us a name.</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                className="grid gap-4 py-4"
                onSubmit={form.handleSubmit(onSubmitHandler)}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <Label htmlFor="page-name">Page Name</Label>
                      <FormControl>
                        <Input
                          id="page-name"
                          placeholder="Eg. jegool"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Create Page</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
