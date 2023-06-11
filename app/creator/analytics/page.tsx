import { Separator } from "@/components/ui/separator";
import React from "react";
import TabBar from "@/components/tabbar";
import SupportersAnalytics from "./components/supporters-analytics";
import EarningsAnalytics from "./components/earnings-analytics";
import EngagementsAnalytics from "./components/engagements-analytics";

type Props = {};

const Analytics = (props: Props) => {
  const tabBarItems = {
    triggers: ["Supporters", "Earnings", "Engagements"],
    contents: [
      <SupportersAnalytics key={Date.now()} />,
      <EarningsAnalytics key={Date.now()} />,
      <EngagementsAnalytics key={Date.now()} />,
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
