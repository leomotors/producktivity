import type { ReactElement } from "react";
import type { NextPageWithLayout } from "next";
import { useState } from "react";
import DefaultLayout from "../modules/general/layouts/default"

const Calendar: NextPageWithLayout = () => {
	const [minimize, setMinimize] = useState<boolean>(true);
	const toggleMinimize = () => {
		setMinimize(!minimize);
	};
	return (
		<DefaultLayout>
				<div className="m-8 p-8 rounded-lg bg-white h-11/12 w-11/12 overflow-auto">
					<h1 className="text-4xl font-bold mb-8">Overview</h1>
					
				</div>
		</DefaultLayout>
	);
};

export default Calendar;
