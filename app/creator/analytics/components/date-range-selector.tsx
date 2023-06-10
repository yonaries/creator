import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

type Props = {};

const DateRangeSelector = (props: Props) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Past 30 Days" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="30">Past 30 Days</SelectItem>
        <SelectItem value="90">Past 90 Days</SelectItem>
        <SelectItem value="182">Past 6 Months</SelectItem>
        <SelectItem value="365">Past Year</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DateRangeSelector;
