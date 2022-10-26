import type { FC } from "react";

interface ITasks {
  __typename?: "Task" | undefined;
  id: string;
  name: string;
  dueDate: string;
  tags?: string[] | null | undefined;
  userId: string;
}

interface IEvents {
  __typename?: "Event" | undefined;
  id: string;
  name: string;
  dueDate: string;
  tags?: string[] | null | undefined;
  userId: string;
}

interface ICalendarItem {
  time: Date;
  day: number | null;
  tasks: ITasks[];
  events: IEvents[];
}

export const CalendarItem: FC<ICalendarItem> = ({
  day,
  events,
  tasks,
  time,
}) => {
  return (
    <>
      {tasks.map((task, index) => {
        if (
          new Date(task.dueDate).getFullYear() === time.getFullYear() &&
          new Date(task.dueDate).getMonth() === time.getMonth() &&
          new Date(task.dueDate).getDate() === day
        ) {
          return (
            <div key={index} className="rounded-lg bg-emerald-200 mb-1 p-1">
              {task.name}
            </div>
          );
        }
        return;
      })}

      {events.map((event, index) => {
        if (
          new Date(event.dueDate).getFullYear() === time.getFullYear() &&
          new Date(event.dueDate).getMonth() === time.getMonth() &&
          new Date(event.dueDate).getDate() === day
        ) {
          return (
            <div key={index} className="rounded-lg bg-indigo-200 mb-1 p-1">
              {event.name}
            </div>
          );
        }
        return;
      })}
    </>
  );
};
