import { FC, PropsWithChildren } from "react";

import { NextPage } from "next";

export type AuthStatus = "private" | "public" | "redirect";

export type MyPage<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  authStatus?: AuthStatus;
  Layout?: FC<PropsWithChildren>;
};
