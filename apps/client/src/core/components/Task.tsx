import type { FC } from "react";

import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon.js";
import CheckBadgeIcon from "@heroicons/react/24/outline/CheckBadgeIcon.js";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon.js";

interface ITask {
  name: string;
  tags: string[] | null | undefined;
  date: Date;
  id: string;
  isCompleted: boolean;
  handleComplete(id: string): void;
}
export const Task: FC<ITask> = ({
  date,
  handleComplete,
  id,
  isCompleted,
  name,
  tags,
}) => {
  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-110";
  return (
    <div
      className={`drop-shadow-lg flex justify-between w-full h-20 ${
        isCompleted ? "bg-cyan-50" : "bg-emerald-50"
      } `}
    >
      <div className="p-2 md:px-8 flex flex-col justify-around w-full">
        <div className="md:text-md flex flex-col md:flex-row justify-between md:space-x-8 w-full">
          <h1 className="font-bold">{name}</h1>
          <div
            className={`flex items-center ${
              isCompleted ? "text-cyan-600" : "text-emerald-600"
            } font-bold`}
          >
            <CalendarIcon className="h-6 w-6 md:mr-2" />
            {`${new Date(date).getDate()}/${
              new Date(date).getMonth() + 1
            }/${new Date(date).getFullYear()}`}
          </div>
        </div>

        <div className="md:text-md flex space-x-1 md:space-x-4 w-full">
          {tags !== null &&
            tags !== undefined &&
            tags.map((item, index) => (
              <div
                key={index}
                className="rounded-full p-1 md:px-3 py-1 bg-white"
              >
                {item}
              </div>
            ))}
        </div>
      </div>

      <div
        className={`w-1/6 h-full flex justify-center items-center ${
          isCompleted
            ? "bg-cyan-500 hover:bg-cyan-400"
            : "bg-emerald-600 hover:bg-emerald-500"
        }  ${hoverClass}`}
        onClick={() => handleComplete(id)}
      >
        {isCompleted ? (
          <CheckBadgeIcon className={`h-8 w-8 text-zinc-100 ${hoverClass}`} />
        ) : (
          <CheckIcon className={`h-8 w-8 text-zinc-100 ${hoverClass}`} />
        )}
      </div>
    </div>
  );
};
