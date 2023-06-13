import { SUBSCRIPTION_STATUS } from "@/constants/SUBSCRIPTION_STATUS";

export interface Subscription {
  id: string;
  status: SUBSCRIPTION_STATUS;
  createdAt: string;
  updatedAt: string;
  expiryDate: string;
  subscriberId: string;
  membershipId: string;
}
