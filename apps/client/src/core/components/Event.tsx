import type { FC } from "react";

import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon.js";

interface IEvent {
  name: string;
  topic: string[];
  date: Date;
}

export const Event: FC<IEvent> = ({ date, name, topic }) => {
  return (
    <div className="drop-shadow-lg flex justify-between w-full h-20 bg-indigo-50">
      <div className="p-2 md:px-8 flex flex-col justify-around w-full">
        <div className="md:text-md flex justify-between md:space-x-8 w-full">
          <h1 className="font-bold">{name}</h1>
          <div className="flex items-center text-indigo-600 font-bold">
            <CalendarIcon className="w-6 h-6 mr-2" />
            {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
          </div>
        </div>
        <div className="md:text-md flex space-x-4 w-full">
          {topic.map((item, index) => (
            <div key={index} className="rounded-full p-1 md:px-3 bg-white">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
