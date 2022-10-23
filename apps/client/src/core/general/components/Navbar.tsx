import { useState } from "react";
import type { FC } from "react";

import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon.js";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon.js";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon.js";
import ClipboardDocumentCheckIcon from "@heroicons/react/24/outline/ClipboardDocumentCheckIcon.js";
import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon.js";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon.js";

import NavItem from "./NavItem";

const Navbar: FC = () => {
  const [isMinimized, setIsMinimized] = useState<boolean | undefined>(true);
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-150";
  return (
    <>
      {isMinimized ? (
        <div className="p-8 flex flex-row md:flex-col items-baseline md:items-center space-x-4 md:space-y-12 bg-gray-800 w-full md:w-20 md:min-h-screen">
          <NavItem link="#">
            <ChevronRightIcon
              className={`ml-5 h-8 w-8 text-white ${hoverClass}`}
              onClick={toggleMinimize}
            />
          </NavItem>
          <NavItem link="dashboard">
            <Squares2X2Icon className={`h-8 w-8 text-white ${hoverClass}`} />
          </NavItem>
          <NavItem link="create">
            <PlusCircleIcon className={`h-8 w-8 text-white ${hoverClass}`} />
          </NavItem>
          <NavItem link="calendar">
            <CalendarIcon className={`h-8 w-8 text-white ${hoverClass}`} />
          </NavItem>
          <NavItem link="list/tasks">
            <ClipboardDocumentCheckIcon
              className={`h-8 w-8 text-white ${hoverClass}`}
            />
          </NavItem>
        </div>
      ) : (
        <div className="md:items-start py-8 flex flex-row md:flex-col items-start space-x-4 md:space-y-12 bg-gray-800 w-full md:w-36 md:min-h-screen">
          <div className="items-center flex space-x-2">
            <NavItem link="#">
              <ChevronLeftIcon
                className={`ml-5 h-8 w-8 text-white ${hoverClass}`}
                onClick={toggleMinimize}
              />
            </NavItem>
            <h1 className="text-white">Minimize</h1>
          </div>
          <div className="items-center flex space-x-2">
            <NavItem link="dashboard">
              <Squares2X2Icon className={`h-8 w-8 text-white ${hoverClass}`} />
            </NavItem>
            <h1 className="text-white">Dashboard</h1>
          </div>
          <div className="items-center flex space-x-2">
            <NavItem link="create">
              <PlusCircleIcon className={`h-8 w-8 text-white ${hoverClass}`} />
            </NavItem>
            <h1 className="text-white">Create</h1>
          </div>
          <div className="items-center flex space-x-2">
            <NavItem link="calendar">
              <CalendarIcon className={`h-8 w-8 text-white ${hoverClass}`} />
            </NavItem>
            <h1 className="text-white">Calendar</h1>
          </div>
          <div className="items-center flex space-x-2">
            <NavItem link="list/tasks">
              <ClipboardDocumentCheckIcon
                className={`h-8 w-8 text-white ${hoverClass}`}
              />
            </NavItem>
            <h1 className="text-white">My Lists</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
