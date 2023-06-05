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
import { Heart, PaperclipIcon, Pencil, PlayCircle, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { cva } from "class-variance-authority";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./react-hook-form/form";

dayjs.extend(relativeTime);

type Props = {
  post: PostType;
};

const PostItem = ({ post }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const [isLiked, setIsLiked] = useState(false);

  const deletePostHandler = () => {
    // TODO: handle delete post
  };

  const editPostHandler = () => {
    // TODO: handle edit post
  };

  const commentsCounterOnClickHandler = () => {
    // TODO: handle comments counter click event
  };

  const likesCounterOnClickHandler = () => {
    // TODO: handle likes counter click event
    setIsLiked(!isLiked);
  };

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
            controlsList="nodownload"
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
    <Card className=" my-6 mx-auto max-w-2xl w-11/12">
      <CardHeader className="pt-0 px-0">
        <div className="relative w-full">
          {post.thumbnail &&
            (post.type.toLowerCase() === "video" ||
              post.type.toLowerCase() === "text") && (
              <div
                className={thumbnailVariants({ type: post.type })}
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
                  <PaperclipIcon className="inline mr-1 w-4 h-5" />
                  {`file ${index + 1}`}
                </a>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex-col">
        <div className="flex justify-start items-center w-full">
          <Button
            variant="link"
            onClick={commentsCounterOnClickHandler}
            className="font-bold text-green-500 pl-0 hover:no-underline hover:text-green-600"
          >
            <span className="mr-1">{451} </span> Comments
          </Button>
          <Button
            variant="link"
            onClick={likesCounterOnClickHandler}
            className={likesVariant({ isLiked })}
          >
            <Heart className="mr-1 w-4 h-5 fill-inherit" />
            {451} Likes
          </Button>
          <div className="flex-1 flex justify-end items-center">
            <Pencil
              className="mr-4 my-2 cursor-pointer w-4 h-5 hover:fill-blue-500 text-blue-500"
              onClick={editPostHandler}
            />
            <Trash
              className="mr-4 my-2 cursor-pointer w-4 h-5 hover:fill-red-500 text-red-500"
              onClick={deletePostHandler}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

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

const likesVariant = cva(
  "font-bold hover:no-underline hover:text-red-600 hover:fill-red-600",
  {
    variants: {
      isLiked: {
        true: "text-red-500 fill-red-500",
        false: "text-gray-500 fill-gray-500",
      },
    },
  }
);

export default PostItem;
