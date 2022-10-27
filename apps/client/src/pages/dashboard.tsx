import {
  useEventsQuery,
  useHabitsQuery,
  useTasksQuery,
  useUpdateHabitMutation,
  useUpdateTaskMutation,
} from "@producktivity/codegen";

import { MyPage } from "$core/@types";
import { Event, Habit, Task, Timer } from "$core/components";
import DefaultLayout from "$core/layouts/default";

const Dashboard: MyPage = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const [updateHabit] = useUpdateHabitMutation();
  const { data: dataHabits, refetch: refetchHabits } = useHabitsQuery();
  let habits = dataHabits?.me.habits ?? [];
  habits = [...habits];
  habits.sort((a, b) => a.name.localeCompare(b.name));

  const increaseHabit = async (id: string) => {
    const selectedHabit = habits.filter((habit) => habit.id === id)[0];
    if (
      selectedHabit.currentCount !== null &&
      selectedHabit.currentCount !== undefined &&
      selectedHabit.targetCount !== null &&
      selectedHabit.targetCount !== undefined &&
      selectedHabit.currentCount < selectedHabit.targetCount
    ) {
      await updateHabit({
        variables: {
          ...selectedHabit,
          currentCount: 1 + selectedHabit.currentCount,
          updateHabitId: id,
        },
      });
    }
    refetchHabits();
  };

  const [updateTask] = useUpdateTaskMutation();
  const { data: dataTasks, refetch: refetchTasks } = useTasksQuery();
  let tasks = dataTasks?.me.tasks ?? [];

  tasks = [...tasks];
  tasks = tasks.filter(
    (task) => new Date(task.dueDate) > yesterday && task.isCompleted === false
  );
  tasks.sort((a, b) => (new Date(a.dueDate) > new Date(b.dueDate) ? 1 : -1));

  const completeTask = async (id: string) => {
    const selectedTask = tasks.filter((task) => task.id === id)[0];
    await updateTask({
      variables: {
        ...selectedTask,
        isCompleted: !selectedTask.isCompleted,
        updateTaskId: id,
      },
    });
    refetchTasks();
  };

  const { data: dataEvents } = useEventsQuery();
  let events = dataEvents?.me.events ?? [];

  events = [...events];
  events.filter((event) => new Date(event.dueDate) > yesterday);
  events.sort((a, b) => (new Date(a.dueDate) > new Date(b.dueDate) ? 1 : -1));

  return (
    <div className="h-full ml-8 p-4 rounded-lg bg-white w-11/12 overflow-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Overview</h1>
      <div className="flex flex-col md:flex-row w-full h-1/2 justify-between bg-white">
        <div className="bg-brown-100 w-full md:w-2/5">
          <div className="text-xl md:text-2xl font-bold md:mb-2">Timers</div>
          <div className="px-2 md:px-10 flex justify-between w-full h-full">
            <Timer time={25}></Timer>
            <Timer time={5}></Timer>
          </div>
        </div>

        <div className="flex-1 bg-white">
          <div className="text-xl md:text-2xl font-bold md:mb-2">Habits</div>
          <div className="flex justify-center w-full h-full">
            <div className="grid grid-cols-4 gap-2 md:gap-4 rounded-lg w-full h-5/6">
              {habits.map((habit, index) => (
                <Habit
                  key={index}
                  currentCount={habit.currentCount}
                  handleIncrease={() => increaseHabit(habit.id)}
                  id={habit.id}
                  name={habit.name}
                  targetCount={habit.targetCount}
                />
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
                handleComplete={() => completeTask(task.id)}
                id={task.id}
                isCompleted={task.isCompleted}
                name={task.name}
                tags={task.tags}
              />
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
                    tags={event.tags}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.Layout = DefaultLayout;
Dashboard.authStatus = "private";

export default Dashboard;
