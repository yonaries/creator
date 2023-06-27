"use client";
import { useAuth } from "@/app/context/auth-context";
import PostCard from "@/components/post-card";
import TabBar from "@/components/tabbar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@tremor/react";
import MembershipTab from "./memberships-tab";
import PostsTab from "./posts-tab";

const tabBarItems = (about: string, projects: any) => ({
  triggers: ["Posts", "About", "Projects", "Memberships"],
  contents: [
    <PostsTab key={1} />,
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
        projects.map((item: any) => (
          <PostCard key={item.id} posts={projects} post={item} />
        ))
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
        currentUserPage?.description,
        currentUserPage?.Project
      )}
    />
  );
};

export default PageContents;
