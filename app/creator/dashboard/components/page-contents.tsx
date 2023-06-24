"use client";
import { useAuth } from "@/app/context/auth-context";
import PostCard from "@/components/post-card";
import TabBar from "@/components/tabbar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/Post";
import { Card } from "@tremor/react";
import MembershipTab from "./memberships-tab";

const tabBarItems = (posts: Post[], about: string, projects: any) => ({
  triggers: ["Posts", "About", "Projects", "Memberships"],
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
    <MembershipTab key={4} />,
  ],
});

const PageContents = () => {
  const { currentUserPage } = useAuth();

  return (
    <TabBar
      justify="center"
      items={tabBarItems(
        currentUserPage?.Post,
        currentUserPage?.description,
        currentUserPage?.Project
      )}
    />
  );
};

export default PageContents;
