import type { FC } from "react";
import { useState } from "react";

import { useEventsQuery, useTasksQuery } from "@producktivity/codegen";

import { CalendarItem } from "$core/components";

interface IMiniCalendar {
  calendar: boolean;
  calen: boolean;
}

const weekDays: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const MiniCalendar: FC<IMiniCalendar> = ({ calen, calendar }) => {
  const { data: dataTasks, refetch: refetchTasks } = useTasksQuery();
  const tasks = dataTasks?.me.tasks ?? [];

  const { data: dataEvents, refetch: refetchEvents } = useEventsQuery();
  const events = dataEvents?.me.events ?? [];

  const [selectedDay, setSelectedDay] = useState<number | null>(null);
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

  const workDays: (number | null)[] = [];
  tasks.map((task) => {
    workDays[new Date(task.dueDate).getDate()] = 1;
  });
  events.map((task) => {
    workDays[new Date(task.dueDate).getDate()] = 1;
  });

  return (
    <>
      <div
        className={`duration-700 transition-all ease-in-out
        ${
          calen ? "w-1/4 pr-3 pt-3" : "w-0"
        } h-screen bg-gray-800 flex flex-col`}
      >
        {calendar && (
          <div
            className={`${
              calen ? "opacity-100" : "opacity-0"
            } duration-700 transition-all ease-in-out w-full h-full`}
          >
            <div className="w-full p-4 h-1/2 flex flex-col rounded-xl bg-white">
              <h1 className="font-bold">{`${
                months[now.getMonth()]
              } ${now.getFullYear()}`}</h1>
              <div className="flex justify-between w-full">
                {weekDays.map((day, index) => {
                  return (
                    <div key={index} className="text-sm text-center py-2">
                      {day}
                    </div>
                  );
                })}
              </div>
              <div className="text-sm rounded-b-lg grid grid-cols-7 w-full h-full bg-white">
                {days.map((day, index) => {
                  return (
                    <div
                      key={index}
                      className={`p-2 rounded-full flex justify-center items-center ${
                        workDays[day || 100]
                          ? "bg-emerald-100 hover:bg-emerald-200"
                          : "hover:bg-gray-100"
                      }`}
                      onMouseOver={() => setSelectedDay(day)}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
            {selectedDay !== null && workDays[selectedDay] && (
              <div className="max-h-full w-full p-4 mt-4 flex flex-col rounded-xl bg-white overflow-auto">
                <CalendarItem
                  day={selectedDay}
                  events={events}
                  tasks={tasks}
                  time={now}
                ></CalendarItem>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
