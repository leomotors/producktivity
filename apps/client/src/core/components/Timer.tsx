import { useState } from "react";
import type { FC } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import PauseCircleIcon from "@heroicons/react/24/outline/PauseCircleIcon.js";
import PlayCircleIcon from "@heroicons/react/24/outline/PlayCircleIcon.js";

const renderTime = (remainingTime: number) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime - minutes * 60;
  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  } else {
    return `${minutes}:${seconds}`;
  }
};

const hoverClass =
  "transition ease-in-out delay-50 duration-150 hover:scale-110";

export const Timer: FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const toggleTimer = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center rounded-lg w-5/12 md:h-4/5 p-2 bg-white">
      <div className="md:text-xl mb-2">Pomodoro</div>
      <div>
        <CountdownCircleTimer
          colors={["#FCA5A5", "#FCA5A5"]}
          colorsTime={[1, 0]}
          duration={25 * 60}
          isPlaying={isPlaying}
          size={120}
          strokeWidth={6}
        >
          {({ remainingTime }) => (
            <h1 className="md:text-3xl">{renderTime(remainingTime)}</h1>
          )}
        </CountdownCircleTimer>
      </div>

      <div className="flex justify-center mt-2">
        {isPlaying ? (
          <PauseCircleIcon
            className={`h-12 w-12 text-red-300 hover:text-red-400 active:text-red-500 ${hoverClass}`}
            onClick={() => toggleTimer()}
          />
        ) : (
          <PlayCircleIcon
            className={`h-12 w-12 text-red-300 hover:text-red-400 active:text-red-500 ${hoverClass}`}
            onClick={() => toggleTimer()}
          />
        )}
      </div>
    </div>
  );
};
