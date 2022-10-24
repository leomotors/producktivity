import type { ReactElement } from "react";
import { useState } from "react";

import type { NextPageWithLayout } from "next";

import Event from "../core/general/components/Event";
import Habit from "../core/general/components/Habits";
import Task from "../core/general/components/Task";
import DefaultLayout from "../core/general/layouts/default";
import Timer from "../modules/dashboard/components/Timer";

const Dashboard: NextPageWithLayout = () => {
  const [minimize, setMinimize] = useState<boolean>(true);
  const toggleMinimize = () => {
    setMinimize(!minimize);
  };
  return (
    <DefaultLayout>
      <div className="h-11/12 ml-8 p-4 rounded-lg bg-white w-11/12 overflow-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Overview</h1>
        <div className="flex flex-col md:flex-row w-full h-1/2 justify-between bg-red-100">
          <div className="bg-brown-100 w-full md:w-2/5">
            <div className="text-xl md:text-2xl font-bold md:mb-2">Timers</div>
            <div className="px-2 md:px-10 flex justify-between w-full h-full bg-pink-200">
              <Timer></Timer>
              <Timer></Timer>
            </div>
          </div>
          <div className="flex-1 bg-orange-100">
            <div className="text-xl md:text-2xl font-bold md:mb-2">Habits</div>
            <div className="flex justify-center w-full h-full bg-pink-200">
              <div className="grid grid-cols-4 gap-2 md:gap-4 rounded-lg w-full h-5/6 bg-green-300">
                <Habit></Habit>
                <Habit></Habit>
                <Habit></Habit>
                <Habit></Habit>
                <Habit></Habit>
                <Habit></Habit>
                <Habit></Habit>
                <Habit></Habit>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-full justify-between bg-red-100">
          <div className="flex-1 bg-blue-100 mb-2">
            <div className="text-xl md:text-2xl font-bold mb-4">Tasks</div>
            <div className="min-h-fit md:px-10 flex flex-col space-y-4 w-full bg-pink-200">
              <Task></Task>
              <Task></Task>
              <Task></Task>
            </div>
          </div>
          <div className="flex-1 bg-orange-100">
            <div className="text-xl md:text-2xl font-bold mb-4">
              Upcoming Events
            </div>
            <div className="md:px-10 flex justify-center w-full min-h-fit bg-pink-200">
              <Event></Event>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
