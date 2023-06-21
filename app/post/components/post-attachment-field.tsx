import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form";
import { Control } from "react-hook-form";
import { PostFormValues } from "../data/form-validator";
import { Input } from "@/components/ui/input";
import { PaperclipIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  fieldName: keyof PostFormValues;
  controller: Control<PostFormValues, any>;
  fieldLabel: string;
};

export default function PostAttachmentField({
  controller,
  fieldName,
  fieldLabel,
}: Props) {
  return (
    <FormField
      control={controller}
      name={"attachments"}
      render={({ field }) => (
        <FormItem className="my-2">
          <div className="flex items-center justify-between">
            <FormLabel className="px-2">{fieldLabel}</FormLabel>

            <FormControl>
              <Button
                variant="link"
                type="button"
                className="relative cursor-pointer"
              >
                Upload
                <Input
                  type="file"
                  className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
                  placeholder="Select Attachment"
                  multiple
                  onChange={(e) => {
                    let files = [];
                    if (e.target.files) {
                      for (let i = 0; i < e.target.files.length; i++)
                        files[i] = URL.createObjectURL(e.target.files[i]);
                      field.value && field.onChange([...field.value, ...files]);
                    }
                  }}
                />
              </Button>
            </FormControl>
          </div>
          <div className="flex">
            {field.value &&
              field.value.map((url, index) => (
                <a
                  key={`${url}${index}`}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="my-1 mr-3 capitalize hover:underline"
                >
                  <PaperclipIcon className="mr-1 inline h-5 w-4" />
                  {`file ${index + 1}`}
                </a>
              ))}
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
