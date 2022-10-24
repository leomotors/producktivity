import { useState } from "react";

import type { NextPageWithLayout } from "next";

import Task from "$core/general/components/Task";
import Tabs from "$modules/list/tabs";

import DefaultLayout from "../../core/general/layouts/default";

const Tasks: NextPageWithLayout = () => {
  interface ITasks {
    id: number;
    name: string;
    topic: string[];
    date: Date;
  }
  const [tasks, setTasks] = useState<ITasks[]>([
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
  ]);
  const deleteTask = (id: number) => {
    setTasks(() => tasks.filter((task) => task.id !== id));
  };
  return (
    <DefaultLayout>
      <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
        <Tabs active="tasks"></Tabs>
        <div className="overflow-auto p-4 flex flex-col space-y-4 h-full w-full bg-white">
          <div className="p-4 flex flex-col space-y-4 h-full w-1/2 bg-white">
            {tasks.map((task, index) => (
              <Task
                key={index}
                date={task.date}
                handleDelete={() => deleteTask(task.id)}
                id={task.id}
                name={task.name}
                topic={task.topic}
              ></Task>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tasks;
