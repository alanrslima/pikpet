import { createContext } from "react";
import { AddressProps } from "../../types/address";

export interface AddressContextProps {
  adresses: AddressProps[];
}

export const AddressContext = createContext<AddressContextProps>(
  {} as AddressContextProps
);
