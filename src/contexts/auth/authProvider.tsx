import React, { useState } from "react";
import { AuthContext } from "./authContext";
import { UserProps } from "../../types/user";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps>();

  const signIn = () => {};

  const signOut = () => {};

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
