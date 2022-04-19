import { createContext } from "react";
import { ThemeDiscriminatorsType, ThemeProps } from "../../types/theme";

export interface ThemeContextProps {
  theme: ThemeProps;
  handleTheme: (type: ThemeDiscriminatorsType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);
