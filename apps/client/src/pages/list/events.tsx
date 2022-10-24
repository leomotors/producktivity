import type { NextPageWithLayout } from "next";

import Event from "$core/general/components/Event";
import Tabs from "$modules/list/tabs";

import DefaultLayout from "../../core/general/layouts/default";

const Tasks: NextPageWithLayout = () => {
  return (
    <DefaultLayout>
      <div className="h-full flex flex-col ml-8 rounded-lg bg-gray-800 w-11/12 overflow-auto">
        <Tabs active="events"></Tabs>
        <div className="overflow-auto p-4 flex flex-col space-y-4 h-full w-full bg-white">
          <div className="p-4 flex flex-col space-y-4 h-full w-1/2 bg-white">
            <Event></Event>
            <Event></Event>
            <Event></Event>
            <Event></Event>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tasks;
