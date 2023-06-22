"use client";
import MembershipForm from "../../components/membership-form";
import { MembershipFormValues } from "../../data/form-validator";

type Props = {};

export default function EditMembershipPage({}: Props) {
  function onSubmit(data: MembershipFormValues) {
    console.log("SUBMITTED", data);
  }
  return (
    <MembershipForm
      onSubmit={onSubmit}
      formTitle="Update Membership"
      submitButtonText="Update"
      values={{
        title: "Membership-1",
        fee: 100,
        description: "This is a description",
        coverImage: "https://picsum.photos/600/300",
        benefit: [
          {
            title: "Benefit 1",
            description: "This is a description",
          },
          {
            title: "Benefit 2",
            description: "This is a description",
          },
        ],
      }}
    />
  );
}
