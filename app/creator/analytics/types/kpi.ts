import { DeltaType } from "@tremor/react";

type Kpi = {
  title: string;
  metric: string;
  delta: string;
  deltaType: DeltaType;
};

export default Kpi;
