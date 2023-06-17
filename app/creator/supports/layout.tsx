import { Metadata } from "next";

const metadata: Metadata = {
  title: "<Creator Name> - Supports",
  description: ".",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-10">{children}</div>;
}
