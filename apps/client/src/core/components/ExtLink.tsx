import { FC, PropsWithChildren } from "react";

interface ExtLinkProps extends PropsWithChildren {
  href: `http${"" | "s"}://${string}`;
  className?: string;
}

export const ExtLink: FC<ExtLinkProps> = ({ children, className, href }) => {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
};
