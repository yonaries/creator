"use client";
import { useAuth } from "@/app/context/auth-context";
import MembershipForm from "../../components/membership-form";
import { MembershipFormValues } from "../../data/form-validator";
import {
  fetchMembership,
  fetchMemberships,
  updateMembership,
} from "../../actions/membership";
import { useEffect, useState, useTransition } from "react";
import { uploadFileToStorage } from "@/utils/file-upload";
import { useRouter, usePathname } from "next/navigation";
import useSWR, { mutate } from "swr";
import Loader from "@/components/loading-page";
import { getFileFromUrl } from "@/utils/get-file-from-url";

type Props = {};

export default function EditMembershipPage({}: Props) {
  const [isPending, startTransition] = useTransition();
  const { currentUserPage, idToken } = useAuth();
  const path = usePathname();
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    "membership",
    () => fetchMembership(path.split("/")[4] as string, idToken!),
    {
      revalidateOnFocus: true,
      keepPreviousData: false,
    }
  );
  const [imageFile, setImageFile] = useState<any | undefined>(undefined);

  async function onSubmit(formData: MembershipFormValues) {
    let coverImage = "";
    if (formData.coverImage && data.coverImage) {
      if (formData.coverImage.name === data.coverImage) {
        coverImage = data.coverImage;
      } else {
        coverImage = await uploadFileToStorage(formData.coverImage, "benefit");
      }
    }

    const membership = {
      ...formData,
      coverImage,
      pageId: currentUserPage?.id,
      status: true,
    };
    try {
      startTransition(() => updateMembership(data.id, membership, idToken!));
      router.push("/creator", {
        forceOptimisticNavigation: true,
      });
      mutate("membership", fetchMembership(data.id, idToken!));
    } catch (error) {
      console.log("ERROR ::- ", error);
    }
  }

  useEffect(() => {
    const callFunc = async () => {
      setImageFile(await getFileFromUrl(data.coverImage, data.coverImage));
    };
    if (data) callFunc();
  }, [data]);

  if (isLoading || !imageFile || !currentUserPage) {
    return <Loader />;
  }

  return (
    <MembershipForm
      onSubmit={onSubmit}
      formTitle="Update Membership"
      submitButtonText="Update"
      values={{
        title: data.title,
        fee: data.fee,
        coverImage: imageFile || undefined,
        description: data.description,
        benefit: data.Benefit.map((benefit: any) => {
          return { description: benefit.description, title: benefit.title };
        }),
      }}
    />
  );
}
