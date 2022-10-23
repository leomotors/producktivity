import { useState } from "react";

import type { NextPage } from "next";

import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon.js";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon.js";
import ClipboardDocumentCheckIcon from "@heroicons/react/24/outline/ClipboardDocumentCheckIcon.js";
import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon.js";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon.js";

import NavItem from "../components/NavItem";

const Navbar: NextPage = () => {
  const [minimize, setMinimize] = useState<boolean>(true);
  const toggleMinimize = () => {
    setMinimize(!minimize);
  };
  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-150";
  return (
    <div className="p-8 flex flex-row md:flex-col items-baseline md:items-center space-x-4 md:space-y-12 bg-gray-800 w-full md:w-32 md:min-h-screen">
      <NavItem>
        <ChevronRightIcon
          className={`h-8 w-8 text-white ${hoverClass}`}
          onClick={toggleMinimize}
        />
      </NavItem>
      <NavItem>
        <PlusCircleIcon
          className={`h-8 w-8 text-white ${hoverClass}`}
          data-tooltip-placement="right"
          data-tooltip-target="tooltip-right"
        />
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
