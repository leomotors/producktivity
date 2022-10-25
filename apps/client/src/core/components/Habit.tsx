import type { FC } from "react";

import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon.js";

interface IHabit {
  text: string;
  id: number;
  count: number;
  handleDelete(id: number): void;
  handleIncrease(id: number): void;
}
export const Habit: FC<IHabit> = ({
  count,
  handleDelete,
  handleIncrease,
  id,
  text,
}) => {
  const hoverX =
    "transition ease-in-out delay-50 duration-150 hover:scale-150 hover:cursor-pointer";
  const hoverText =
    "transition ease-in-out delay-50 duration-150 hover:scale-110 hover:cursor-pointer";

  return (
    <div className="relative rounded-md flex justify-center items-center w-full h-full bg-amber-50">
      <XMarkIcon
        className={`absolute w-5 h-5 top-1 right-1 ${hoverX}`}
        onClick={() => handleDelete(id)}
      />
      <div className="text-sm absolute top-1 left-1">{count}</div>
      <h1
        className={`text-sm md:text-2xl text-center h-3/5 w-3/5 flex items-center justify-center ${hoverText}`}
        onClick={() => handleIncrease(id)}
      >
        {text}
      </h1>
    </div>
  );
};
