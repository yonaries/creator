"use client";
import PostForm from "../components/post-form";
import { PostFormValues } from "../data/form-validator";
import { createPost } from "../actions/post";
import { useTransition } from "react";
import { useAuth } from "@/app/context/auth-context";
import { uploadFileToStorage } from "@/utils/file-upload";
import Loading from "@/components/loading-page";
import { Membership } from "@/types/Membership";
import { useRouter } from "next/navigation";

export default function CreatePostPage() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { currentUserPage, idToken } = useAuth();

  async function onSubmit(data: PostFormValues) {
    let thumbnail = "";
    let file = "";
    let attachments = [];
    if (data.thumbnail) {
      thumbnail = await uploadFileToStorage(data.thumbnail, "thumbnail");
    }
    if (data.file) {
      file = await uploadFileToStorage(data.file, "file");
    }
    if (data.attachments && data.attachments.length > 0) {
      for (let i = 0; i < data.attachments.length; i++)
        attachments[i] = await uploadFileToStorage(data.file, "file");
    }

    let fileType = "";
    if (data.file) {
      fileType = data.file.type.split("/")[0].toUpperCase();
    } else if (data.attachments && data.attachments.length > 0) {
      fileType = "FILE";
    } else {
      fileType = "TEXT";
    }

    let visibleTo = ["PUBLIC"];
    if (data.visibility === "membership" && data.membership) {
      visibleTo = data.membership;
    } else if (data.visibility === "supporters" && currentUserPage) {
      visibleTo = currentUserPage.Membership.map((el: Membership) => el.id);
    }

    const postData: any = {
      ...data,
      caption: data.content || "",
      thumbnail: thumbnail || "",
      file: file || "",
      attachment: attachments
        ? attachments.map((el) => {
            return { url: el };
          })
        : [],
      type: fileType || "",
      status: "ACTIVE",
      visibleTo: visibleTo,
      pageId: currentUserPage?.id,
    };
    delete postData["visibility"];
    delete postData["membership"];
    delete postData["content"];
    delete postData["attachments"];
    startTransition(() => createPost(postData, idToken!));
    router.push("/creator");
  }

  if (!currentUserPage || isPending) return <Loading />;

  return (
    <div className="mx-auto flex w-11/12 max-w-6xl flex-col items-center justify-between gap-4 p-10">
      <PostForm
        className="gap-4"
        onSubmit={onSubmit}
        formTitle="Create Post"
        memberships={currentUserPage.Membership.map((membership: any) => {
          return { id: membership.id, label: membership.title };
        })}
        defaultValues={{
          title: "",
          content: "",
          visibility: "public",
          membership: [],
          thumbnail: undefined,
          file: undefined,
          attachments: [],
        }}
      />
    </div>
  );
}
