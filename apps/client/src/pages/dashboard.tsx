import {
  Event as GQLEvent,
  Habit as GQLHabit,
  Task as GQLTask,
  useEventsQuery,
  useHabitsQuery,
  useTasksQuery,
} from "@producktivity/codegen";

import { MyPage } from "$core/@types";
import { Event, Habit, Task, Timer } from "$core/components";
import DefaultLayout from "$core/layouts/default";

const Dashboard: MyPage = () => {
  const { data: dataHabits, refetch: refetchHabits } = useHabitsQuery();
  const habits = dataHabits?.me.habits ?? [];

  const deleteHabit = (id: string) => {};

  const increaseHabit = (id: string) => {};

  const { data: dataTasks, refetch: refetchTasks } = useTasksQuery();
  const tasks = dataTasks?.me.tasks ?? [];

  const deleteTask = (id: string) => {};

  const { data: dataEvents, refetch: refetchEvents } = useEventsQuery();
  const events = dataEvents?.me.events ?? [];

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    <div className="h-full ml-8 p-4 rounded-lg bg-white w-11/12 overflow-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Overview</h1>
      <div className="flex flex-col md:flex-row w-full h-1/2 justify-between bg-white">
        <div className="bg-brown-100 w-full md:w-2/5">
          <div className="text-xl md:text-2xl font-bold md:mb-2">Timers</div>
          <div className="px-2 md:px-10 flex justify-between w-full h-full">
            <Timer></Timer>
            <Timer></Timer>
          </div>
        </div>
        <div className="flex-1 bg-white">
          <div className="text-xl md:text-2xl font-bold md:mb-2">Habits</div>
          <div className="flex justify-center w-full h-full">
            <div className="grid grid-cols-4 gap-2 md:gap-4 rounded-lg w-full h-5/6">
              {habits.map((habit, index) => (
                <Habit
                  key={index}
                  count={habit.currentCount}
                  handleDelete={() => deleteHabit(habit.id)}
                  handleIncrease={() => increaseHabit(habit.id)}
                  id={habit.id}
                  text={habit.name}
                ></Habit>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-fit justify-between">
        <div className="flex-1 bg-white mb-2">
          <div className="text-xl md:text-2xl font-bold mb-4">Tasks</div>
          <div className="h-fit md:px-10 flex flex-col space-y-4 w-full bg-white">
            {tasks.map((task, index) => (
              <Task
                key={index}
                date={task.dueDate}
                handleDelete={() => deleteTask(task.id)}
                id={task.id}
                name={task.name}
                topic={task.tags}
              ></Task>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-white">
          <div className="text-xl md:text-2xl font-bold mb-4">
            Upcoming Events
          </div>
          <div className="md:px-10 flex flex-col space-y-4 justify-center w-full min-h-fit bg-white">
            {events.map(
              (event, index) =>
                new Date(event.dueDate) > yesterday && (
                  <Event
                    key={index}
                    date={new Date(event.dueDate)}
                    name={event.name}
                    topic={event.tags}
                  ></Event>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.Layout = DefaultLayout;

export default Dashboard;
