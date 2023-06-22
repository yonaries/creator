"use server";

import axios, { AxiosError } from "axios";

export const fetchPagePosts = async (pageId: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/?pageId=${pageId}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.status);
      console.log(error.response?.data.error.message);
    } else console.log(error);
  }
};
