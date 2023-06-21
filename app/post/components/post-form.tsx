"use client";

import { Input } from "@/components/ui/input";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Placeholder from "@tiptap/extension-placeholder";
import { Link } from "@mantine/tiptap";
import CustomRichTextEditor from "@/components/custom-rich-text-editor";
import { useEditor } from "@tiptap/react";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { postFormSchema, PostFormValues } from "../data/form-validator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form";
import { Button } from "@/components/ui/button";
import PostMembershipCheckboxField from "./post-membership-checkbox-field";
import PostVisiblityRadioGroupField from "./post-visiblity-radio-group-field";
import { visibilityOptions } from "../data/form-data";
import Image from "next/image";
import PostFileSelectorField from "./post-file-selector-field";
import PostAttachmentField from "./post-attachment-field";
import { Separator } from "@/components/ui/separator";

type Props = {
  onSubmit: (data: PostFormValues) => void;
  formTitle: string;
  defaultValues?: Partial<PostFormValues>;
  className?: string;
  buttonText?: string;
};

const PostForm = ({
  className,
  onSubmit,
  defaultValues,
  formTitle,
  buttonText = "Publish Now",
}: Props) => {
  // TODO: This can come from your database or API.
  const defaultVal: Partial<PostFormValues> = {
    title: defaultValues?.title ? defaultValues.title : "",
    content: defaultValues?.content ? defaultValues.content : "",
    visibility: defaultValues?.visibility ? defaultValues.visibility : "public",
    membership: defaultValues?.membership ? defaultValues.membership : [],
    file: defaultValues?.file && defaultValues.file,
    thumbnail: defaultValues?.thumbnail && defaultValues.thumbnail,
    attachments: defaultValues?.attachments ? defaultValues.attachments : [],
  };

  // TODO: FETCH MEMBERSHIPS FROM API AND REMOVE THE STATIC DATA
  const membershipOption = [
    {
      id: "membership-1",
      label: "Membership-1",
    },
    {
      id: "membership-2",
      label: "Membership-2",
    },
    {
      id: "membership-3",
      label: "Membership-3",
    },
  ];
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postFormSchema),
    defaultValues: defaultVal,
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
    content: defaultVal.content,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("", className)}
      >
        <div className="flex w-full items-center justify-between py-8">
          <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            {formTitle}
          </h1>

          <div>
            <Button variant="default" type="submit">
              {buttonText}
            </Button>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="max-w-3xl rounded-md border-muted bg-white p-2 dark:bg-muted">
            <PostFileSelectorField
              controller={form.control}
              fieldName="file"
              fieldLabel="Post File"
              acceptedFiles={["audio", "image", "video"]}
            />
            <PostFileSelectorField
              controller={form.control}
              fieldName="thumbnail"
              fieldLabel="Thumbnail file"
              acceptedFiles={["image"]}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Post Title..."
                      className="my-2 w-full rounded-t-md border-none bg-transparent text-2xl font-bold focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
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
            <Separator className="dark:bg-white" />
            <PostAttachmentField
              controller={form.control}
              fieldLabel="Attachments"
              fieldName="attachments"
            />
          </div>

          <div className="flex flex-col rounded-md bg-white p-8 pt-2 dark:bg-muted">
            <PostVisiblityRadioGroupField
              items={visibilityOptions}
              controller={form.control}
              label="Who can see this post?"
            />

            {form.watch("visibility") === "membership" ? (
              <PostMembershipCheckboxField
                label="Select the membership"
                items={membershipOption}
                controller={form.control}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
