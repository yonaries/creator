import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In to jegool your account.",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-10">{children}</div>;
}
