import React, { useEffect, useState } from "react";
import { AddressContext } from "./addressContext";
import { AddressProps } from "../../types/address";
import { useAuth } from "../../hooks/useAuth";

export const AddressProvider: React.FC = ({ children }) => {
  const [adresses, setAdresses] = useState<AddressProps[]>([
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ]);

  const { user } = useAuth();

  useEffect(() => {
    // refetch locations when update user
  }, [user]);

  return (
    <AddressContext.Provider value={{ adresses }}>
      {children}
    </AddressContext.Provider>
  );
};
