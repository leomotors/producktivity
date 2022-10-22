import type { ReactElement } from "react";
import { useState } from "react";

import type { NextPageWithLayout } from "next";

import DefaultLayout from "../modules/general/layouts/default";

const Calendar: NextPageWithLayout = () => {
  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let days = [];
  for (let i = 1; i <= 30; i++) {
    days[i - 1] = i;
  }
  for (let i = 31; i <= 35; i++) {
    days[i - 1] = null;
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col m-8 rounded-lg bg-gray-500 h-11/12 w-11/12 overflow-auto">
        <div className="text-4xl font-bold mb-4 text-white bg-gray-500">
          October 2022
        </div>
        <div className="z-10 rounded-t-lg grid grid-cols-7 w-full bg-emerald-50">
          {weekDays.map((day, index) => {
            return (
              <div key={index} className="text-center text-xl py-2 font-bold">
                {day}
              </div>
            );
          })}
        </div>
        <div className="rounded-b-lg grid grid-cols-7 w-full h-full bg-white">
          {days.map((day, index) => {
            return (
              <div key={index} className="p-2 outline outline-zinc-100">
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Calendar;
