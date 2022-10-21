import type { NextPage } from "next";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon.js";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon.js";

interface ITask {
	name: string;
	topic: string[];
	deadline: Date;
	complete: boolean;
}
const Task: NextPage = () => {
	return (
		<div className="drop-shadow-lg flex justify-between w-full h-28 bg-emerald-50">
			<div className="px-8 py-2 flex flex-col justify-around w-full">
				<div className="flex justify-between text-xl space-x-8 w-full">
					<h1 className="font-bold">Questions 1-5</h1>
					<div className="flex items-center text-emerald-600 font-bold">
						<CalendarIcon className="h-6 w-6 mr-2" />
						20/10/22
					</div>
				</div>
				<div className="flex text-xl space-x-4 w-full">
					<div className="rounded-full px-6 py-2 bg-white">Physics</div>
					<div className="rounded-full px-6 py-2 bg-white">Homework</div>
					<div className="rounded-full px-6 py-2 bg-white">Midterm</div>
				</div>
			</div>

			<div className="w-1/6 h-full flex justify-center items-center bg-emerald-600">
				<CheckIcon className="h-8 w-8 text-zinc-100" />
			</div>
		</div>
	);
};

export default Task;