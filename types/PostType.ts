// TODO: change status and type to enum
// TODO: add attachement type
export interface PostType {
  id: string;
  title: string;
  type: "image" | "video" | "text" | "link" | "file";
  status: "draft" | "scheduled" | "published";
  createdAt: string;
  updatedAt: string;
  scheduled: string;
  caption?: string;
  thumbnail?: string;
  file?: string;
  visibleTo?: string[];
  pageId: string;
  projectId?: string;
  Attachment: [];
}
