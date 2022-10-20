import { createContext } from "react";

export interface IAuthContext {
  id?: string;
  username?: string;
  setToken: (token: string) => void;
  resetToken: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  setToken: () => null,
  resetToken: () => null,
});
