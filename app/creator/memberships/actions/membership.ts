"use server";

import { Membership } from "@/types/Membership";
import axios from "axios";

export async function createMembership(data: any, token: any) {
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
      console.log("error : ", res.data);
    }
  } catch (error) {
    console.log("error : ", error);
  }
}

export async function updateMembership(id: string, data: any, token: string) {
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/membership/${id}`,
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

export async function deleteMembership(id: string, token: string) {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/membership/${id}`,
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
      console.log("error : ", res.data);
    }
  } catch (error) {
    console.log("error : ", error);
  }
}

export async function fetchMemberships(pageId: string, token: string) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/page/${pageId}/memberships`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );
    if (res.status.toString().startsWith("2")) {
      console.log("MEMBERSHIPS :: ", res.data.memberships);
      return res.data.memberships;
    } else {
      console.log("error : ", res.data);
    }
  } catch (error) {
    console.log("error : ", error);
  }
}

export async function fetchMembership(id: string, token: string) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/membership/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );
    if (res.status.toString().startsWith("2")) {
      console.log("MEMBERSHIP :: ", res.data.membership);
      return res.data.membership;
    } else {
      console.log("error : ", res.data.membership);
    }
  } catch (error) {
    console.log("error : ", error);
  }
}
