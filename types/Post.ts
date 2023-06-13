import { CONTENT } from "@/constants/CONTENT";
import { POST_STATUS } from "@/constants/POST_STATUS";
import { Attachement } from "./Attachement";

export interface Post {
  id: string;
  title: string;
  type: CONTENT;
  status: POST_STATUS;
  createdAt: string;
  updatedAt: string;
  scheduled: string;
  caption?: string;
  thumbnail?: string;
  file?: string;
  visibleTo?: string[];
  pageId: string;
  projectId?: string;
  Attachment: Attachement[];
}
