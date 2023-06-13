import { Donation } from "@/types/Donation";

export interface DonationItem {
  id: string;
  name: string;
  price: number;
  status: boolean;
  image: string;
  createdAt: string;
  updatedAt: string;

  Donates: Donation[];
}
