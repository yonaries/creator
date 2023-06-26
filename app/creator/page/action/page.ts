"use server";
/* eslint-disable */
import axios from "axios";

export async function fetchPageById(id: string, token: string) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/page/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );
    if (res.status.toString().startsWith("2")) {
      console.log("PAGE :: ", res.data.page);
      return res.data.page;
    } else {
      console.log("error : ", res.data.page);
    }
  } catch (error) {
    console.log("error : ", error);
  }
}

export async function updatePage(id: string, data: any, token: string) {
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/page/${id}`,
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
