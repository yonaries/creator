import CoverImage from "@/app/creator/dashboard/components/cover-image";
import ShareDialog from "@/app/creator/dashboard/components/share-dialog";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import Link from "next/link";
import { getPageData } from "../actions/get-page-by-url";
import PageContents from "./page-contents";
import { Label } from "@/components/ui/label";

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
        <span className="mt-5 text-xl font-semibold">{page?.name}</span>
        <Label className="mb-5 text-lg text-slate-500">{page?.headline}</Label>
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
        <PageContents page={page} />
      </div>
    </div>
  );
}
