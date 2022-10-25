import type { NextPageWithLayout } from "next";

import CalendarItem from "../core/general/components/CalendarItem";
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

  const tasks = [
    {
      id: 1,
      name: "kick students from line group",
      topic: ["cal", "nonsense", "ps"],
      date: new Date(),
    },
    {
      id: 2,
      name: "sleep",
      topic: ["please", "zzzz", "oc"],
      date: new Date(),
    },
    {
      id: 3,
      name: "grader",
      topic: ["comprog", "python3.5", "🥐"],
      date: new Date(),
    },
    {
      id: 4,
      name: "kick students from line group",
      topic: ["cal", "nonsense", "ps"],
      date: new Date(),
    },
    {
      id: 5,
      name: "kick students from line group",
      topic: ["cal", "nonsense", "ps"],
      date: new Date(),
    },
  ];
  const events = [
    {
      id: 1,
      name: "kick students from line group",
      topic: ["cal", "nonsense", "ps"],
      date: new Date("2022-10-23"),
    },
    {
      id: 2,
      name: "sleep",
      topic: ["please", "zzzz", "oc"],
      date: new Date(),
    },
    {
      id: 3,
      name: "grader",
      topic: ["comprog", "python3.5", "🥐"],
      date: new Date(),
    },
  ];

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
                <h1>{day}</h1>
                <CalendarItem
                  day={day}
                  events={events}
                  tasks={tasks}
                  time={now}
                ></CalendarItem>
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Calendar;
