"use client";
import PostCard from "@/components/post-card";
import TabBar from "@/components/tabbar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/Post";
import { Card } from "@tremor/react";
import useSWR from "swr";
import { fetchPagePosts } from "../actions/get-page-posts";

type Props = {
  page: any;
};

const tabBarItems = (posts: Post[], about: string, projects: any) => ({
  triggers: ["Posts", "About", "Projects"],
  contents: [
    <div key={1}>
      {posts && posts.length > 0 ? (
        posts.map((item) => <PostCard key={item.id} post={item} />)
      ) : (
        <div className="flex w-full justify-center py-2 text-lg font-bold">
          No posts
        </div>
      )}
    </div>,
    <div key={2} className="my-6 flex justify-center">
      <Card className="w-11/12 max-w-2xl">
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">
            {about ? about : "No description provided"}
          </p>
        </CardContent>
      </Card>
    </div>,
    <div key={3}>
      {projects && projects.length > 0 ? (
        projects.map((item: any) => <PostCard key={item.id} post={item} />)
      ) : (
        <div className="flex w-full justify-center py-2 text-lg font-bold">
          No projects
        </div>
      )}
    </div>,
  ],
});

const PageContents = ({ page }: Props) => {
  const { data, error, isLoading } = useSWR(fetchPagePosts(page.pageId));

  if (error) {
    return (
      <div className="w-full flex-col space-y-10">
        <Card className="w-11/12 max-w-2xl">
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              {page.about ? page.about : "No description provided"}
            </p>
          </CardContent>
        </Card>
        <span>
          Display Page Memberships here. This is a placeholder for now.
        </span>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <TabBar justify="center" items={tabBarItems(data!, page.about, data)} />
  );
};

export default PageContents;
