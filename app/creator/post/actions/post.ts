"use server";

import axios, { AxiosError, AxiosResponse } from "axios";

export async function createPost(data: any, token: any) {
  try {
    const res: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/post`,
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
    if (error instanceof AxiosError) {
      console.log("ERROR :: ", error);
      console.log("error : ", error.message);
      console.log("error : ", error.response?.data);
    }
  }
}

export async function updatePost(id: string, data: any, token: string) {
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${id}`,
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

export async function deletePost(id: string, token: string) {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${id}`,
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

export async function fetchPost(id: string, token: string) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );
    if (res.status.toString().startsWith("2")) {
      console.log("POST :: ", res.data.posts);
      return res.data.posts;
    } else {
      console.log("error : ", res.data);
    }
  } catch (error) {
    console.log("error : ", error);
  }
}

export async function fetchPosts(pageId: string, token: string) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/post?pageId=${pageId}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );
    if (res.status.toString().startsWith("2")) {
      console.log("POSTS :: ", res.data.posts);
      return res.data.posts;
    } else {
      console.log("error : ", res.data.posts);
    }
  } catch (error) {
    console.log("error : ", error);
  }
}

export async function fetchPostAttachments(postId: string, token: string) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${postId}/attachment`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );
    if (res.status.toString().startsWith("2")) {
      console.log("ATTACHMENTS :: ", res.data.attachments);
      return res.data.attachments;
    } else {
      console.log("error : ", res.data.attachments);
    }
  } catch (error) {
    console.log("error : ", error);
  }
}
