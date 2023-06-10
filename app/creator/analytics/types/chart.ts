import { DeltaType } from "@tremor/react";

type Chart = {
  title: string;
  metric: string;
  delta: string;
  deltaType: DeltaType;
};

export default Chart;
