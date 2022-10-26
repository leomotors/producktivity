import { useState } from "react";

import { MyPage } from "$core/@types";
import { ConfirmButton, FormInput, Habit, Tabs } from "$core/components";
import DefaultLayout from "$core/layouts/default";

interface IHabits {
  id: number;
  text: string;
  count: number;
}
const Habits: MyPage = () => {
  const [input, setInput] = useState<IHabits>({
    id: -1,
    text: "Select a habit",
    count: 0,
  });
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
  const updateHabit = (name: string, value: string | number) => {
    setInput({ ...input, [name]: value });
    console.log(input);
  };
  const selectHabit = (id: number) => {
    setInput(() => habits.filter((task) => task.id === id)[0]);
  };
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

  const saveTask = (id: number) => {
    return 0;
  }
  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-110 hover:cursor-pointer";
  return (
    <DefaultLayout>
      <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
        <Tabs active="habits"></Tabs>
        <div className="overflow-auto p-4 flex space-y-4 h-full w-full bg-white">
          <div className="p-4 flex flex-col space-y-4 h-full w-3/5 bg-white">
            {habits.map((habit, index) => (
              <div key={index} className="flex items-center w-full space-x-8">
                <Habit
                  key={index}
                  count={habit.count}
                  handleDelete={() => deleteHabit(habit.id)}
                  handleIncrease={() => increaseHabit(habit.id)}
                  id={habit.id}
                  text={habit.text}
                ></Habit>
                <div
                  className={`font-bold rounded-lg px-4 py-2 h-fit flex justify-center items-center bg-amber-300 ${hoverClass}`}
                  onClick={() => selectHabit(habit.id)}
                >
                  Edit
                </div>
              </div>
            ))}
          </div>
          <div className="ml-12 p-4 flex flex-col items-start space-y-4 w-2/5 bg-amber-50 drop-shadow-lg rounded-lg animate-fade">
            <FormInput
              handleChange={(e) => updateHabit("text", e.target.value)}
              name="text"
              value={input.text}
            ></FormInput>
            <ConfirmButton
              handleSave={() => saveTask(input.id)}
              text="confirm"
            ></ConfirmButton>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Habits;
