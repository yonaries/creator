"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AreaChart, Color, Tab, TabGroup, TabList } from "@tremor/react";
import { useState } from "react";

const numberFormatter = (number: number, decimals = 0) =>
  Intl.NumberFormat("us", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(Number(number))
    .toString();

const formatters: { [key: string]: any } = {
  Active: (number: number) => `${numberFormatter(number)}`,
  New: (number: number) => `${numberFormatter(number)}`,
  Cancelled: (number: number) => `${numberFormatter(number)}`,
  Delta: (number: number) => `${numberFormatter(number, 2)}%`,
};

type Props = {
  title: string;
  data: any[];
  subtitle?: string;
  tabs?: string[];
};

export default function ChartView({ title, data, subtitle, tabs }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedTab = tabs![selectedIndex];
  const colors: Color[] = ["violet", "green", "red"];

  const areaChartArgs = {
    className: "mt-5 h-72",
    data: data,
    index: "date",
    categories: [selectedTab],
    colors: [colors[selectedIndex]],
    showLegend: false,
    valueFormatter: formatters[selectedTab],
    yAxisWidth: 56,
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="justify-between md:flex">
            <div>
              {tabs && (
                <TabGroup
                  index={selectedIndex}
                  onIndexChange={setSelectedIndex}
                >
                  <TabList color="gray" variant="solid">
                    {tabs.map((tab, index) => (
                      <Tab
                        className={cn(
                          selectedIndex === index &&
                            "bg-background text-foreground shadow-sm dark:text-white",
                          "transition-all duration-75"
                        )}
                        key={index}
                      >
                        {tab}
                      </Tab>
                    ))}
                  </TabList>
                </TabGroup>
              )}
            </div>
          </div>
          {/* web */}
          <div className="mt-8 hidden sm:block">
            <AreaChart {...areaChartArgs} />
          </div>
          {/* mobile */}
          <div className="mt-8 sm:hidden">
            <AreaChart
              {...areaChartArgs}
              startEndOnly={true}
              showGradient={false}
              showYAxis={false}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
