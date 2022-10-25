import type { FC } from "react";

interface ICalendarItem {
  time: Date;
  day: number | null;
  tasks: { id: number; name: string; topic: string[]; date: Date }[];
  events: { id: number; name: string; topic: string[]; date: Date }[];
}
const CalendarItem: FC<ICalendarItem> = ({ day, events, tasks, time }) => {
  return (
    <>
      {tasks.map((task, index) => {
        if (
          task.date.getFullYear() === time.getFullYear() &&
          task.date.getMonth() === time.getMonth() &&
          task.date.getDate() === day
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
          event.date.getFullYear() === time.getFullYear() &&
          event.date.getMonth() === time.getMonth() &&
          event.date.getDate() === day
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

export default CalendarItem;
