import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";

import { authorizationLocalStorageKey } from "@producktivity/constants";
import { IAuthJwt } from "@producktivity/constants";

import jwtDecode from "jwt-decode";

import { AuthContext } from "./authContext";

function safeJwtDecode(token: string | null): Partial<IAuthJwt> {
  try {
    const decoded = jwtDecode(token ?? "");

    if (typeof decoded !== "object") return {};

    return decoded ?? {};
  } catch (err) {
    return {};
  }
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");

  const readAndSetToken = useCallback(() => {
    const token = localStorage.getItem(authorizationLocalStorageKey);
    const { exp, id: newId, username: newUsername } = safeJwtDecode(token);

    if (newId && newUsername && exp && exp > Date.now() / 1000) {
      setId(newId);
      setUsername(newUsername);
    } else {
      setId("");
      setUsername("");
    }
  }, []);

  useEffect(() => {
    readAndSetToken();
  }, [readAndSetToken]);

  const setToken = useCallback(
    (token: string) => {
      localStorage.setItem(authorizationLocalStorageKey, token);
      readAndSetToken();
    },
    [readAndSetToken]
  );

  const resetToken = useCallback(() => {
    localStorage.removeItem(authorizationLocalStorageKey);
    readAndSetToken();
  }, [readAndSetToken]);

  return (
    <AuthContext.Provider value={{ id, username, setToken, resetToken }}>
      {children}
    </AuthContext.Provider>
  );
};
