"use client";
import PostForm from "../../components/post-form";
import { toast } from "@/components/ui/use-toast";
import { PostFormValues } from "../../data/form-validator";
import { updatePost } from "../../actions/actions";
import { useTransition } from "react";

export default function EditPostPage() {
  let [isPending, startTransition] = useTransition();

  function onSubmit(data: PostFormValues) {
    // TODO: submit data to your API
    startTransition(() => updatePost(data));
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="mx-auto flex w-11/12 max-w-6xl flex-col items-center justify-between gap-4">
      <PostForm
        className="gap-4"
        onSubmit={onSubmit}
        formTitle="Update Text Post"
        defaultValues={{
          title: "This is post title.",
          content: "<p>This is paragraph.</p>",
          visibility: "public",
          membership: [],
        }}
      />
    </div>
  );
}
