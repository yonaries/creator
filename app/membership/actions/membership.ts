"use server";

import { Membership, MembershipWithoutId } from "@/types/Membership";
import axios from "axios";

async function createMembership(data: MembershipWithoutId, token: string) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/membership`,
      data,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );
    if (res.status.toString().startsWith("2")) {
      return res.data;
    } else {
      console.log("error : ", res);
    }
  } catch (error) {
    console.log("error : ", error);
  }
}

async function updateMembership(data: Membership, token: string) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/membership/${data.id}`,
      data,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );
    if (res.status.toString().startsWith("2")) {
      return res.data;
    } else {
      console.log("error : ", res);
    }
  } catch (error) {
    console.log("error : ", error);
  }
}
