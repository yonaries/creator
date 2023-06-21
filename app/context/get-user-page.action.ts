"use server";
import axios, { AxiosError } from "axios";

export async function fetchUserPage(uid: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/page/owner/${uid}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.status);
      console.log(error.response?.data.error.message);
    } else console.log(error);
  }
}
