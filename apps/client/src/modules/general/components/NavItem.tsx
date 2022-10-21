import type { NextPage } from "next";

type Children = {
	children?: React.ReactNode;
};
const Navbar: NextPage<Children> = ({ children }) => {
	return <div>{children}</div>;
};

export default Navbar;
