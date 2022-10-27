import { useState } from "react";

import {
  useCreateHabitMutation,
  useDeleteHabitMutation,
  useHabitsQuery,
  useUpdateHabitMutation,
} from "@producktivity/codegen";

import { MyPage } from "$core/@types";
import { ConfirmButton, FormInput, Habit, Tabs } from "$core/components";
import DefaultLayout from "$core/layouts/default";

interface IInput {
  id: string;
  name: string;
  currentCount: number;
  targetCount: number;
  tags: string[];
  userId: string;
}

const initialState: IInput = {
  id: "-1",
  name: "Habit",
  currentCount: 0,
  targetCount: 10,
  tags: [""],
  userId: "",
};

const hoverClass =
  "transition ease-in-out delay-50 duration-150 hover:scale-110 hover:cursor-pointer";

const Habits: MyPage = () => {
  const { data, refetch } = useHabitsQuery();
  const [updateHabit] = useUpdateHabitMutation();
  const [deleteHabit] = useDeleteHabitMutation();
  const [createHabit] = useCreateHabitMutation();

  const [input, setInput] = useState<IInput>(initialState);

  let habits = data?.me.habits ?? [];
  habits = [...habits];
  habits.sort((a, b) => a.name.localeCompare(b.name));

  const updateInput = (name: string, value: string | number) => {
    setInput({ ...input, [name]: value });
  };

  const selectHabit = (id: string) => {
    const selectedHabit = habits.filter((habit) => habit.id === id)[0];
    if (
      selectedHabit.currentCount !== null &&
      selectedHabit.currentCount !== undefined &&
      selectedHabit.targetCount !== null &&
      selectedHabit.targetCount !== undefined &&
      selectedHabit.tags !== null &&
      selectedHabit.tags !== undefined
    ) {
      setInput({
        id: selectedHabit.id,
        name: selectedHabit.name,
        currentCount: selectedHabit.currentCount,
        targetCount: selectedHabit.targetCount,
        tags: selectedHabit.tags,
        userId: selectedHabit.userId,
      });
    }
  };

  const removeHabit = async (id: string) => {
    await deleteHabit({
      variables: {
        deleteHabitId: id,
      },
    });
    refetch();
  };

  const saveHabit = async (id: string) => {
    if (id === "-1") {
      await createHabit({
        variables: {
          name: input.name,
          currentCount: input.currentCount,
          targetCount: input.targetCount,
          tags: input.tags,
        },
      });
    } else {
      await updateHabit({
        variables: {
          ...input,
          updateHabitId: id,
        },
      });
    }
    refetch();
    setInput(initialState);
  };

  const increaseHabit = async (id: string) => {
    const selectedHabit = habits.filter((habit) => habit.id === id)[0];
    if (
      selectedHabit.currentCount !== null &&
      selectedHabit.currentCount !== undefined &&
      selectedHabit.targetCount !== null &&
      selectedHabit.targetCount !== undefined &&
      selectedHabit.currentCount < selectedHabit.targetCount
    ) {
      await updateHabit({
        variables: {
          ...selectedHabit,
          currentCount: 1 + selectedHabit.currentCount,
          updateHabitId: id,
        },
      });
    }
    refetch();
  };

  return (
    <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
      <Tabs active="habits"></Tabs>

      <div className="overflow-auto p-4 flex space-y-4 h-full w-full bg-white">
        <div className="p-4 flex flex-col space-y-4 h-full w-3/5 bg-white">
          {habits.map((habit, index) => (
            <div key={index} className="flex items-center w-full space-x-8">
              <Habit
                key={index}
                currentCount={habit.currentCount}
                handleIncrease={() => increaseHabit(habit.id)}
                id={habit.id}
                name={habit.name}
                targetCount={habit.targetCount}
              ></Habit>

              <div
                className={`font-bold rounded-lg px-4 py-2 h-fit flex justify-center items-center ${
                  input.id === habit.id ? "bg-lime-300" : "bg-amber-300"
                } ${hoverClass}`}
                onClick={() => selectHabit(habit.id)}
              >
                {input.id === habit.id ? "Editing" : "Edit"}
              </div>

              <div
                className={`font-bold rounded-lg px-4 py-2 h-fit flex justify-center items-center bg-red-600 text-white ${hoverClass}`}
                onClick={() => removeHabit(habit.id)}
              >
                Delete
              </div>
            </div>
          ))}
        </div>

        <div className="ml-12 p-4 flex flex-col items-start space-y-4 h-full w-2/5 bg-white">
          <FormInput
            handleChange={(e) => updateInput("name", e.target.value)}
            name="name"
            value={input.name}
          ></FormInput>

          <FormInput
            handleChange={(e) =>
              updateInput("currentCount", parseInt(e.target.value))
            }
            name="Current Count"
            value={String(input.currentCount)}
          ></FormInput>

          <FormInput
            handleChange={(e) =>
              updateInput("targetCount", parseInt(e.target.value))
            }
            name="Target Count"
            value={String(input.targetCount)}
          ></FormInput>

          <ConfirmButton
            handleSave={() => saveHabit(input.id)}
            text={input.id === "-1" ? "Add new" : "Save"}
          ></ConfirmButton>
        </div>
      </div>
    </div>
  );
};

Habits.Layout = DefaultLayout;
Habits.authStatus = "private";

export default Habits;
