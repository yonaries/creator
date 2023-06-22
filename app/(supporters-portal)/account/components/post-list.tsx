"use client";
import { useAuth } from "@/app/context/auth-context";
import Loading from "@/components/loading-page";
import PostCard from "@/components/post-card";
import { Post } from "@/types/Post";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import useSWR from "swr";
import { fetchUserFeed } from "../actions/user-feed";

type Props = {};

const PostsList = (props: Props) => {
  const { idToken } = useAuth();
  const { data, error, isLoading } = useSWR(fetchUserFeed(idToken!));
  const posts = data as Post[];
  console.log("posts=>", posts);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !posts || posts.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center">
        <span className="text-xl font-bold">
          Oops! Seems like there is no feed to show.
          <br />
          Try joining some memberships.
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {posts.map((item) => (
        <PostCard key={item.id} post={item}>
          <div className="flex items-center space-x-3 px-4 py-2">
            <Avatar className="w-10">
              <AvatarImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png" />
              <AvatarFallback>{item.page.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{item.page.name}</span>
          </div>
        </PostCard>
      ))}
    </div>
  );
};

export default PostsList;
