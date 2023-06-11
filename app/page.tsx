import Image from "next/image";
import AuthenticationPage from "@/app/authentication/page";
import PostCard from "@/components/post-card";
import { Post } from "@/types/Post";
import { CONTENT } from "@/constants/CONTENT";
import { POST_STATUS } from "@/constants/POST_STATUS";

export default function Home() {
  const posts: Post[] = [
    {
      id: "1",
      title: "text with attachment",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.TEXT,
      pageId: "1",
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl.",
      Attachment: [
        {
          id: "1",
          url: "https://images.pexels.com/photos/16359868/pexels-photo-16359868/free-photo-of-scenic-photo-of-two-men-in-a-cave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "2",
          url: "https://images.pexels.com/photos/16359868/pexels-photo-16359868/free-photo-of-scenic-photo-of-two-men-in-a-cave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    },
    {
      id: "2",
      title: "only text",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.TEXT,
      pageId: "1",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl.",
    },
    {
      id: "3",
      title: "text with thumbnail",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.TEXT,
      pageId: "1",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      thumbnail:
        "https://images.pexels.com/photos/16359868/pexels-photo-16359868/free-photo-of-scenic-photo-of-two-men-in-a-cave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "4",
      title:
        "text with video file and thumbnail(thumbnail is shown until clicked)",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.VIDEO,
      pageId: "1",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      file: "https://file-examples.com/storage/fef677cdf46481c8d96f8cd/2017/04/file_example_MP4_480_1_5MG.mp4",
      thumbnail:
        "https://images.pexels.com/photos/16359868/pexels-photo-16359868/free-photo-of-scenic-photo-of-two-men-in-a-cave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "5",
      title: "text with image file and thumbnail(file is shown)",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.IMAGE,
      pageId: "6",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      thumbnail:
        "https://images.pexels.com/photos/16359868/pexels-photo-16359868/free-photo-of-scenic-photo-of-two-men-in-a-cave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      file: "https://images.pexels.com/photos/16539793/pexels-photo-16539793/free-photo-of-sanmigueldeallende.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "6",
      title: "text with only image file",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.IMAGE,
      pageId: "1",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      file: "https://images.pexels.com/photos/16539793/pexels-photo-16539793/free-photo-of-sanmigueldeallende.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "7",
      title: "only video file",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.VIDEO,
      pageId: "1",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      file: "https://file-examples.com/storage/fef677cdf46481c8d96f8cd/2017/04/file_example_MP4_480_1_5MG.mp4",
    },
    {
      id: "8",
      title: "only video file with thumbnail(thumbnail is shown until clicked)",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.VIDEO,
      pageId: "1",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      file: "https://file-examples.com/storage/fef677cdf46481c8d96f8cd/2017/04/file_example_MP4_480_1_5MG.mp4",
    },
    {
      id: "10",
      title: "text with only video file",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.VIDEO,
      pageId: "1",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      file: "https://file-examples.com/storage/fef677cdf46481c8d96f8cd/2017/04/file_example_MP4_480_1_5MG.mp4",
    },
    {
      id: "11",
      title:
        "text with video file and thumbnail(thumbnail is shown until clicked)",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.VIDEO,
      pageId: "1",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      file: "https://file-examples.com/storage/fef677cdf46481c8d96f8cd/2017/04/file_example_MP4_480_1_5MG.mp4",
      thumbnail:
        "https://images.pexels.com/photos/16359868/pexels-photo-16359868/free-photo-of-scenic-photo-of-two-men-in-a-cave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "12",
      title:
        "text with audio file and thumbnail(only file is shown, thumbnail is hidden)",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl. Quisque euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nunc sit amet nisl.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.AUDIO,
      pageId: "1",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      file: "https://file-examples.com/storage/fedb66d828647a2629b3efb/2017/11/file_example_MP3_700KB.mp3",
      thumbnail:
        "https://images.pexels.com/photos/16359868/pexels-photo-16359868/free-photo-of-scenic-photo-of-two-men-in-a-cave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "13",
      title: "only audio file",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: CONTENT.AUDIO,
      pageId: "1",
      Attachment: [],
      status: POST_STATUS.ACTIVE,
      scheduled: new Date().toISOString(),
      file: "https://file-examples.com/storage/fedb66d828647a2629b3efb/2017/11/file_example_MP3_700KB.mp3",
    },
  ];
  return (
    <div>
      {posts.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </div>
  );
}
