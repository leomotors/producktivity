import { useState } from "react";

import type { NextPageWithLayout } from "next";

import Habit from "$core/general/components/Habit";
import Tabs from "$modules/list/tabs";

import DefaultLayout from "../../core/general/layouts/default";

interface IHabits {
  id: number;
  text: string;
  count: number;
}
const Tasks: NextPageWithLayout = () => {
  const [habits, setHabits] = useState<IHabits[]>([
    {
      id: 1,
      text: "นอน",
      count: 0,
    },
    {
      id: 2,
      text: "นอน",
      count: 0,
    },
    {
      id: 3,
      text: "นอน",
      count: 0,
    },
    {
      id: 4,
      text: "touch grass",
      count: 0,
    },
    {
      id: 5,
      text: "touch grass",
      count: 0,
    },
    {
      id: 6,
      text: "get some milk",
      count: 0,
    },
  ]);
  const deleteHabit = (id: number) => {
    setHabits(() => habits.filter((habit) => habit.id !== id));
  };
  const increaseHabit = (id: number) => {
    setHabits(() =>
      habits.map((habit) => {
        if (habit.id === id) {
          return { ...habit, count: habit.count + 1 };
        }
        return habit;
      })
    );
  };
  return (
    <DefaultLayout>
      <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
        <Tabs active="habits"></Tabs>
        <div className="overflow-auto p-4 flex flex-col space-y-4 h-full w-full bg-white">
          <div className="p-4 flex flex-col space-y-4 h-full w-2/5 bg-white">
            {habits.map((habit, index) => (
              <Habit
                key={index}
                count={habit.count}
                handleDelete={() => deleteHabit(habit.id)}
                handleIncrease={() => increaseHabit(habit.id)}
                id={habit.id}
                text={habit.text}
              ></Habit>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tasks;
