import React, { useState } from "react";
import { AuthContext } from "./authContext";
import { UserProps } from "../../types/user";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps>();

  const signIn = () => {
    setUser({ id: 123, name: "João" });
  };

  const signOut = () => {
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
