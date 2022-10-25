import { useState } from "react";

import { MyPage } from "$core/@types";
import { Event, Habit, Task, Timer } from "$core/components";
import DefaultLayout from "$core/layouts/default";

interface IHabits {
  id: number;
  text: string;
  count: number;
}
interface ITasks {
  id: number;
  name: string;
  topic: string[];
  date: Date;
}
interface IEvents {
  id: number;
  name: string;
  topic: string[];
  date: Date;
}
const Dashboard: MyPage = () => {
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
  ]);
  const deleteTask = (id: number) => {
    setTasks(() => tasks.filter((task) => task.id !== id));
  };
  const [events, setEvents] = useState<IEvents[]>([
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
  ]);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    <DefaultLayout>
      <div className="h-full ml-8 p-4 rounded-lg bg-white w-11/12 overflow-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Overview</h1>
        <div className="flex flex-col md:flex-row w-full h-1/2 justify-between bg-white">
          <div className="bg-brown-100 w-full md:w-2/5">
            <div className="text-xl md:text-2xl font-bold md:mb-2">Timers</div>
            <div className="px-2 md:px-10 flex justify-between w-full h-full">
              <Timer></Timer>
              <Timer></Timer>
            </div>
          </div>
          <div className="flex-1 bg-white">
            <div className="text-xl md:text-2xl font-bold md:mb-2">Habits</div>
            <div className="flex justify-center w-full h-full">
              <div className="grid grid-cols-4 gap-2 md:gap-4 rounded-lg w-full h-5/6">
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
        </div>
        <div className="flex flex-col md:flex-row w-full h-fit justify-between">
          <div className="flex-1 bg-white mb-2">
            <div className="text-xl md:text-2xl font-bold mb-4">Tasks</div>
            <div className="h-fit md:px-10 flex flex-col space-y-4 w-full bg-white">
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
          <div className="flex-1 bg-white">
            <div className="text-xl md:text-2xl font-bold mb-4">
              Upcoming Events
            </div>
            <div className="md:px-10 flex flex-col space-y-4 justify-center w-full min-h-fit bg-white">
              {events.map(
                (event, index) =>
                  event.date > yesterday && (
                    <Event
                      key={index}
                      date={event.date}
                      name={event.name}
                      topic={event.topic}
                    ></Event>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
