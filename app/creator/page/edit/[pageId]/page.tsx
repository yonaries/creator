"use client";

import React, { useEffect, useState, useTransition } from "react";
import EditPageForm from "../../component/edit-page-form";
import useSWR, { mutate } from "swr";
import { useAuth } from "@/app/context/auth-context";
import { usePathname, useRouter } from "next/navigation";
import { fetchPageById, updatePage } from "../../action/page";
import Loading from "@/components/loading-page";
import { PageFormValues } from "../../data/form-validator";
import { uploadFileToStorage } from "@/utils/file-upload";
import { getFileFromUrl } from "@/utils/get-file-from-url";

export default function EditPage() {
  const { idToken, currentUserPage, setCurrentUserPage } = useAuth();
  const [isPending, startTransition] = useTransition();
  const path = usePathname();
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    "page",
    () => fetchPageById(path.split("/")[4] as string, idToken!),
    {
      revalidateOnFocus: true,
      keepPreviousData: false,
    }
  );
  const [coverImage, setCoverImage] = useState<File | undefined>(undefined);
  const [profileImage, setProfileImage] = useState<File | undefined>(undefined);

  useEffect(() => {
    if (idToken)
      mutate("page", fetchPageById(path.split("/")[4] as string, idToken!));
  }, [idToken, path]);

  async function onSubmit(formData: PageFormValues) {
    let coverImage = "";
    if (formData.coverImage) {
      if (formData.coverImage.name === data.coverImage) {
        coverImage = data.coverImage;
      } else {
        coverImage = await uploadFileToStorage(
          formData.coverImage,
          "coverImage"
        );
      }
    }

    let profileImage = "";
    if (formData.profileImage) {
      if (formData.profileImage.name === data.profileImage) {
        profileImage = data.profileImage;
      } else {
        profileImage = await uploadFileToStorage(
          formData.profileImage,
          "profile"
        );
      }
    }

    const page = {
      ...formData,
      ownerId: data.ownerId,
      coverImage,
      profileImage,
      name: formData.name ? formData.name : data.name,
      description: formData.description ? formData.description : "",
      headline: formData.headline ? formData.headline : "",
      thankYouMessage: formData.thankYouMessage ? formData.thankYouMessage : "",
    };

    try {
      startTransition(() => updatePage(data.id, page, idToken!));
      router.push("/creator", {
        forceOptimisticNavigation: true,
      });
      mutate("page", fetchPageById(data.id, idToken!));
      setCurrentUserPage(await fetchPageById(data.id, idToken!));
    } catch (error) {
      console.log("ERROR ::- ", error);
    }
  }

  useEffect(() => {
    const changeUrlsToFiles = async () => {
      data.coverImage &&
        setCoverImage(await getFileFromUrl(data.coverImage, data.coverImage));
      data.profileImage &&
        setProfileImage(
          await getFileFromUrl(data.profileImage, data.profileImage)
        );
    };
    if (data) changeUrlsToFiles();
  }, [data]);

  if (isLoading || !data) return <Loading />;
  if (data.coverImage && !coverImage) return <Loading />;
  if (data.profileImage && !profileImage) return <Loading />;

  return (
    <EditPageForm
      onSubmit={onSubmit}
      defaultValues={{
        coverImage: coverImage,
        name: data.name || "",
        description: data.description || "",
        headline: data.headline || "",
        profileImage: profileImage,
        thankYouMessage: data.thankYouMessage || "",
      }}
    />
  );
}
