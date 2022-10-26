import type { FC } from "react";

import Link from "next/link";

interface ITabs {
  active: string;
}

export const Tabs: FC<ITabs> = ({ active }) => {
  return (
    <ul className="flex justify-between text-xl font-bold text-center">
      <Link href="/list/tasks">
        <a
          className={`p-4 w-1/3 hover:cursor-pointer ${
            active === "tasks"
              ? "bg-white"
              : "bg-emerald-600 hover:bg-emerald-500"
          } rounded-t-3xl`}
        >
          <li>Tasks</li>
        </a>
      </Link>

      <Link href="/list/habits">
        <a
          className={`p-4 w-1/3 hover:cursor-pointer ${
            active === "habits"
              ? "bg-white"
              : "bg-emerald-600 hover:bg-emerald-500"
          } rounded-t-3xl`}
        >
          <li>Habits</li>{" "}
        </a>
      </Link>

      <Link href="/list/events">
        <a
          className={`p-4 w-1/3 hover:cursor-pointer ${
            active === "events"
              ? "bg-white"
              : "bg-emerald-600 hover:bg-emerald-500"
          } rounded-t-3xl`}
        >
          <li>Events</li>{" "}
        </a>
      </Link>
    </ul>
  );
};
