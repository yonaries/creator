"use server";

import { Post } from "@/types/Post";
import axios, { AxiosError } from "axios";

export const fetchPagePosts = async (pageId: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/sub/${pageId}`
    );
    return response.data.posts as Post[];
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.status);
      console.log(error.response?.data.error.message);
    } else console.log(error);
    throw error;
  }
};
