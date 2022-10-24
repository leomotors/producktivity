import type { NextPageWithLayout } from "next";

import DefaultLayout from "../core/general/layouts/default";

const Calendar: NextPageWithLayout = () => {
  const weekDays: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const days = [];
  for (let i = 1; i <= 30; i++) {
    days[i - 1] = i;
  }
  for (let i = 31; i <= 35; i++) {
    days[i - 1] = null;
  }

  return (
    <DefaultLayout>
      <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
        <div className="text-3xl font-bold mb-2 text-white bg-gray-800">
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
