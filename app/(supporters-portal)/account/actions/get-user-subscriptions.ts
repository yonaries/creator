"use server";
import axios, { AxiosError } from "axios";

export const getUserSubscriptions = async ({
  userId,
  token,
}: {
  userId: string;
  token: string;
}) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/subscriptions`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.subscriptions;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response);
    } else console.log(error);
    throw error;
  }
};
