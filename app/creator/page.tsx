"use client";
import { useAuth } from "../context/auth-context";
import CoverImage from "./dashboard/components/cover-image";
import DashboardHeader from "./dashboard/components/dashboard-header";
import PageContents from "./dashboard/components/page-contents";

export default function Dashboard() {
  const { currentUserPage } = useAuth();
  return (
    <div>
      <CoverImage src={currentUserPage?.coverImage} />
      <div className="flex w-full flex-col justify-center p-10">
        <DashboardHeader />
        <PageContents />
      </div>
    </div>
  );
}
