import { FC, PropsWithChildren, useState } from "react";

import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon.js";

import { MiniCalendar, Navbar , Modal } from "$core/components";

const Default: FC<PropsWithChildren> = ({ children }) => {
  const [minimize, setMinimize] = useState<boolean>(true);
  const [calendar, setCalendar] = useState<boolean>(false);
  const [calen, setCalen] = useState<boolean>(false);
  const toggleMinimize = () => {
    setMinimize(!minimize);
  };
  const toggleCalendar = () => {
    setCalendar(!calendar);
  };
  const handleCalen = () => {
    if (calen === false) {
      const Timeout = setTimeout(toggleCalendar, 300);
      setCalen(!calen);
    } else if (calen === true) {
      toggleCalendar();
      const Timeout = setTimeout(() => setCalen(!calen), 10);
    }
  };
  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-150";
  return (
    <div className="flex md:flex-row flex-col w-screen min-h-screen bg-gray-800">
      <Navbar isMinimized={minimize} toggleMinimize={toggleMinimize}></Navbar>
      <div className="flex flex-col justify-start w-screen h-screen bg-gray-800">
        <div className="pt-8 px-16 w-full flex justify-end bg-gray-800 h-24">
          <ChevronLeftIcon
            className={`ml-5 h-8 w-8 text-white ${hoverClass}`}
            onClick={handleCalen}
          />
        </div>
        {children}
      </div>
      {/* <Modal>
        <h1>Hello</h1>
      </Modal> */}
      <MiniCalendar calen={calen} calendar={calendar}></MiniCalendar>
    </div>
  );
};

export default Default;
