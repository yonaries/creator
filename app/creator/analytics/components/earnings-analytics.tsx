import React from "react";
import KPICardGrid from "./kpi-grid";
import DateRangeSelector from "./date-range-selector";
import ChartView from "./area-chart";
import { earnings } from "./data.json";
import { EarningsChart } from "../types/earnings";
import Kpi from "../types/kpi";

type Props = {};

const EarningsAnalytics = (props: Props) => {
  const data = earnings.chart as EarningsChart[];
  const kpiData = earnings.overview as Kpi[];

  return (
    <div className="min-h-fit w-[62rem] space-y-6">
      <DateRangeSelector />
      <KPICardGrid data={kpiData} />
      <ChartView
        title="Earnings Insights"
        subtitle="Your Earnings over period of time"
        data={data}
        tabs={["MRR", "Donations"]}
      />
    </div>
  );
};

export default EarningsAnalytics;
