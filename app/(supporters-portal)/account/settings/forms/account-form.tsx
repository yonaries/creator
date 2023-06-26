"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useAuth } from "@/app/context/auth-context";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { getUser } from "../../actions/get-user";
import { updateUserAccount } from "../../actions/update-user";

const accountFormSchema = z.object({
  displayName: z
    .string()
    .min(3, {
      message: "Display Name must be at least 3 characters.",
    })
    .max(30, {
      message: "Display Name must not be longer than 30 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  firstName: z
    .string()
    .min(3, {
      message: "First Name must be at least 3 characters.",
    })
    .optional(),
  lastName: z
    .string()
    .min(3, {
      message: "Last Name must be at least 3 characters.",
    })
    .optional(),
  profileImage: z.string().url().optional(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

type Props = {
  data: Partial<AccountFormValues>;
};

export function AccountForm() {
  const { currentUser, idToken } = useAuth();

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    // defaultValues: async () => {
    //   const res = await getUser({ uid: currentUser?.uid!, token: idToken! });

    //   return {
    //     displayName: res.displayName || "",
    //     email: res.email || "",
    //     firstName: res.firstName || "",
    //     lastName: res.lastName || "",
    //     profileImage: res.profileImage || "",
    //   };
    // },
  });

  async function onSubmit(data: AccountFormValues) {
    try {
      await updateUserAccount(data, currentUser?.uid!, idToken!);
      toast({
        title: "Account updated",
        description: "Your account has been updated.",
      });
    } catch (error) {
      toast({
        title: "Oops! Something went wrong.",
        description: "Your account could not be updated.",
      });
      console.log(error);
    }
  }

  // if (isLoading) return <div>Loading...</div>;
  // if (error || !data) return <div>Error</div>;

  return (
    <div className="w-2/3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="displayName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Display Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name that will be displayed on your profile and in
                  emails.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your email" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Your First Name" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Your Last Name" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Profile Image</FormLabel>
                <Input type="file" {...field} />
                <FormDescription>Upload a profile image.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update account</Button>
        </form>
      </Form>
    </div>
  );
}
