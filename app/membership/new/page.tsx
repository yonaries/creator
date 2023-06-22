"use client";

import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Placeholder from "@tiptap/extension-placeholder";
import { Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import CustomRichTextEditor from "@/components/custom-rich-text-editor";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Button } from "@/components/ui/button";
import AddBenefitDialog from "../components/add-benefit-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/react-hook-form/form";
import { useForm } from "react-hook-form";
import {
  MembershipFormValues,
  membershipFormSchema,
} from "../data/form-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { BenefitCard } from "../components/benefit-card";

type Props = {};

export default function CreateMembershipPage({}: Props) {
  const defaultValues: Partial<MembershipFormValues> = {
    title: "",
    fee: 0,
    description: "",
    coverImage: "",
  };

  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(membershipFormSchema),
    defaultValues,
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
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Type Here..." }),
    ],
    content: defaultValues.description,
  });

  function onSubmit(data: MembershipFormValues) {
    console.log("SUBMITTED", data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mx-auto flex min-w-[500px] max-w-2xl flex-col gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Customize Membership</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <Label>Name</Label>
                    <FormControl>
                      <Input placeholder="Membership name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fee"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <Label>Price</Label>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Membership Price"
                        {...field}
                      />
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
                    <Label>Membership description</Label>
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

              {/*TODO: create file selector field here*/}
              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <Label>Cover Image</Label>
                    {field.value && (
                      <Image
                        src={field.value}
                        alt={field.value}
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
                            field.onChange(
                              URL.createObjectURL(e.target.files[0])
                            );
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

          <Card>
            <CardHeader>
              <CardTitle>Membership Benefits</CardTitle>
              <CardDescription>
                Let your supporters know what they can expect from this
                membership tier
              </CardDescription>

              {form.getFieldState("benefit").error && (
                <Label className=" font-bold text-red-500">
                  {form.getFieldState("benefit").error?.message}
                </Label>
              )}
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {form.watch("benefit")?.map((benefit, index) => (
                <BenefitCard
                  key={`${benefit.title}${index}`}
                  title={benefit.title}
                  description={benefit.description}
                  onClick={() => {
                    form.setValue(
                      "benefit",
                      form.getValues("benefit")?.filter((_, i) => i !== index)
                    );
                  }}
                />
              ))}
            </CardContent>
            <CardFooter>
              <AddBenefitDialog fieldName="benefit" controller={form.control} />
            </CardFooter>
          </Card>

          <div className="flex gap-4">
            <Button variant="default" type="submit">
              Save
            </Button>
            <Button variant="destructive" type="button">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
