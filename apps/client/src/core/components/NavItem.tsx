import type { FC } from "react";

type Children = {
  children?: React.ReactNode;
  link?: string;
};
export const NavItem: FC<Children> = ({ children, link }) => {
  const baseURL = `http://localhost:5650`;
  const goToLink = (link: string | undefined) => {
    if (link !== "#") {
      window.location.href = `${baseURL}/${link}`;
    }
  };
  return (
    <div className="flex items-center space-x-2" onClick={() => goToLink(link)}>
      {children}
    </div>
  );
};
