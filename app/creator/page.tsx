import { Metadata } from "next";
import CoverImage from "./dashboard/components/cover-image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ColorPicker from "./dashboard/components/color-picker";
import ShareDialog from "./dashboard/components/share-dialog";
import DashboardMoreMenu from "./dashboard/components/more-menu";

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
          <AvatarImage src="https://play-lh.googleusercontent.com/fXQVXTma1ENwAFjsxJ4IT6GntBr3RxWP3HMSLbNdvycl-0tscOQEeJIEAmehcNOt5hCp=w240-h480-rw" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
        <div className="flex w-full justify-between">
          <ColorPicker />
          <div className="space-x-3">
            <ShareDialog />
            <DashboardMoreMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
