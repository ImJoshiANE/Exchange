"use client"

import dynamic from "next/dynamic";
import React from "react";

const PriceChart = dynamic(() => import("@/components/charts/PriceChart"), {
  ssr: false,
});

const initialData = [
    { time: 1730615961, value: 100.25 },
    { time: 1730616561, value: 100.75 },
    { time: 1730617161, value: 101.20 },
    { time: 1730617761, value: 100.95 },
    { time: 1730618361, value: 101.30 },
    { time: 1730618961, value: 101.80 },
    { time: 1730619561, value: 101.45 },
    { time: 1730620161, value: 101.90 },
    { time: 1730620761, value: 102.10 },
    { time: 1730621361, value: 101.85 },
    { time: 1730621961, value: 102.40 },
    { time: 1730622561, value: 102.15 },
    { time: 1730623161, value: 102.60 },
    { time: 1730623761, value: 102.85 },
    { time: 1730624361, value: 102.55 },
    { time: 1730624961, value: 103.00 },
    { time: 1730625561, value: 103.30 },
    { time: 1730626161, value: 102.95 },
    { time: 1730626761, value: 103.40 },
    { time: 1730627361, value: 103.25 },
    { time: 1730627961, value: 103.70 },
    { time: 1730628561, value: 103.95 },
    { time: 1730629161, value: 104.20 },
    { time: 1730629761, value: 104.00 },
    { time: 1730630361, value: 104.30 },
    { time: 1730630961, value: 104.10 },
    { time: 1730631561, value: 104.60 },
    { time: 1730632161, value: 104.40 },
    { time: 1730632761, value: 104.75 },
    { time: 1730633361, value: 105.00 },
    { time: 1730633961, value: 104.85 },
    { time: 1730634561, value: 105.25 },
    { time: 1730635161, value: 105.10 },
    { time: 1730635761, value: 105.45 },
    { time: 1730636361, value: 105.20 },
    { time: 1730636961, value: 105.60 },
    { time: 1730637561, value: 105.30 },
    { time: 1730638161, value: 105.75 },
    { time: 1730638761, value: 106.00 },
    { time: 1730639361, value: 105.80 },
    { time: 1730639961, value: 106.20 },
    { time: 1730640561, value: 106.10 },
    { time: 1730641161, value: 106.35 },
    { time: 1730641761, value: 106.60 },
    { time: 1730642361, value: 106.40 },
    { time: 1730642961, value: 106.75 },
    { time: 1730643561, value: 106.50 },
    { time: 1730644161, value: 106.90 },
    { time: 1730644761, value: 107.15 },
    { time: 1730645361, value: 107.00 }
];

const ChartComponent = () => {
  return (
    <>
      <h3 className="pt-4 pb-4 text-lg">Price Chart</h3>
      <PriceChart />
    </>
  );
};

export default ChartComponent;