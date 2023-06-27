"use server";
import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

export async function donateCreator({
  donorName,
  donorEmail,
  itemId,
  pageId,
  quantity = 1,
  message = "hello",
}: {
  donorName: string;
  donorEmail: string;
  itemId: string;
  pageId: string;
  quantity?: number;
  message?: string;
}) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/donation`,
      {
        donorName,
        donorEmail,
        itemId,
        quantity,
        message,
        pageId,
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response);
    } else console.log(error);
    throw error;
  }
}
