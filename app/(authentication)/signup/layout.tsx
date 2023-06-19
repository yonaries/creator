import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up and become give a home your fans to support you",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-10">{children}</div>;
}
