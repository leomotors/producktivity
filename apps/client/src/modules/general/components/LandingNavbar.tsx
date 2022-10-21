import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SparklesIcon from "@heroicons/react/24/outline/SparklesIcon.js";

const Navbar: NextPage = () => {
	return (
		<div className="px-8 py-6 flex items-center bg-black w-full ">
			<div className="flex w-5/6 text-xl text-white font-bold">
				<SparklesIcon className="h-8 w-8 text-white mr-4" />
				Producktivity
			</div>
			<div className="w-1/6 flex justify-end space-x-8 text-white">
				<div>Doc</div>
				<div>Examples</div>
				<div>Account</div>
			</div>
		</div>
	);
};

export default Navbar;
