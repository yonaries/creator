"use client";
import PostForm from "../../components/post-form";
import { PostFormValues } from "../../data/form-validator";
import { fetchPost, updatePost } from "../../actions/post";
import { useEffect, useState, useTransition } from "react";
import { useAuth } from "@/app/context/auth-context";
import useSWR, { mutate } from "swr";
import { usePathname, useRouter } from "next/navigation";
import Loading from "@/components/loading-page";
import { getFileFromUrl } from "@/utils/get-file-from-url";
import { uploadFileToStorage } from "@/utils/file-upload";
import { Membership } from "@/types/Membership";

export default function EditPostPage() {
  let [isPending, startTransition] = useTransition();
  const { currentUserPage, idToken } = useAuth();
  const path = usePathname();
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    "post",
    () => fetchPost(path.split("/")[4] as string, idToken!),
    {
      revalidateOnFocus: true,
      keepPreviousData: false,
      revalidateIfStale: true,
      revalidateOnMount: true,
      revalidateOnReconnect: true,
    }
  );

  const [thumbnailFile, setThumbnailFile] = useState<any | undefined>(
    undefined
  );
  const [file, setFile] = useState<any | undefined>(undefined);
  const [attachmentFiles, setAttachmentFiles] = useState<File[] | []>([]);

  useEffect(() => {
    const callFunc = async () =>
      mutate("post", await fetchPost(path.split("/")[4] as string, idToken!));
    if (currentUserPage) callFunc();
  });

  async function onSubmit(formData: PostFormValues) {
    let thumbnail = "";
    let file = "";
    let attachments = [];
    if (formData.thumbnail)
      thumbnail =
        formData.thumbnail.name === data.thumbnail
          ? data.thumbnail
          : await uploadFileToStorage(formData.thumbnail, "thumbnail");

    if (formData.file)
      file =
        formData.file.name === data.file
          ? data.file
          : await uploadFileToStorage(formData.file, "file");

    if (
      formData.attachments &&
      formData.attachments.length > 0 &&
      data.Attachment
    ) {
      if (formData.attachments.length === 0) {
        attachments = [];
      } else {
        for (let i = 0; i < formData.attachments.length; i++) {
          attachments[i] =
            data.Attachment[i] &&
            formData.attachments[i].name === data.Attachment[i]
              ? data.Attachment[i]
              : await uploadFileToStorage(formData.file, "file");
        }
      }
    }

    let fileType = "";
    if (formData.file) {
      fileType = formData.file.type.split("/")[0].toUpperCase();
    } else if (formData.attachments && formData.attachments.length > 0) {
      fileType = "FILE";
    } else {
      fileType = "TEXT";
    }

    let visibleTo = ["PUBLIC"];
    if (formData.visibility === "membership" && formData.membership) {
      visibleTo = formData.membership;
    } else if (formData.visibility === "supporters" && currentUserPage) {
      visibleTo = currentUserPage.Membership.map((el: Membership) => el.id);
    }

    const postData: any = {
      ...formData,
      caption: formData.content || "",
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
    startTransition(() => updatePost(data.id, postData, idToken!));
    router.push("/creator");
  }

  const identifyFileType = (type: string): string => {
    switch (type.toLowerCase()) {
      case "image":
        return "image/*";
      case "video":
        return "video/*";
      case "audio":
        return "audio/*";
      default:
        return "*/*";
    }
  };

  useEffect(() => {
    const changeUrlsToFiles = async () => {
      data.file &&
        setFile(
          await getFileFromUrl(
            data.file,
            data.file,
            identifyFileType(data.type)
          )
        );
      data.thumbnail &&
        setThumbnailFile(
          await getFileFromUrl(
            data.thumbnail,
            data.thumbnail,
            identifyFileType(data.type)
          )
        );
      if (data.Attachment)
        for (let i = 0; i < data.Attachment.length; i++)
          setAttachmentFiles([
            ...attachmentFiles,
            await getFileFromUrl(data.Attachment[i], data.Attachment[i], "*/*"),
          ]);
    };
    if (data) changeUrlsToFiles();
  }, [data]);

  if (!currentUserPage || isLoading || !data) return <Loading />;

  if (data.file) {
    if (!file) return <Loading />;
  }

  if (data.thumbnail) {
    if (!thumbnailFile) return <Loading />;
  }
  if (data.Attachment) {
    if (data.Attachment.length !== attachmentFiles.length) return <Loading />;
  }

  if (isPending) return <Loading />;

  return (
    <div className="mx-auto flex w-11/12 max-w-6xl flex-col items-center justify-between gap-4 p-10">
      <PostForm
        className="gap-4"
        onSubmit={onSubmit}
        formTitle="Update Post"
        memberships={currentUserPage.Membership.map((membership: any) => {
          return { id: membership.id, label: membership.title };
        })}
        defaultValues={{
          title: data.title,
          content: data.caption,
          visibility: data.visibleTo.includes("PUBLIC")
            ? "public"
            : currentUserPage.Membership.length === data.visibleTo.length
            ? "supporters"
            : "membership",
          membership:
            data.visibleTo.filter((el: string) => el !== "PUBLIC") || [],
          file: file,
          thumbnail: thumbnailFile || undefined,
          attachments: attachmentFiles || [],
        }}
      />
    </div>
  );
}
