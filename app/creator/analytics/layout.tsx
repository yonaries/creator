import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-10">{children}</div>;
}
