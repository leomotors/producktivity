import type { FC } from "react";

interface ITabs {
  active: string;
}

export const Tabs: FC<ITabs> = ({ active }) => {
  const baseURL = `http://localhost:5650`;
  const goToTasks = () => {
    window.location.href = `${baseURL}/list/tasks`;
  };
  const goToHabits = () => {
    window.location.href = `${baseURL}/list/habits`;
  };
  const goToEvents = () => {
    window.location.href = `${baseURL}/list/events`;
  };
  return (
    <ul className="flex justify-between text-xl font-bold text-center">
      <li
        className={`p-4 w-1/3 hover:cursor-pointer ${
          active === "tasks"
            ? "bg-white"
            : "bg-emerald-600 hover:bg-emerald-500"
        } rounded-t-3xl`}
        onClick={() => goToTasks()}
      >
        Tasks
      </li>
      <li
        className={`p-4 w-1/3 hover:cursor-pointer ${
          active === "habits"
            ? "bg-white"
            : "bg-emerald-600 hover:bg-emerald-500"
        } rounded-t-3xl`}
        onClick={() => goToHabits()}
      >
        Habits
      </li>
      <li
        className={`p-4 w-1/3 hover:cursor-pointer ${
          active === "events"
            ? "bg-white"
            : "bg-emerald-600 hover:bg-emerald-500"
        } rounded-t-3xl`}
        onClick={() => goToEvents()}
      >
        Events
      </li>
    </ul>
  );
};
