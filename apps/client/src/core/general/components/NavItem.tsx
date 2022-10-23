import type { FC } from "react";

type Children = {
  children?: React.ReactNode;
  link?: string;
};
const NavItem: FC<Children> = ({ children, link }) => {
  const baseURL = `http://localhost:5650`;
  const goToLink = (link: string) => {
    if (link !== "#") {
      window.location.href = `${baseURL}/${link}`;
    }
  };
  return <div onClick={() => goToLink(link)}>{children}</div>;
};

export default NavItem;
