import React from "react";
import KPICardGrid from "./kpi-grid";
import DateRangeSelector from "./date-range-selector";

type Props = {};

const SupportersAnalytics = (props: Props) => {
  return (
    <div className="h-[30rem] w-[64rem] bg-red-500">
      <DateRangeSelector />
      <KPICardGrid />
    </div>
  );
};

export default SupportersAnalytics;
