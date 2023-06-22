"use client";
import MembershipForm from "../components/membership-form";
import { MembershipFormValues } from "../data/form-validator";

type Props = {};

export default function CreateMembershipPage({}: Props) {
  function onSubmit(data: MembershipFormValues) {
    console.log("SUBMITTED", data);
  }
  return (
    <MembershipForm
      onSubmit={onSubmit}
      formTitle="Create Membership"
      submitButtonText="Save"
    />
  );
}
