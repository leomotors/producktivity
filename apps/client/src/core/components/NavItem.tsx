import type { FC } from "react";

import Link from "next/link";

type Children = {
  children?: React.ReactNode;
  link?: string;
};

export const NavItem: FC<Children> = ({ children, link }) => {
  return (
    <Link href={link ?? "/"}>
      <a className="flex items-center space-x-2">{children}</a>
    </Link>
  );
};
