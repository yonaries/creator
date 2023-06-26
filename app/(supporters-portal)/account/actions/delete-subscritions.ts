"use server";
import axios, { AxiosError } from "axios";

export const deleteSubscription = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription/${id}`
    );
    return response.data.subscription;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response);
    } else console.log(error);
    throw error;
  }
};
