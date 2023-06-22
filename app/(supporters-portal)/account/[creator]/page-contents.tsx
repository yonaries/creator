"use client";
import PostCard from "@/components/post-card";
import TabBar from "@/components/tabbar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/Post";
import { Card } from "@tremor/react";
import useSWR from "swr";
import { fetchPagePosts } from "../actions/get-page-posts";

type Props = {
  pageId: string;
  about: string;
};
const tabBarItems = (posts: Post[], about: string, projects: string) => ({
  triggers: ["Posts", "About", "Projects"],
  contents: [
    <div key={1}>
      {posts.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </div>,
    <div key={2} className="my-6 flex justify-center">
      <Card className="w-11/12 max-w-2xl">
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos
            reprehenderit voluptatem quas quidem doloribus. Quisquam voluptatum,
            voluptate, quibusdam, quia voluptas quod quos reprehenderit
            voluptatem quas quidem doloribus.
          </p>
        </CardContent>
      </Card>
    </div>,
    <div key={3}>
      {posts.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </div>,
  ],
});

const PageContents = ({ pageId, about }: Props) => {
  const { data, error, isLoading } = useSWR(pageId, fetchPagePosts);

  if (!error) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <TabBar justify="center" items={tabBarItems(data, about, data)} />;
};

export default PageContents;
