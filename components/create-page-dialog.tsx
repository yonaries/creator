"use client";
import { Plus, Podcast } from "lucide-react";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "./ui/use-toast";
import axios from "axios";
import { AuthContext } from "@/app/context/auth-context";
import { useContext } from "react";

export const pageFormSchema = z.object({
  name: z.string().min(3, "minimum of 3 characters required"),
});
export type PageFormValues = z.infer<typeof pageFormSchema>;

type Props = {};

export default function CreatePageDialog({}: Props) {
  const { currentUser } = useContext(AuthContext);
  const form = useForm<PageFormValues>({
    resolver: zodResolver(pageFormSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmitHandler(data: PageFormValues) {
    // TODO: HANDLE onSubmit here
    // TODO: ADD OWNER ID TO DATA
    if (currentUser) {
      const token = await currentUser.getIdToken();
      console.log(data);
      console.log(token);
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
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
        });
      } else if (status.toString().startsWith("4")) {
        toast({
          title: "Page Creation Failed",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(responseData, null, 2)}
              </code>
            </pre>
          ),
        });
      }
    } else {
      console.log("user not logged in");
    }
  }
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <Podcast className="h-10 w-10 text-muted-foreground" />
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          You do not have page under your name yet. Create one below.
        </p>
        <Dialog>
          <DialogTrigger>
            <Button size="sm" className="relative">
              Become a creator
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
      </div>
    </div>
  );
}
