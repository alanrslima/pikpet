import { createContext } from "react";
import { UserProps } from "../../types/user";
export interface AuthContextProps {
  user?: UserProps;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
