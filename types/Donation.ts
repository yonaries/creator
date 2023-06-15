import { PAYMENT_STATUS } from "@/constants/PAYMENT_STATUS";

export interface Donation {
  id: string;
  donorName: string;
  donorEmail: string;
  quantity: number;
  message: string;
  status: PAYMENT_STATUS;
  createdAt: string;
  updatedAt: string;

  itemId: string;
  transactionId: string;
  donorId?: string;
  pageId: string;
}
