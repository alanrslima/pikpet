import React from "react";
import { ThemeProvider } from "./theme/themeProvider";
import { DimensionProvider } from "./dimension/dimensionProvider";
import { AlertProvider } from "./alert/alertProvider";

export const Contexts: React.FC = ({ children }) => {
  return (
    <DimensionProvider>
      <ThemeProvider>
        <AlertProvider>{children}</AlertProvider>
      </ThemeProvider>
    </DimensionProvider>
  );
};
