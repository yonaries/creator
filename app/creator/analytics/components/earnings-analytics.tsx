import React from "react";
import KPICardGrid from "./kpi-grid";
import DateRangeSelector from "./date-range-selector";
import ChartView from "./area-chart";
import { earnings } from "./data.json";
import { EarningsOverview } from "../types/earnings";
import Chart from "../types/chart";

type Props = {};

const EarningsAnalytics = (props: Props) => {
  const data = earnings.chart as EarningsOverview[];
  const kpiData = earnings.overview as Chart[];

  return (
    <div className="min-h-fit w-[62rem] space-y-6">
      <DateRangeSelector />
      <KPICardGrid data={kpiData} />
      <ChartView
        title="Earnings"
        subtitle="Earnings over period of time"
        data={data}
        tabs={["MRR", "Donations"]}
      />
    </div>
  );
};

export default EarningsAnalytics;
