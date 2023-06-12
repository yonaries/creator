import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/react-hook-form/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const commentFormSchema = z.object({
  comment: z.string().min(1, {
    message: "Comment must be at least 1 character.",
  }),
});

type CommentFormValues = z.infer<typeof commentFormSchema>;

type Props = {};

const PostCommentForm = (props: Props) => {
  const form = useForm<CommentFormValues>({
    resolver: zodResolver(commentFormSchema),
  });

  const commentFormOnSubmit = () => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(commentFormOnSubmit)}
        className="flex gap-x-2"
      >
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl className="w-full">
                <Input placeholder="Join the conversation..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="secondary"
          className="bg-green-500 text-white hover:bg-green-600"
        >
          Comment
        </Button>
      </form>
    </Form>
  );
};

export default PostCommentForm;
