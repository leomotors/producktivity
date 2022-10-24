import { useState } from "react";
import type { FC } from "react";

interface IMiniCalendar {
  calendar: boolean;
}
const MiniCalendar: FC<IMiniCalendar> = ({ calendar }) => {
  const weekDays: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const days = [];
  for (let i = 1; i <= 30; i++) {
    days[i - 1] = i;
  }
  for (let i = 31; i <= 35; i++) {
    days[i - 1] = null;
  }
  return (
    <>
      <div
        className={`duration-700 transition-all ease-in-out
        ${
          calendar ? "w-1/4 pr-3 pt-3" : "w-0"
        } h-screen bg-gray-800 flex flex-col`}
      >
        {/* {calendar && ( */}
        <div
          className={`${
            calendar ? "opacity-100" : "opacity-0 hidden"
          } duration-700 transition-all ease-in-out p-4 flex flex-col rounded-xl w-full h-2/5 bg-white`}
        >
          <h1 className="font-bold">Oct 2022</h1>
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
                <div key={index} className="p-2">
                  {day}
                </div>
              );
            })}
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default MiniCalendar;
