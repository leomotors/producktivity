import type { NextPage } from "next";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon.js";

const Event: NextPage = () => {
	return (
		<div className="drop-shadow-lg flex justify-between w-full h-28 bg-emerald-50">
			<div className="px-8 py-2 flex flex-col justify-around w-full">
				<div className="flex justify-between text-xl space-x-8 w-full">
					<h1 className="font-bold">Calculus Lecture</h1>
					<div className="flex items-center text-emerald-600 font-bold">
						<CalendarIcon className="h-6 w-6 mr-2" />
						20/10/22
					</div>
				</div>
				<div className="flex text-xl space-x-4 w-full">
					<div className="rounded-full px-6 py-2 bg-white">Calculus I</div>
					<div className="rounded-full px-6 py-2 bg-white">ENG 2</div>
				</div>
			</div>
		</div>
	);
};

export default Event;
