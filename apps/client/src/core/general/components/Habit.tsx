import type { FC } from "react";

interface IHabit {
  text: string;
  id: number;
  handleDelete(id: number): void;
}
const Habit: FC<IHabit> = ({ handleDelete, id, text }) => {
  return (
    <div className="rounded-md flex justify-center items-center w-full h-full bg-emerald-50">
      <h1 className="text-sm md:text-2xl text-center">{text}</h1>
    </div>
  );
};

export default Habit;
