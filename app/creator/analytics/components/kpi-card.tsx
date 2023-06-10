import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import Kpi from "../types/kpi";

type Props = {
  item: Kpi;
};

function KPICard({ item }: Props) {
  return (
    <Card
      className="rounded-md border-2 border-muted bg-background"
      key={item.title}
    >
      <Flex alignItems="start">
        <div className="truncate">
          <Text>{item.title}</Text>
          <Metric className="truncate">{item.metric}</Metric>
        </div>
        <BadgeDelta className="rounded-full" deltaType={item.deltaType}>
          {item.delta}
        </BadgeDelta>
      </Flex>
    </Card>
  );
}

export default KPICard;
