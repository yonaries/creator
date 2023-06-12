import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "My Page - Jegool",
  description: "",
};

export default function Dashboard() {
  return (
    <div>
      <span className="text-3xl font-bold">Dashboard</span>
      <Separator className="my-3" />
    </div>
  );
}
