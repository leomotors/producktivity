import { useState } from "react";

import type { NextPageWithLayout } from "next";

import Event from "$core/general/components/Event";
import Tabs from "$modules/list/tabs";

import DefaultLayout from "../../core/general/layouts/default";

const Tasks: NextPageWithLayout = () => {
  interface IEvents {
    id: number;
    name: string;
    topic: string[];
    date: Date;
  }
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
      <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
        <Tabs active="events"></Tabs>
        <div className="overflow-auto p-4 flex flex-col space-y-4 h-full w-full bg-white">
          <div className="p-4 flex flex-col space-y-4 h-full w-2/5 bg-white">
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
    </DefaultLayout>
  );
};

export default Tasks;
