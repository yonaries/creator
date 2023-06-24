"use server";

import axios, { AxiosError } from "axios";

export const searchPages = async (query: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/page/search/${query}`
    );

    return response.data.pages;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    } else console.error(error);
    throw error;
  }
};
