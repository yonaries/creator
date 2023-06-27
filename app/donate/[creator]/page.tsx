import { getPageData } from "@/app/(supporters-portal)/account/actions/get-page-by-url";
import DonationCard from "@/app/(supporters-portal)/account/components/donation-card";

type Page = {
  [key: string]: any;
};

export default async function DonateCreator({
  params,
}: {
  params: { creator: string };
}) {
  const page = await getPageData(params.creator);
  if (!page) {
    return (
      <div className="flex h-96 flex-col items-center justify-center">
        <span className="text-6xl font-semibold">404</span>
        <span className="text-2xl font-semibold">Page not found</span>
      </div>
    );
  }

  return (
    <div>
      <DonationCard page={page} />
    </div>
  );
}
