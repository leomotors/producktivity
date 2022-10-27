import type { FC } from "react";

import ArrowLeftOnRectangleIcon from "@heroicons/react/24/outline/ArrowLeftOnRectangleIcon";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon.js";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon.js";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon.js";
import ClipboardDocumentCheckIcon from "@heroicons/react/24/outline/ClipboardDocumentCheckIcon.js";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon.js";

import { useUser } from "$modules/authentication";

import clsx from "clsx";

import { NavItem } from "./NavItem";

interface INavbar {
  isMinimized: boolean;
  toggleMinimize(): void;
}

const hoverClass =
  "transition ease-in-out delay-50 duration-150 hover:scale-150";

export const Navbar: FC<INavbar> = ({ isMinimized, toggleMinimize }) => {
  const { resetToken } = useUser();

  return (
    <>
      <div
        className={`duration-700 transition-all ease-in-out md:items-start py-8 flex flex-row md:flex-col items-start space-x-4 md:space-y-12 bg-gray-800 w-full ${
          isMinimized ? "md:w-12" : "md:w-36"
        } md:min-h-screen`}
      >
        <div className="items-center flex space-x-2">
          <NavItem link="#">
            {isMinimized ? (
              <ChevronRightIcon
                className={`ml-5 h-8 w-8 text-white ${hoverClass}`}
                onClick={toggleMinimize}
              />
            ) : (
              <ChevronLeftIcon
                className={`ml-5 h-8 w-8 text-white ${hoverClass}`}
                onClick={toggleMinimize}
              />
            )}
          </NavItem>

          <h1 className="text-white hover:cursor-pointer ">Minimize</h1>
        </div>

        <div className="items-center flex space-x-2">
          <NavItem link="/dashboard">
            <Squares2X2Icon className={`h-8 w-8 text-white ${hoverClass}`} />
            <h1 className="text-white hover:cursor-pointer ">Dashboard</h1>
          </NavItem>
        </div>

        <div className="items-center flex space-x-2">
          <NavItem link="/calendar">
            <CalendarIcon className={`h-8 w-8 text-white ${hoverClass}`} />
          </NavItem>
          <h1 className="text-white hover:cursor-pointer ">Calendar</h1>
        </div>

        <div className="items-center flex space-x-2">
          <NavItem link="/list/tasks">
            <ClipboardDocumentCheckIcon
              className={`h-8 w-8 text-white ${hoverClass}`}
            />
          </NavItem>
          <h1 className="text-white hover:cursor-pointer ">Lists</h1>
        </div>

        <div className="items-center flex space-x-2">
          <button onClick={() => resetToken()}>
            <ArrowLeftOnRectangleIcon
              className={clsx("h-8 w-8 text-white", hoverClass)}
            />
          </button>
          <p className="text-white hover:cursor-pointer">Logout</p>
        </div>
      </div>
    </>
  );
};
