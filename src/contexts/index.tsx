import React from "react";
import { ThemeProvider } from "./theme/themeProvider";
import { DimensionProvider } from "./dimension/dimensionProvider";
import { AlertProvider } from "./alert/alertProvider";
import { AuthProvider } from "./auth/authProvider";

export const Contexts: React.FC = ({ children }) => {
  return (
    <DimensionProvider>
      <ThemeProvider>
        <AlertProvider>
          <AuthProvider>{children}</AuthProvider>
        </AlertProvider>
      </ThemeProvider>
    </DimensionProvider>
  );
};
