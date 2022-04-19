import { useContext } from "react";
import { AddressContext } from "../contexts/address/addressContext";

export const useAddress = () => {
  const addressContext = useContext(AddressContext);
  return addressContext;
};
