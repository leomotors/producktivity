import { ChangeEvent, useState } from "react";

import type { NextPageWithLayout } from "next";

import TagInput from "$core/general/components/TagInput";
import Task from "$core/general/components/Task";
import Tabs from "$modules/list/tabs";

import ConfirmButton from "../../core/general/components/ConfirmButton";
import DateInput from "../../core/general/components/DateInput";
import FormInput from "../../core/general/components/FormInput";
import DefaultLayout from "../../core/general/layouts/default";

const Tasks: NextPageWithLayout = () => {
  interface ITasks {
    id: number;
    name: string;
    topic: string[];
    date: Date;
  }
  const [input, setInput] = useState<ITasks>({
    id: -1,
    name: "Select a task",
    topic: ["Homework"],
    date: new Date(),
  });
  const [tasks, setTasks] = useState<ITasks[]>([
    {
      id: 1,
      name: "kick students from line group",
      topic: ["cal", "nonsense", "ps"],
      date: new Date(2022, 10, 20),
    },
    {
      id: 2,
      name: "sleep",
      topic: ["please", "zzzz", "oc"],
      date: new Date(2022, 11, 23),
    },
    {
      id: 3,
      name: "grader",
      topic: ["comprog", "python3.5", "🥐"],
      date: new Date(2022, 12, 2),
    },
  ]);
  const updateTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const selectTask = (id: number) => {
    setInput(() => tasks.filter((task) => task.id === id)[0]);
  };
  const deleteTask = (id: number) => {
    setTasks(() => tasks.filter((task) => task.id !== id));
  };
  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-110 hover:cursor-pointer";
  return (
    <DefaultLayout>
      <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
        <Tabs active="tasks"></Tabs>
        <div className="overflow-auto p-4 flex space-y-4 h-full w-full bg-white">
          <div className="p-4 flex flex-col space-y-4 h-full w-3/5 bg-white">
            {tasks.map((task, index) => (
              <div key={index} className="flex items-center w-full space-x-8">
                <Task
                  date={task.date}
                  handleDelete={() => deleteTask(task.id)}
                  id={task.id}
                  name={task.name}
                  topic={task.topic}
                ></Task>
                <div
                  className={`font-bold rounded-lg px-4 py-2 h-fit flex justify-center items-center bg-amber-300 ${hoverClass}`}
                  onClick={() => selectTask(task.id)}
                >
                  Edit
                </div>
              </div>
            ))}
          </div>
          <div className="ml-12 p-4 flex flex-col items-start space-y-4 h-full w-2/5 bg-white">
            <FormInput
              handleChange={(e) => updateTask(e)}
              name="name"
              value={input.name}
            ></FormInput>
            <input
              name="name"
              value={input.name}
              onChange={(e) => updateTask(e)}
            />
            <TagInput name="Topic" value={input.topic}></TagInput>
            <DateInput name="Date" value={input.date}></DateInput>
            <ConfirmButton></ConfirmButton>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tasks;
