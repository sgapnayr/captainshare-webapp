"use client";
import React from "react";
import { TopCards } from "../components/dashboards/modern/TopCards";
import { RevenueUpdate } from "../components/dashboards/modern/RevenueUpdate";
import { YearlyBreakup } from "../components/dashboards/modern/YearlyBreakup";
import { MonthlyEarning } from "../components/dashboards/modern/MonthlyEarning";
import { WeeklyStats } from "../components/dashboards/modern/WeeklyStats";
import { TopPerformer } from "../components/dashboards/modern/TopPerformer";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <TopCards />
        </div>
        <div className="lg:col-span-8 col-span-12 flex">
          <RevenueUpdate />
        </div>
        <div className="lg:col-span-4 col-span-12 ">
          <YearlyBreakup />
          <MonthlyEarning />
        </div>
        <div className="lg:col-span-4 col-span-12 flex">
          <WeeklyStats />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <TopPerformer />
        </div>
      </div>
    </>
  );
};

export default page;
