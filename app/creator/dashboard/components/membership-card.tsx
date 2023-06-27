"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Placeholder from "@tiptap/extension-placeholder";
import * as TipTapLink from "@mantine/tiptap";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Membership } from "@/types/Membership";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { Pencil, Trash } from "lucide-react";
import { useAuth } from "@/app/context/auth-context";
import { deleteMembership } from "../../memberships/actions/membership";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { mutate } from "swr";
import { RichTextEditor } from "@mantine/tiptap";

type Props = {
  membership: Membership;
  memberships: Membership[];
};

export default function MembershipCard({ membership, memberships }: Props) {
  const [showMore, setShowMore] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { currentUserPage, idToken } = useAuth();
  const editor = useEditor({
    editable: false,
    content: membership.description ? membership.description : "",
    extensions: [
      StarterKit.configure({
        code: {
          HTMLAttributes: {
            class: "bg-muted",
          },
        },
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
      TipTapLink.Link.configure({
        HTMLAttributes: { class: "text-blue-500 underline" },
      }),
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Type Here..." }),
    ],
  });

  function handleOnDelete() {
    startTransition(() => deleteMembership(membership.id, idToken!));
    mutate(
      "memberships",
      memberships.filter((m) => m.id !== membership.id),
      false
    );
  }
  return (
    <Card className="relative w-full">
      {currentUserPage && currentUserPage.id === membership.pageId && (
        <div className="absolute -top-3 right-0 flex gap-2">
          <Button className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-blue-400 p-2 hover:bg-blue-500">
            <Link href={`/creator/memberships/edit/${membership.id}`}>
              <Pencil className="h-4 w-4 text-gray-100" />
            </Link>
          </Button>
          {isPending ? (
            <Button className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-red-400 p-2 hover:bg-red-500">
              <Icons.spinner className="h-4 w-4 animate-spin text-gray-100" />
            </Button>
          ) : (
            <Button
              onClick={handleOnDelete}
              className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-red-400 p-2 hover:bg-red-500"
            >
              <Trash className="h-4 w-4 text-gray-100 " />
            </Button>
          )}
        </div>
      )}

      <CardContent className="border p-0">
        <div className="flex gap-3">
          {membership.coverImage && membership.coverImage.length > 0 && (
            <Image
              width={600}
              height={300}
              src={membership.coverImage || ""}
              alt={membership.coverImage || ""}
              className="aspect-square w-44"
            />
          )}

          <div className="flex-1 p-4">
            <CardTitle className="text-xl capitalize">
              {membership.title}
            </CardTitle>
            <CardTitle className="text-base">
              {membership.fee} Birr / month
            </CardTitle>

            <RichTextEditor editor={editor} className="border-none p-0" p={"0"}>
              <RichTextEditor.Content
                m={"0"}
                className="m-0 p-0 dark:text-white"
                bg={"transparent"}
              />{" "}
            </RichTextEditor>
          </div>
        </div>
        <div className="flex w-full flex-col items-start px-4">
          <Separator />
          {showMore && (
            <div className="flex w-full flex-col justify-start px-8 py-4 transition">
              <Label className="text-base font-bold">{`What's included`}</Label>
              <ul className="flex w-full list-disc flex-col gap-1 text-sm">
                {membership.Benefit &&
                  membership.Benefit.map((benefit, index) => (
                    <li key={`${benefit.id}`}>
                      <Label>{benefit.title}</Label>
                      <CardDescription>{benefit.description}</CardDescription>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          <Button
            variant="link"
            className=" p-0 font-bold capitalize text-blue-500"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "show less" : "show more"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
