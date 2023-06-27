import { useAuth } from "@/app/context/auth-context";
import useSWR, { mutate } from "swr";
import { fetchPosts } from "../../post/actions/post";
import PostCard from "@/components/post-card";
import { Post } from "@/types/Post";
import LoadingSpinner from "@/components/loading-page-spinner";
import { useEffect } from "react";

type Props = {};

export default function PostsTab({}: Props) {
  const { currentUserPage, idToken } = useAuth();
  const { data, error, isLoading } = useSWR(
    "posts",
    () => fetchPosts(currentUserPage?.id, idToken!),
    {
      revalidateOnFocus: true,
      keepPreviousData: false,
    }
  );

  useEffect(() => {
    mutate("posts", () => fetchPosts(currentUserPage?.id, idToken!));
  }, [currentUserPage, idToken]);

  if (isLoading || !currentUserPage || !data) return <LoadingSpinner />;

  return (
    <div>
      {data && data.length > 0 ? (
        data.map((item: Post) => (
          <PostCard key={item.id} post={item} posts={data} />
        ))
      ) : (
        <div className="flex w-full justify-center py-2 text-lg font-bold">
          No posts
        </div>
      )}
    </div>
  );
}
