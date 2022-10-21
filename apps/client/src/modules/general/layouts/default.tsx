import type { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import Task from "../components/Task";
import Event from "../components/Event";
import Habit from "../components/Habits";

const Default: NextPage = ({ children }) => {
	const [minimize, setMinimize] = useState<boolean>(true);
	const toggleMinimize = () => {
		setMinimize(!minimize);
	};
	return (
		<div className="flex w-screen min-h-screen bg-gray-500">
			<Navbar></Navbar>
			<div className="flex justify-center w-screen h-screen bg-gray-500">
				{children}
			</div>
		</div>
	);
};

export default Default;
