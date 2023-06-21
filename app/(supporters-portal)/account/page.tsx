import { Separator } from "@/components/ui/separator";
import PostsList from "./components/post-list";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "react-error-boundary";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="p-10">
      <span className="text-3xl font-bold">Feed</span>
      <Separator className="my-3" />
      <PostsList />
    </div>
  );
};

export default Page;
