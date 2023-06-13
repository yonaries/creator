import { Donation } from "@/types/Donation";
import { Subscription } from "@/types/Subscription";

export interface User {
  id: string;
  displayName: string;
  email: string;
  status: string;
  residence: string;
  createdAt: string;
  updatedAt: string;
  firstName?: string;
  lastName?: string;
  profileImage?: string;

  subscription: Subscription[];
  donation: Donation[];
}
