"use server";
import axios, { AxiosError } from "axios";

export async function subscribeMembership({
  subscriberId,
  membershipId,
}: {
  subscriberId: string;
  membershipId: string;
}) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription`,
      {
        membershipId,
        subscriberId,
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
