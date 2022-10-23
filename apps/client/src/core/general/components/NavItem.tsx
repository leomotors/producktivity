import type { FC } from "react";

type Children = {
  children?: React.ReactNode;
};
const Navbar: FC<Children> = ({ children }) => {
  return <div>{children}</div>;
};

export default Navbar;
