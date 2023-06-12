import { BadgeDelta } from "@tremor/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  item: any;
};

function KPICard({ item }: Props) {
  return (
    <Card key={item.title}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
        <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold">{item.metric}</span>
        <p className="text-xs text-muted-foreground">
          {item.delta} from last month
        </p>
      </CardContent>
    </Card>
  );
}

export default KPICard;
