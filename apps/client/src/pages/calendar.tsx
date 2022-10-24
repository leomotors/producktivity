import type { NextPageWithLayout } from "next";

import DefaultLayout from "../core/general/layouts/default";

const Calendar: NextPageWithLayout = () => {
  const weekDays: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const weekDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const numOfDays = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();

  const days = [];
  let cou = 1;
  for (let i = 0; i < weekDay; i++) {
    days[i] = null;
  }
  for (let i = weekDay; i < numOfDays + weekDay; i++) {
    days[i] = cou;
    cou += 1;
  }
  for (let i = numOfDays + weekDay; i < 42; i++) {
    days[i] = null;
  }

  return (
    <DefaultLayout>
      <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
        <div className="text-3xl font-bold mb-2 text-white bg-gray-800">
          {`${months[now.getMonth()]} ${now.getFullYear()}`}
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
