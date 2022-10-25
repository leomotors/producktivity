import { useState } from "react";

import type { NextPageWithLayout } from "next";

import Event from "$core/general/components/Event";
import TagInput from "$core/general/components/TagInput";
import Tabs from "$modules/list/tabs";

import ConfirmButton from "../../core/general/components/ConfirmButton";
import DateInput from "../../core/general/components/DateInput";
import FormInput from "../../core/general/components/FormInput";
import DefaultLayout from "../../core/general/layouts/default";

const Tasks: NextPageWithLayout = () => {
  interface IEvents {
    id: number;
    name: string;
    topic: string[];
    date: Date;
  }
  const [input, setInput] = useState<IEvents>({
    id: -1,
    name: "Select an event",
    topic: ["Holiday"],
    date: new Date(),
  });
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
  const updateEvent = (
    name: string,
    value: string | string[] | Date | null
  ) => {
    setInput({ ...input, [name]: value });
    console.log(input);
  };
  const selectEvent = (id: number) => {
    setInput(() => events.filter((event) => event.id === id)[0]);
  };
  const deleteEvent = (id: number) => {
    setEvents(() => events.filter((event) => event.id !== id));
  };
  const saveEvent = (id: number) => {
    if (input.id === -1) {
      setEvents((prevEvents) => [...prevEvents, { ...input, id: 45 }]);
    } else {
      setEvents(() =>
        events.map((event) => {
          if (event.id === id) {
            return input;
          }
          return event;
        })
      );
    }
    setInput({
      id: -1,
      name: "Select an event",
      topic: ["Holiday"],
      date: new Date(),
    });
  };
  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-110 hover:cursor-pointer";
  return (
    <DefaultLayout>
      <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
        <Tabs active="events"></Tabs>
        <div className="overflow-auto p-4 flex space-y-4 h-full w-full bg-white">
          <div className="p-4 flex flex-col space-y-4 h-full w-3/5 bg-white">
            {events.map(
              (event, index) =>
                event.date > yesterday && (
                  <div
                    key={index}
                    className="flex items-center w-full space-x-8"
                  >
                    <Event
                      key={index}
                      date={event.date}
                      name={event.name}
                      topic={event.topic}
                    ></Event>
                    <div
                      className={`font-bold rounded-lg px-4 py-2 h-fit flex justify-center items-center ${
                        input.id === event.id ? "bg-lime-300" : "bg-amber-300"
                      } ${hoverClass}`}
                      onClick={() => selectEvent(event.id)}
                    >
                      {input.id === event.id ? "Editing" : "Edit"}
                    </div>
                    <div
                      className={`font-bold rounded-lg px-4 py-2 h-fit flex justify-center items-center bg-red-600 text-white ${hoverClass}`}
                      onClick={() => deleteEvent(event.id)}
                    >
                      Delete
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="ml-12 p-4 flex flex-col items-start space-y-4 h-full w-2/5 bg-white">
            <FormInput
              handleChange={(e) => updateEvent("name", e.target.value)}
              name="name"
              value={input.name}
            ></FormInput>
            <TagInput
              handleChange={(value) => updateEvent("topic", value)}
              name="topic"
              value={input.topic}
            ></TagInput>
            <DateInput
              handleChange={(value) => updateEvent("date", value)}
              name="Date"
              value={input.date}
            ></DateInput>
            <ConfirmButton
              handleSave={() => saveEvent(input.id)}
              text={input.id === -1 ? "Add new" : "Save"}
            ></ConfirmButton>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tasks;
