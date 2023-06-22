import ColorPicker from "@/app/creator/dashboard/components/color-picker";
import CoverImage from "@/app/creator/dashboard/components/cover-image";
import DashboardMoreMenu from "@/app/creator/dashboard/components/more-menu";
import ShareDialog from "@/app/creator/dashboard/components/share-dialog";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios, { AxiosError } from "axios";
import { Metadata } from "next";
import Link from "next/link";
import PageContents from "./page-contents";
import { getPageData } from "../actions/get-page-by-url";

const metadata: Metadata = {
  title: "My Page - Jegool",
  description: "",
};

type Page = {
  [key: string]: any;
};

export default async function CreatorProfile({
  params,
}: {
  params: { creator: string };
}) {
  const page = await getPageData(params.creator);
  if (!page) {
    return (
      <div className="flex h-96 flex-col items-center justify-center">
        <span className="text-6xl font-semibold">404</span>
        <span className="text-2xl font-semibold">Page not found</span>
      </div>
    );
  }

  return (
    <div>
      <CoverImage src={page?.profileImage} />
      <div className="flex w-full flex-col items-center p-10">
        <Avatar className="-mt-20 h-[100px] w-[100px]">
          <AvatarImage src={page?.profileImage} />
          <AvatarFallback>{page?.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex w-full justify-end">
          <div className="space-x-3">
            <ShareDialog />
          </div>
        </div>
        <span className="my-5 text-xl font-semibold">{page?.name}</span>
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
        <PageContents pageId={page?.id} about={page?.about} />
      </div>
    </div>
  );
}
