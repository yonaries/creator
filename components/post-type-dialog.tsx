"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { File, FileAudio, ImageIcon, Pencil, Text, Video } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CONTENTTYPE } from "@/constants/CONTENTTYPE";
import { useRouter } from "next/navigation";

type Props = {};

const PostTypeDialog = (props: Props) => {
  const router = useRouter();
  const labelOnClickHandler = (item: string) => {
    router.push(`/post/create/${item.toLowerCase()}`);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Pencil className="mr-2 h-4 w-4" />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What are you creating?</DialogTitle>
        </DialogHeader>
        <RadioGroup className="grid grid-cols-3 gap-4">
          {Object.keys(CONTENTTYPE).map((item, index) => (
            <Label
              key={item}
              htmlFor={item}
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer capitalize w-24 aspect-square"
              onClick={() => labelOnClickHandler(item)}
            >
              <RadioGroupItem value={item} className=" hidden" />
              {getIcon(item)}
              {item.toLocaleLowerCase()}
            </Label>
          ))}
        </RadioGroup>
      </DialogContent>
    </Dialog>
  );
};

const getIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "text":
      return <Text />;
    case "image":
      return <ImageIcon />;
    case "video":
      return <Video />;
    case "audio":
      return <FileAudio />;
    case "file":
      return <File />;
  }
};

export default PostTypeDialog;
