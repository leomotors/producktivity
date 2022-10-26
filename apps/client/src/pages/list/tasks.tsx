import { useState } from "react";

import {
  Task as GQLTask,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useTasksQuery,
  useUpdateTaskMutation,
} from "@producktivity/codegen";

import { MyPage } from "$core/@types";
import {
  ConfirmButton,
  DateInput,
  FormInput,
  Tabs,
  TagInput,
  Task,
} from "$core/components";
import DefaultLayout from "$core/layouts/default";

interface IInput {
  id: string;
  name: string;
  description: string;
  tags: string[];
  dueDate: string;
  userId: string;
}

const initialState: IInput = {
  id: "-1",
  name: "Select a task",
  description: "description...",
  tags: ["Homework"],
  dueDate: new Date().toString(),
  userId: "",
};

const Tasks: MyPage = () => {
  const { data, refetch } = useTasksQuery();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [createTask] = useCreateTaskMutation();

  const [input, setInput] = useState<IInput>(initialState);

  let tasks = data?.me.tasks ?? [];
  tasks = [...tasks];
  tasks.sort((a, b) => (new Date(a.dueDate) > new Date(b.dueDate) ? 1 : -1));

  const updateInput = (name: string, value: string | string[]) => {
    setInput({ ...input, [name]: value });
    console.log(input);
  };
  const selectTask = (id: string) => {
    const selectedTask = tasks.filter((task) => task.id === id)[0];
    if (selectedTask.tags !== null && selectedTask.tags !== undefined) {
      setInput({
        id: selectedTask.id,
        name: selectedTask.name,
        description: selectedTask.description,
        dueDate: selectedTask.dueDate,
        tags: selectedTask.tags,
        userId: selectedTask.userId,
      });
    }
  };

  const removeTask = async (id: string) => {
    await deleteTask({
      variables: {
        deleteTaskId: id,
      },
    });
    refetch();
  };

  const saveTask = async (id: string) => {
    if (id === "-1" && input.tags !== undefined) {
      await createTask({
        variables: {
          name: input.name,
          description: input.description,
          dueDate: input.dueDate,
          tags: input.tags,
        },
      });
    } else {
      await updateTask({
        variables: {
          ...input,
          updateTaskId: id,
        },
      });
    }
    refetch();
    setInput(initialState);
  };

  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-110 hover:cursor-pointer";
  return (
    <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
      <Tabs active="tasks"></Tabs>
      <div className="overflow-auto p-4 flex space-y-4 h-full w-full bg-white">
        <div className="p-4 flex flex-col space-y-4 h-full w-3/5 bg-white">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center w-full space-x-8">
              <Task
                date={task.dueDate}
                handleDelete={() => removeTask(task.id)}
                id={task.id}
                name={task.name}
                topic={task.tags}
              ></Task>
              <div
                className={`font-bold rounded-lg px-4 py-2 h-fit flex justify-center items-center ${
                  input.id === task.id ? "bg-lime-300" : "bg-amber-300"
                } ${hoverClass}`}
                onClick={() => selectTask(task.id)}
              >
                {input.id === task.id ? "Editing" : "Edit"}
              </div>
              <div
                className={`font-bold rounded-lg px-4 py-2 h-fit flex justify-center items-center bg-red-600 text-white ${hoverClass}`}
                onClick={() => removeTask(task.id)}
              >
                Delete
              </div>
            </div>
          ))}
        </div>
        <div className="ml-12 p-4 flex flex-col items-start space-y-4 h-full w-2/5 bg-white">
          <FormInput
            handleChange={(e) => updateInput("name", e.target.value)}
            name="name"
            value={input.name}
          ></FormInput>
          <FormInput
            handleChange={(e) => updateInput("description", e.target.value)}
            name="details"
            value={input.description}
          ></FormInput>
          <TagInput
            handleChange={(value) => updateInput("tags", value)}
            name="tags"
            value={input.tags}
          ></TagInput>
          <DateInput
            handleChange={(value) => updateInput("dueDate", value.toString())}
            name="Date"
            value={new Date(input.dueDate)}
          ></DateInput>
          <ConfirmButton
            handleSave={() => saveTask(input.id)}
            text={input.id === "-1" ? "Add new" : "Save"}
          ></ConfirmButton>
        </div>
      </div>
    </div>
  );
};

Tasks.Layout = DefaultLayout;

export default Tasks;
