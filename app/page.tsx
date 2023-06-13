import Image from "next/image";
import AuthenticationPage from "@/app/authentication/page";
import PostCard from "@/components/post-card";
import { posts } from "@/assets/data/post-card-test";

export default function Home() {
  return (
    <div>
      {posts.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </div>
  );
}
