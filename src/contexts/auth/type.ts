import { UserProps } from "../../types/user";

export interface AuthContextProps {
  user?: UserProps;
  signIn: () => void;
  signOut: () => void;
}
