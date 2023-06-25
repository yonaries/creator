import { Benefit } from "./Benefit";
import { Subscription } from "./Subscription";

export interface Membership {
  id: string;
  title: string;
  fee: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  description?: string;
  coverImage?: string;
  pageId: string;
  Subscription: Subscription[];
  Benefit: Benefit[];
}

export interface MembershipWithoutId {
  title: string;
  fee: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  description?: string;
  coverImage?: string;
  pageId: string;
}
