"use client";
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
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {
  fieldName: keyof PostFormValues;
  controller: Control<PostFormValues, any>;
  acceptedFiles?: ("image" | "video" | "audio")[];
  fieldLabel: string;
};

export default function PostFileSelectorField({
  controller,
  fieldName,
  acceptedFiles,
  fieldLabel,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const determineFileType = (fileData: any) => {
    if (fileData) {
      let newFile = new File([fileData], fileData.name, { ...fileData });
      switch (fileData.type.toLowerCase().split("/")[0]) {
        case "image":
          return (
            <Image
              src={URL.createObjectURL(fileData) || ""}
              alt={fileData.name}
              width={600}
              height={320}
              className="mb-2 h-80 w-full rounded-sm object-cover"
              onContextMenu={(e) => e.preventDefault()}
            />
          );
        case "video":
          return (
            <video
              preload="metadata"
              src={URL.createObjectURL(fileData) || ""}
              ref={videoRef}
              controls
              loop={false}
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              className="mb-2 h-80 w-full rounded-sm object-cover"
            />
          );
        case "audio":
          return (
            <div
              onContextMenu={(e) => e.preventDefault()}
              className="px-5 pt-6"
            >
              <audio
                onContextMenu={(e) => e.preventDefault()}
                src={URL.createObjectURL(fileData)}
                controls
                loop={false}
                className="mb-3 w-full"
              />
            </div>
          );
        default:
          break;
      }
    }
  };
  return (
    <FormField
      control={controller}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="relative my-2">
          {field.value && (
            <Button
              type="button"
              onClick={() => {
                field.onChange(undefined);
              }}
              className="absolute -top-3 right-0 flex aspect-square cursor-pointer items-center justify-center rounded-full bg-red-400 p-2 hover:bg-red-500"
            >
              <X className="h-4 w-4 text-gray-100 " />
            </Button>
          )}
          <FormLabel className="px-2">{fieldLabel}</FormLabel>
          {determineFileType(field.value)}

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
                  field.onChange(e.target.files[0]);
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
