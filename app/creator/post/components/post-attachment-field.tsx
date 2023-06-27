import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { PostFormValues } from "../data/form-validator";
import { Input } from "@/components/ui/input";
import { PaperclipIcon, X } from "lucide-react";
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
                        files[i] = e.target.files[i];
                      field.value && field.onChange([...field.value, ...files]);
                    }
                  }}
                />
              </Button>
            </FormControl>
          </div>
          <div className="flex w-full flex-col gap-2">
            {field.value &&
              field.value.map((file, index) => (
                <div
                  className="relative flex items-center justify-between"
                  key={`${file.name}${index}`}
                >
                  <a
                    href={URL.createObjectURL(file)}
                    target="_blank"
                    rel="noreferrer"
                    className="my-1 mr-3 capitalize hover:underline"
                  >
                    <PaperclipIcon className="mr-1 inline h-5 w-4" />
                    {`file ${index + 1}`}
                  </a>
                  <Button
                    type="button"
                    onClick={() => {
                      let filteredFiles = field.value || [];
                      filteredFiles = filteredFiles.filter(
                        (file, ind) => ind !== index
                      );
                      field.onChange(filteredFiles);
                    }}
                    className="absolute -top-3 right-0 flex aspect-square h-full cursor-pointer items-center justify-center rounded-full bg-red-400 p-0 hover:bg-red-500"
                  >
                    <X className="h-4 w-4 text-gray-100 " />
                  </Button>
                </div>
              ))}
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
