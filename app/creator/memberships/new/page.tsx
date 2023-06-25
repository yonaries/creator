"use client";
import { useAuth } from "@/app/context/auth-context";
import MembershipForm from "../components/membership-form";
import { MembershipFormValues } from "../data/form-validator";
import { createMembership } from "../actions/membership";
import { useTransition } from "react";
import { uploadFileToStorage } from "@/utils/file-upload";
import { useRouter } from "next/navigation";

type Props = {};
export default function CreateMembershipPage({}: Props) {
  let [isPending, startTransition] = useTransition();
  const { currentUserPage, idToken } = useAuth();
  const router = useRouter();

  async function onSubmit(data: MembershipFormValues) {
    const coverImage = await uploadFileToStorage(data.coverImage, "benefit");

    const membership = {
      ...data,
      coverImage,
      pageId: currentUserPage?.id,
      status: true,
    };
    try {
      startTransition(() => createMembership(membership, idToken));
      router.push("/creator");
    } catch (error) {
      console.log("ERROR ::- ", error);
    }
  }
  return (
    <MembershipForm
      onSubmit={onSubmit}
      formTitle="Create Membership"
      submitButtonText="Save"
    />
  );
}
