import React from "react";
import KPICardGrid from "./kpi-grid";
import DateRangeSelector from "./date-range-selector";
import ChartView from "./area-chart";
import { supporters } from "./data.json";
import { SupportersChart } from "../types/supporters";
import Kpi from "../types/kpi";

type Props = {};

const SupportersAnalytics = (props: Props) => {
  const data = supporters.chart as SupportersChart[];
  const kpiData = supporters.overview as Kpi[];

  return (
    <div className="min-h-fit w-[62rem] space-y-6">
      <DateRangeSelector />
      <KPICardGrid data={kpiData} />
      <ChartView
        title="Supporters Insights"
        subtitle="Your Supporters over period of time"
        data={data}
        tabs={["Active", "New", "Cancelled"]}
      />
    </div>
  );
};

export default SupportersAnalytics;
