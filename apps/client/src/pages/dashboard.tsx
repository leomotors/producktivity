import type { ReactElement } from "react";
import type { NextPageWithLayout } from "next";
import { useState } from "react";
import DefaultLayout from "../modules/general/layouts/default"
import Timer from "../modules/general/components/Timer";
import Task from "../modules/general/components/Task";
import Event from "../modules/general/components/Event";
import Habit from "../modules/general/components/Habits";

const Dashboard: NextPageWithLayout = () => {
	const [minimize, setMinimize] = useState<boolean>(true);
	const toggleMinimize = () => {
		setMinimize(!minimize);
	};
	return (
		// <div className="flex w-screen min-h-screen bg-gray-500">
		// 	<Navbar></Navbar>
		// 	<div className="flex justify-center w-screen h-screen bg-gray-500">
		<DefaultLayout>
				<div className="m-8 p-8 rounded-lg bg-white h-11/12 w-11/12 overflow-auto">
					<h1 className="text-4xl font-bold mb-8">Overview</h1>
					<div className="flex w-full h-1/2 justify-between bg-red-100">
						<div className="w-2/5 bg-brown-100">
							<div className="text-3xl font-bold mb-4">Timers</div>
							<div className="px-10 flex justify-between w-full h-full bg-pink-200">
								<Timer></Timer>
								<Timer></Timer>
							</div>
						</div>
						<div className="flex-1 bg-orange-100">
							<div className="text-3xl font-bold mb-4">Habits</div>
							<div className="flex justify-center w-full h-full bg-pink-200">
								<div className="grid grid-cols-4 gap-4 rounded-lg w-full h-5/6 bg-green-300">
									<Habit></Habit>
									<Habit></Habit>
									<Habit></Habit>
									<Habit></Habit>
									<Habit></Habit>
									<Habit></Habit>
									<Habit></Habit>
									<Habit></Habit>
								</div>
							</div>
						</div>
					</div>
					<div className="flex w-full h-full justify-between bg-red-100">
						<div className="flex-1 bg-blue-100">
							<div className="text-3xl font-bold mb-4">Tasks</div>
							<div className="px-10 flex flex-col space-y-4 w-full h-5/6 bg-pink-200">
								<Task></Task>
								<Task></Task>
								<Task></Task>
							</div>
						</div>
						<div className="flex-1 bg-orange-100">
							<div className="text-3xl font-bold mb-4">Upcoming Events</div>
							<div className="px-10 flex justify-center w-full h-5/6 bg-pink-200">
								<Event></Event>
							</div>
						</div>
					</div>
				</div>
		</DefaultLayout>
		// 	</div>
		// </div>
	);
};

// Dashboard.getLayout = function getLayout(page: ReactElement) {
// 	return (
// 		<DefaultLayout>
// 			{page}
// 		</DefaultLayout>)
// }

export default Dashboard;
