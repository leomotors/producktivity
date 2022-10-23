import type { NextPageWithLayout } from "next";

import Habit from "$core/general/components/Habits";
import Tabs from "$modules/list/tabs";

import DefaultLayout from "../../core/general/layouts/default";

const Tasks: NextPageWithLayout = () => {
  return (
    <DefaultLayout>
      <div className="h-11/12 flex flex-col m-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
        <Tabs active="habits"></Tabs>
        <div className="overflow-auto p-4 flex flex-col space-y-4 h-full w-full bg-white">
          <div className="p-4 flex flex-col space-y-4 h-full w-1/2 bg-white">
            <Habit></Habit>
            <Habit></Habit>
            <Habit></Habit>
            <Habit></Habit>
            <Habit></Habit>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tasks;
