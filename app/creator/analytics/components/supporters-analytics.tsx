import React from "react";
import KPICardGrid from "./kpi-grid";
import DateRangeSelector from "./date-range-selector";
import ChartView from "./area-chart";
import { supporters } from "./data.json";
import { SupportersOverview } from "../types/supporters";
import Chart from "../types/chart";

type Props = {};

const SupportersAnalytics = (props: Props) => {
  const data = supporters.chart as SupportersOverview[];
  const kpiData = supporters.overview as Chart[];

  return (
    <div className="min-h-fit w-[62rem] space-y-6">
      <DateRangeSelector />
      <KPICardGrid data={kpiData} />
      <ChartView
        title="Insights"
        subtitle="supporters over period of time"
        data={data}
        tabs={["Active", "New", "Cancelled"]}
      />
    </div>
  );
};

export default SupportersAnalytics;
