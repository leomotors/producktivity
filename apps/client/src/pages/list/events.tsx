import { useState } from "react";

import {
  Event as GQLEvent,
  useCreateEventMutation,
  useDeleteEventMutation,
  useEventsQuery,
  useUpdateEventMutation,
} from "@producktivity/codegen";

import { MyPage } from "$core/@types";
import {
  ConfirmButton,
  DateInput,
  Event,
  FormInput,
  Tabs,
  TagInput,
} from "$core/components";
import DefaultLayout from "$core/layouts/default";

const Events: MyPage = () => {
  const { data, refetch } = useEventsQuery();
  const [updateEvent] = useUpdateEventMutation();
  const [deleteEvent] = useDeleteEventMutation();
  const [createEvent] = useCreateEventMutation();

  interface IInput {
    id: string;
    name: string;
    dueDate: string;
    tags: string[];
    userId: string;
  }
  const initialState: IInput = {
    id: "-1",
    name: "Select an event",
    dueDate: "",
    tags: ["Holiday"],
    userId: "",
  };

  const [input, setInput] = useState<IInput>(initialState);

  const events = data?.me.events ?? [];

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const updateInput = (
    name: string,
    value: string | string[] | undefined | null
  ) => {
    setInput({ ...input, [name]: value });
  };

  const selectEvent = (id: string) => {
    const selectedEvent = events.filter((event) => event.id === id)[0];
    if (selectedEvent.tags !== null && selectedEvent.tags !== undefined) {
      setInput({
        id: selectedEvent.id,
        name: selectedEvent.name,
        dueDate: selectedEvent.dueDate,
        tags: selectedEvent.tags,
        userId: selectedEvent.userId,
      });
    }
    console.log(input);
  };

  const removeEvent = async (id: string) => {
    await deleteEvent({
      variables: {
        deleteEventId: id,
      },
    });
    refetch();
  };

  const saveEvent = async (id: string) => {
    if (id === "-1" && input.tags !== undefined) {
      await createEvent({
        variables: {
          name: input.name,
          dueDate: input.dueDate,
          tags: input.tags,
        },
      });
    } else {
      await updateEvent({
        variables: {
          ...input,
          updateEventId: id,
        },
      });
    }
    refetch();
    setInput(initialState);
    console.log(input);
  };
  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-110 hover:cursor-pointer";
  return (
    <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
      <Tabs active="events"></Tabs>
      <div className="overflow-auto p-4 flex space-y-4 h-full w-full bg-white">
        <div className="p-4 flex flex-col space-y-4 h-full w-3/5 bg-white">
          {events.map(
            (event, index) =>
              new Date(event.dueDate) > yesterday && (
                <div key={index} className="flex items-center w-full space-x-8">
                  <Event
                    key={index}
                    date={new Date(event.dueDate)}
                    name={event.name}
                    topic={event.tags ?? []}
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
                    onClick={() => removeEvent(event.id)}
                  >
                    Delete
                  </div>
                </div>
              )
          )}
        </div>
        <div className="ml-12 p-4 flex flex-col items-start space-y-4 h-full w-2/5 bg-white">
          <FormInput
            handleChange={(e) => updateInput("name", e.target.value)}
            name="name"
            value={input.name}
          ></FormInput>
          <TagInput
            handleChange={(value) => updateInput("tags", value)}
            name="tags"
            value={input.tags}
          ></TagInput>
          {/* <DateInput
            handleChange={(value) => updateInput("dueDate", value)}
            name="dueDate"
            value={input.dueDate}
          ></DateInput> */}
          <ConfirmButton
            handleSave={() => saveEvent(input.id)}
            text={input.id === "-1" ? "Add new" : "Save"}
          ></ConfirmButton>
        </div>
      </div>
    </div>
  );
};

Events.Layout = DefaultLayout;

export default Events;
