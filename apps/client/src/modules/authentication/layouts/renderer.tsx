import { FC, useEffect } from "react";

import { useRouter } from "next/router";

import { MyPage } from "$core/@types";

import { useUser } from "../hooks/useUser";

interface RendererProps {
  page: MyPage;
  props: Record<string, unknown>;
}

export const Renderer: FC<RendererProps> = ({ page: Page, props }) => {
  const router = useRouter();
  const { id, username } = useUser();

  const isAuth = !!(id && username);

  useEffect(() => {
    if (Page.authStatus === "private" && !isAuth) {
      router.replace("/");
    } else if (Page.authStatus === "redirect" && isAuth) {
      router.replace("/home");
    }
  }, [isAuth, Page.authStatus, router]);

  switch (Page.authStatus) {
    case "private": {
      if (isAuth) return <Page props={props} />;

      return null;
    }

    case "redirect": {
      if (!isAuth) return <Page props={props} />;

      return null;
    }

    default:
      return <Page props={props} />;
  }
};
