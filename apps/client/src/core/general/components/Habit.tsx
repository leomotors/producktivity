import type { FC } from "react";

import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon.js";

interface IHabit {
  text: string;
  id: number;
  handleDelete(id: number): void;
}
const Habit: FC<IHabit> = ({ handleDelete, id, text }) => {
  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-150 hover:cursor-pointer";
  return (
    <div className="relative rounded-md flex justify-center items-center w-full h-full bg-emerald-50">
      <XMarkIcon
        className={`absolute w-5 h-5 top-1 right-1 ${hoverClass}`}
        onClick={() => handleDelete(id)}
      />
      <h1 className="text-sm md:text-2xl text-center">{text}</h1>
    </div>
  );
};

export default Habit;
