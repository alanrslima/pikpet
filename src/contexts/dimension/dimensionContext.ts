import { createContext } from "react";
import { DimensionContextProps } from "./type";

export const DimensionContext = createContext<DimensionContextProps>(
  {} as DimensionContextProps
);
