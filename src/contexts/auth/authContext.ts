import { createContext } from "react";
import { AuthContextProps } from "./type";

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
