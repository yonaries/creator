"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/react-hook-form/form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { pageFormSchema, PageFormValues } from "../data/form-validator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Placeholder from "@tiptap/extension-placeholder";
import * as TipTapLink from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import CustomRichTextEditor from "@/components/custom-rich-text-editor";
import { Switch } from "@/components/ui/switch";

type Props = {
  onSubmit: (data: PageFormValues) => void;
  className?: string;
  defaultValues: Partial<PageFormValues>;
};

export default function EditDialogForm({
  className,
  defaultValues,
  onSubmit,
}: Props) {
  const form = useForm<PageFormValues>({
    resolver: zodResolver(pageFormSchema),
    defaultValues: defaultValues,
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc",
          },
        },
      }),
      Underline,
      TipTapLink.Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Type Here..." }),
    ],
    content: defaultValues?.description,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("my-20", className)}
      >
        <div className="mx-auto flex min-w-[500px] max-w-2xl flex-col gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Update Page</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
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

              <FormField
                control={form.control}
                name="headline"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <Label>Headline</Label>
                    <FormControl>
                      <Input placeholder="I am designer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="thankYouMessage"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <Label>Thank you message for supporters</Label>
                    <FormControl>
                      <Input placeholder="thanks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <Label>Page description</Label>
                    <FormControl>
                      <CustomRichTextEditor
                        className="max-w-lg rounded-none border-none"
                        editor={editor}
                        onUpdate={(e) => {
                          e.getText().length > 0
                            ? field.onChange(e.getHTML())
                            : field.onChange("");
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="profileImage"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col gap-2">
                    {field.value && (
                      <Button
                        type="button"
                        onClick={() => {
                          field.onChange(undefined);
                        }}
                        className="absolute -top-3 right-0 flex aspect-square cursor-pointer items-center justify-center rounded-full bg-red-400 p-2 hover:bg-red-500"
                      >
                        <X className="h-4 w-4 text-gray-100 " />
                      </Button>
                    )}

                    <Label>Profile Image</Label>
                    {field.value && (
                      <Image
                        // @ts-ignore
                        src={URL.createObjectURL(field.value) || ""}
                        alt={"Cover Image"}
                        width={600}
                        height={320}
                        className="mb-2 h-80 w-full rounded-sm object-cover"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    )}

                    <FormControl>
                      <Input
                        placeholder="Membership cover image"
                        type="file"
                        className="cursor-pointer border-muted px-4 dark:border-slate-600"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files) {
                            field.onChange(e.target.files[0]);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col gap-2">
                    {field.value && (
                      <Button
                        type="button"
                        onClick={() => {
                          field.onChange(undefined);
                        }}
                        className="absolute -top-3 right-0 flex aspect-square cursor-pointer items-center justify-center rounded-full bg-red-400 p-2 hover:bg-red-500"
                      >
                        <X className="h-4 w-4 text-gray-100 " />
                      </Button>
                    )}

                    <Label>Cover Image</Label>
                    {field.value && (
                      <Image
                        // @ts-ignore
                        src={URL.createObjectURL(field.value) || ""}
                        alt={"Cover Image"}
                        width={600}
                        height={320}
                        className="mb-2 h-80 w-full rounded-sm object-cover"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    )}

                    <FormControl>
                      <Input
                        placeholder="Membership cover image"
                        type="file"
                        className="cursor-pointer border-muted px-4 dark:border-slate-600"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files) {
                            field.onChange(e.target.files[0]);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button variant="default" type="submit">
              Update Page
            </Button>
            <Button variant="destructive" type="button">
              <Link href="/creator">Cancel</Link>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
