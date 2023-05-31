import TabBar from "@/components/tabbar";
import { Separator } from "@/components/ui/separator";
import Benefits from "./components/benefits";
import BlockedUsers from "./components/blocked-users";
import Donations from "./components/donations";
import ExitSurvey from "./components/exit-survey";
import Supporters from "./components/supporters";

type Props = {};

const Supports = (props: Props) => {
  const tabBarItems = {
    triggers: [
      "Supporters",
      "Donations",
      "Benefits",
      "Exit Survey",
      "Blocked Users",
    ],
    contents: [
      <Supporters key={Date.now()} />,
      <Donations key={Date.now()} />,
      <Benefits key={Date.now()} />,
      <ExitSurvey key={Date.now()} />,
      <BlockedUsers key={Date.now()} />,
    ],
  };
  return (
    <div>
      <span className="text-3xl font-bold">Supporters</span>
      <Separator className="my-3" />
      <TabBar items={tabBarItems} />
    </div>
  );
};

export default Supports;
