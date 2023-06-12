"use client";

import { Grid } from "@tremor/react";
import KPICard from "./kpi-card";

export default function KPICardGrid({ data }: { data: any[] }) {
  return (
    <div>
      <Grid numItemsLg={data.length} className="mt-6 grid grid-cols-3 gap-6">
        {data.map((item, index) => (
          <KPICard key={index} item={item} />
        ))}
      </Grid>
    </div>
  );
}
