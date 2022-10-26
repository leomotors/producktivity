import type { FC } from "react";

interface IHabit {
  name: string;
  id: string;
  currentCount: number | null | undefined;
  targetCount: number | null | undefined;
  handleIncrease(id: string): void;
}
export const Habit: FC<IHabit> = ({
  currentCount,
  handleIncrease,
  id,
  name,
  targetCount,
}) => {
  const hoverText =
    "transition ease-in-out delay-50 duration-150 hover:scale-110 hover:cursor-pointer";

  return (
    <div className="relative rounded-md flex justify-center items-center w-full h-full bg-amber-50">
      <div className="text-sm absolute top-2 left-2">{`${currentCount} / ${targetCount}`}</div>
      <h1
        className={`text-sm md:text-2xl text-center h-3/5 w-3/5 flex items-center justify-center ${hoverText}`}
        onClick={() => handleIncrease(id)}
      >
        {name}
      </h1>
    </div>
  );
};
