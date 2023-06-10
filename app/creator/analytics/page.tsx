import { Separator } from "@/components/ui/separator";
import React from "react";
import TabBar from "@/components/tabbar";
import SupportersAnalytics from "./components/supporters-analytics";
import Earnings from "./components/earnings";
import Engagements from "./components/engagements";

type Props = {};

const Analytics = (props: Props) => {
  const tabBarItems = {
    triggers: ["Supporters", "Earnings", "Engagements"],
    contents: [
      <SupportersAnalytics key={Date.now()} />,
      <Earnings key={Date.now()} />,
      <Engagements key={Date.now()} />,
    ],
  };
  return (
    <div>
      <span className="text-3xl font-bold">Analytics</span>
      <Separator className="my-3" />
      <TabBar items={tabBarItems} />
    </div>
  );
};

export default Analytics;
