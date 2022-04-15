import { useContext } from "react";
import { AuthContext } from "../contexts/auth/authContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
