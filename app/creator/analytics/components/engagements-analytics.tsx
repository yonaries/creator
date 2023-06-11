import React from "react";
import Kpi from "../types/kpi";
import BarChartView from "./bar-chart";
import DateRangeSelector from "./date-range-selector";
import KPICardGrid from "./kpi-grid";
import { engagements } from "./data.json";
import { EngagementsChart } from "../types/engagements";

type Props = {};

const EngagementsAnalytics = (props: Props) => {
  const data = engagements.chart as EngagementsChart[];
  const kpiData = engagements.overview as Kpi[];

  return (
    <div className="min-h-fit w-[62rem] space-y-6">
      <DateRangeSelector />
      <KPICardGrid data={kpiData} />
      <BarChartView
        title="Engagements Insights"
        subtitle="Your Posts Engagement over period of time"
        data={data}
        tabs={["Impressions", "Likes", "Engagements"]}
      />
    </div>
  );
};

export default EngagementsAnalytics;
