import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form";
import { Control } from "react-hook-form";
import { PostFormValues } from "../data/form-validator";
import { useRef } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

type Props = {
  fieldName: keyof PostFormValues;
  controller: Control<PostFormValues, any>;
  acceptedFiles: ("image" | "video" | "audio")[];
  fieldLabel: string;
};

export default function PostFileSelectorField({
  controller,
  fieldName,
  acceptedFiles,
  fieldLabel,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const determineFileType = (file: string, type: string) => {
    switch (type.toLowerCase()) {
      case "image":
        return (
          <Image
            src={file}
            alt={file}
            width={600}
            height={320}
            className="mb-2 h-80 w-full rounded-t-sm object-cover"
            onContextMenu={(e) => e.preventDefault()}
          />
        );
      case "video":
        return (
          <video
            preload="metadata"
            src={file}
            ref={videoRef}
            controls
            loop={false}
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="mb-2 h-80 w-full rounded-t-sm object-cover"
          />
        );
      case "audio":
        return (
          <div onContextMenu={(e) => e.preventDefault()} className="px-5 pt-6">
            <audio
              onContextMenu={(e) => e.preventDefault()}
              src={file}
              controls
              loop={false}
              className="mb-3 w-full"
            />
          </div>
        );
      default:
        break;
    }
  };
  return (
    <FormField
      control={controller}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          {field.value && determineFileType(field.value.url, field.value.type)}
          <FormLabel className="px-2">{fieldLabel}</FormLabel>
          <FormControl>
            <Input
              type="file"
              className="cursor-pointer border-muted px-4 dark:border-slate-600"
              accept={
                acceptedFiles
                  ? acceptedFiles.join("/*,").concat("/*")
                  : "image/*,video/*,audio/*"
              }
              placeholder="Select File"
              onChange={(e) => {
                if (e.target.files) {
                  field.onChange({
                    url: URL.createObjectURL(e.target.files[0]),
                    type: e.target.files[0].type.split("/")[0],
                  });
                }
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
