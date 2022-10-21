import type { NextPage } from "next";
import { useState } from "react";
import NavItem from "../components/NavItem";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon.js";
import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon.js";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon.js";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon.js";
import ClipboardDocumentCheckIcon from "@heroicons/react/24/outline/ClipboardDocumentCheckIcon.js";

const Navbar: NextPage = () => {
	const [minimize, setMinimize] = useState<boolean>(true);
	const toggleMinimize = () => {
		setMinimize(!minimize);
	};
	const hoverClass =
		"transition ease-in-out delay-50 duration-150 hover:scale-150";
	return (
		<div className="p-8 flex flex-col items-center space-y-12 bg-black w-32 min-h-screen">
			<NavItem>
				<ChevronRightIcon
					className={`h-8 w-8 text-white ${hoverClass}`}
					onClick={toggleMinimize}
				/>
			</NavItem>
			<NavItem>
				<PlusCircleIcon className={`h-8 w-8 text-white ${hoverClass}`} data-tooltip-target="tooltip-right" data-tooltip-placement="right"/>
			</NavItem>
			<NavItem>
				<CalendarIcon className={`h-8 w-8 text-white ${hoverClass}`} />
			</NavItem>
			<NavItem>
				<Squares2X2Icon className={`h-8 w-8 text-white ${hoverClass}`} />
			</NavItem>
			<NavItem>
				<ClipboardDocumentCheckIcon
					className={`h-8 w-8 text-white ${hoverClass}`}
				/>
			</NavItem>
		</div>
	);
};

export default Navbar;
