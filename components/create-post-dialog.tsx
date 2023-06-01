"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Edit, File, ImageIcon, Mic, Text, Video } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CONTENT } from "@/constants/CONTENT";
import { useRouter } from "next/navigation";

type Props = {};

const CreatePostDialog = (props: Props) => {
  const router = useRouter();
  const labelOnClickHandler = (item: string) => {
    router.push(`/post/create/${item.toLowerCase()}`);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="space-x-4">
          <Edit className="w-4 h-4 mr-4" />
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            What are you creating?
          </DialogTitle>
        </DialogHeader>
        <RadioGroup className="grid grid-cols-3 gap-4">
          {Object.keys(CONTENT).map((item) => (
            <Label
              key={item}
              htmlFor={item}
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer capitalize"
              onClick={() => labelOnClickHandler(item)}
            >
              <RadioGroupItem
                value={item}
                className=" hidden justify-between"
              />
              {getIcon(item)}
              <span className=" mt-2">{item.toLocaleLowerCase()}</span>
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
      return <Mic />;
    case "file":
      return <File />;
  }
};

export default CreatePostDialog;
