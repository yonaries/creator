import { posts } from "@/assets/data/post-card-test";
import PostCard from "@/components/post-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import ColorPicker from "./dashboard/components/color-picker";
import CoverImage from "./dashboard/components/cover-image";
import DashboardMoreMenu from "./dashboard/components/more-menu";
import ShareDialog from "./dashboard/components/share-dialog";

const metadata: Metadata = {
  title: "My Page - Jegool",
  description: "",
};

export default function Dashboard() {
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
        <div>
          {posts.map((item) => (
            <PostCard key={item.id} post={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
