import { useState } from "react";

import type { NextPage } from "next";

import Navbar from "../components/Navbar";

const Default: NextPage = ({ children }) => {
  const [minimize, setMinimize] = useState<boolean>(true);
  const toggleMinimize = () => {
    setMinimize(!minimize);
  };
  return (
    <div className="flex md:flex-row flex-col w-screen min-h-screen bg-gray-800">
      <Navbar></Navbar>
      <div className="flex justify-center w-screen h-screen bg-gray-800">
        {children}
      </div>
    </div>
  );
};

export default Default;
