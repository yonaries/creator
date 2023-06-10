"use client";

import { Grid } from "@tremor/react";
import KPICard from "./kpi-card";
import data from "./data.json";
import Kpi from "../types/kpi";

const kpiData: Kpi[] = data as Kpi[];

export default function KPICardGrid() {
  return (
    <div>
      <Grid numItemsLg={3} className="mt-6 grid grid-cols-3 gap-6">
        {kpiData.map((item) => (
          <KPICard item={item} />
        ))}
      </Grid>
    </div>
  );
}
