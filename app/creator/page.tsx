import CoverImage from "./dashboard/components/cover-image";
import DashboardHeader from "./dashboard/components/dashboard-header";
import PageContents from "./dashboard/components/page-contents";

export default function Dashboard() {
  return (
    <div>
      <CoverImage />
      <div className="flex w-full flex-col justify-center p-10">
        <DashboardHeader />
        <PageContents />
      </div>
    </div>
  );
}
