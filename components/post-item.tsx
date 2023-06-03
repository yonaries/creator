"use client";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PostType } from "@/types/PostType";
import { PaperclipIcon, Pencil, PlayCircle, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { cva } from "class-variance-authority";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.extend(relativeTime);

const captionVariants = cva("absolute top-0 w-full h-full rounded-md", {
  variants: {
    showMore: {
      true: "hidden",
      false:
        "bg-gradient-to-b from-transparent to-gray-50 opacity-90 dark:to-gray-950",
    },
  },
});

const thumbnailVariants = cva("w-full h-80", {
  variants: {
    type: {
      video: "absolute top-0",
      text: "relative mb-2",
      image: "relative",
      audio: "relative",
      file: "relative",
    },
  },
});

type Props = {
  post: PostType;
};

const PostItem = ({ post }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);

  const deletePostHandler = () => {};
  const editPostHandler = () => {};

  const showMoreHandler = () => {
    setShowMore(!showMore);
  };
  const thumbnailOnClickHandler = (post: PostType) => {
    if (post.type.toLowerCase() === "video" && videoRef.current !== null) {
      if (thumbnailRef.current !== null)
        thumbnailRef.current.style.display = "none";
      videoRef.current.play();
    } else if (post.type.toLowerCase() === "image") {
      // window.open(post.thumbnail, "_blank");
    }
  };

  const determineFileType = (file: string, type: string) => {
    switch (type.toLowerCase()) {
      case "image":
        return (
          <Image
            src={file}
            alt={file}
            width={600}
            height={320}
            className="w-full h-80 object-cover rounded-t-sm mb-2"
          />
        );
      case "video":
        return (
          <video
            src={file}
            ref={videoRef}
            controls
            loop={false}
            className="w-full h-80 object-cover rounded-t-sm mb-2"
          />
        );
      case "audio":
        return (
          <audio src={file} controls loop={false} className="w-full mb-3" />
        );
      default:
        break;
    }
  };

  return (
    <Card className=" my-6 mx-auto max-w-2xl w-11/12 border-none">
      <CardHeader className="pt-0 px-0">
        <div className="relative w-full">
          {post.thumbnail &&
            (post.type.toLowerCase() === "video" ||
              post.type.toLowerCase() === "text") && (
              <div
                className={thumbnailVariants({ type: post.type })}
                // className="absolute top-0 w-full h-80"
                ref={thumbnailRef}
                onClick={() => thumbnailOnClickHandler(post)}
              >
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={600}
                  height={320}
                  className="w-full h-80 object-cover rounded-t-sm mb-2 cursor-pointer absolute top-0 left-0 z-10 "
                />
                {post.thumbnail && post.type.toLowerCase() === "video" && (
                  <PlayCircle
                    size={64}
                    className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  />
                )}
              </div>
            )}

          {post.file && determineFileType(post.file, post.type)}
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <CardTitle className="text-3xl font-bold mb-2">
            {post.title}
          </CardTitle>
          <CardDescription className=" uppercase font-semibold text-sm">
            {dayjs(post.createdAt).fromNow()}
          </CardDescription>
        </div>
        {post.caption && (
          <>
            <div className="relative">
              {showMore ? post.caption : post.caption.slice(0, 400)}
              <div className={captionVariants({ showMore })}></div>
            </div>
            <Button
              variant="link"
              className=" capitalize p-0 font-bold text-blue-500"
              onClick={showMoreHandler}
            >
              {showMore ? "show less" : "show more"}
            </Button>
          </>
        )}

        {post.Attachment.length > 0 && (
          <div className="flex flex-col">
            <p className="font-semibold">Attachments</p>
            <div className="flex">
              {post.Attachment.map((attachment, index) => (
                <a
                  key={attachment.id}
                  href={attachment.url}
                  target="_blank"
                  rel="noreferrer"
                  className="capitalize my-1 mr-3 hover:underline"
                >
                  <PaperclipIcon size={20} className="inline mr-1" />
                  {`file ${index + 1}`}
                </a>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Trash
          className="mr-4 my-2 cursor-pointer"
          onClick={deletePostHandler}
        />
        <Pencil
          className="mr-4 my-2 cursor-pointer"
          onClick={editPostHandler}
        />
      </CardFooter>
    </Card>
  );
};

export default PostItem;
