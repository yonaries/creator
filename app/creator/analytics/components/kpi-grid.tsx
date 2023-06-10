"use client";

import { Grid } from "@tremor/react";
import KPICard from "./kpi-card";

export default function KPICardGrid({ data }: { data: any[] }) {
  return (
    <div>
      <Grid numItemsLg={data.length} className="mt-6 grid grid-cols-3 gap-6">
        {data.map((item) => (
          <KPICard item={item} />
        ))}
      </Grid>
    </div>
  );
}
