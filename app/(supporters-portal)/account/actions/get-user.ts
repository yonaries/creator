"use server";

import { auth } from "@/config/firebase";
import User from "@/types/user";
import axios, { AxiosError } from "axios";
import { onAuthStateChanged, getIdToken, updateProfile } from "firebase/auth";

export const getUser = async ({
  uid,
  token,
}: {
  uid: string;
  token: string;
}): Promise<User> => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${uid}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const user = res.data.user as User;
    const currentUser = auth.currentUser;
    if (currentUser) {
      await updateProfile(currentUser, {
        displayName: user.displayName,
        photoURL: user.profileImage,
      });
    }
    return res.data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    } else {
      console.log(error);
    }

    throw error;
  }
};
