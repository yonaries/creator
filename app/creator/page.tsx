import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import CoverImage from "./dashboard/components/cover-image";

const metadata: Metadata = {
  title: "My Page - Jegool",
  description: "",
};

export default function Dashboard() {
  return (
    <div>
      <CoverImage />
      <div className="p-10"></div>
    </div>
  );
}
