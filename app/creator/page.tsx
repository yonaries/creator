import { posts } from "@/assets/data/post-card-test";
import PostCard from "@/components/post-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import ColorPicker from "./dashboard/components/color-picker";
import CoverImage from "./dashboard/components/cover-image";
import DashboardMoreMenu from "./dashboard/components/more-menu";
import ShareDialog from "./dashboard/components/share-dialog";
import TabBar from "@/components/tabbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Link from "next/link";

const metadata: Metadata = {
  title: "My Page - Jegool",
  description: "",
};

const tabBarItems = {
  triggers: ["Overview", "About", "Posts"],
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
};

const getPageData = async () => {
  //TODO: fetch page data from server
  try {
  } catch (error) {}
};

export default async function Dashboard() {
  return (
    <div>
      <CoverImage />
      <div className="flex w-full flex-col items-center p-10">
        <Avatar className="-mt-20 h-[100px] w-[100px]">
          <AvatarImage src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
        <div className="flex w-full justify-between">
          <ColorPicker />
          <div className="space-x-3">
            <ShareDialog />
            <DashboardMoreMenu />
          </div>
        </div>
        <span className="my-5 text-xl font-semibold">Creators Name</span>
        <div className="my-5 flex space-x-4">
          <Link href="#">
            <Icons.twitter className="h-5 w-5" />
          </Link>
          <Link href="#">
            <Icons.instagram className="h-5 w-5" />
          </Link>
          <Link href="#">
            <Icons.youtube className="h-5 w-5" />
          </Link>
        </div>
        <TabBar justify="center" items={tabBarItems} />
      </div>
    </div>
  );
}
