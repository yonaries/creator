"use client";
import { useAuth } from "@/app/context/auth-context";
import MembershipForm from "../../components/membership-form";
import { MembershipFormValues } from "../../data/form-validator";
import { fetchMembership, updateMembership } from "../../actions/membership";
import { useEffect, useState, useTransition } from "react";
import { uploadFileToStorage } from "@/utils/file-upload";
import { useRouter, usePathname } from "next/navigation";
import useSWR from "swr";
import Loader from "@/components/loading-page";

type Props = {};

export default function EditMembershipPage({}: Props) {
  const [isPending, startTransition] = useTransition();
  const { currentUserPage, idToken } = useAuth();
  const path = usePathname();
  const router = useRouter();
  const { data, error, isLoading } = useSWR("membership", () =>
    fetchMembership(path.split("/")[4] as string, idToken!)
  );
  const [imageFile, setImageFile] = useState<any | undefined>(undefined);

  async function getFileFromUrl(
    url: string,
    name: string,
    defaultType = "image/jpeg"
  ) {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], name, {
      type: data.type || defaultType,
    });
  }

  async function onSubmit(formData: MembershipFormValues) {
    let coverImage = "";
    if (formData.coverImage && data.coverImage) {
      if (formData.coverImage.name === data.coverImage.name) {
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
      router.push("/creator");
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

  if (isLoading || !imageFile) {
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
