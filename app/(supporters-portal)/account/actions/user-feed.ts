"use server";
import axios, { AxiosError } from "axios";
import { Post } from "@/types/Post";

export async function fetchUserFeed(token: string): Promise<Post[]> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/feed`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.posts as Post[];
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.status);
      console.log(error.response?.data.error.message);
    } else console.log(error);
  }
  return [];
}
