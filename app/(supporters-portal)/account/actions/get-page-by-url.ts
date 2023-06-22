"use server";

import axios, { AxiosError } from "axios";

type Page = {
  [key: string]: any;
};

export const getPageData = async (url: string) => {
  try {
    const page = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}page/url/${url}`
    );
    return page.data as Page;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.status);
      console.log(error.response?.data.error.message);
    } else console.log(error);
  }
};
