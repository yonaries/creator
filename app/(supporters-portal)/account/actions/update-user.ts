"use server";

import User from "@/types/user";
import axios, { AxiosError } from "axios";

export async function updateUserAccount(
  data: User,
  uid: string,
  token: string
): Promise<User> {
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${uid}`,
      {
        id: uid,
        displayName: data.displayName,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    } else {
      console.log(error);
    }
    throw error;
  }
}
