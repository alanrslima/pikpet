import React from "react";
// Global contexts
import { ThemeProvider } from "./theme/themeProvider";
import { DimensionProvider } from "./dimension/dimensionProvider";
import { AlertProvider } from "./alert/alertProvider";

// Contexts depends user auth
import { AuthProvider } from "./auth/authProvider";
import { AddressProvider } from "./address/addressProvider";

export const Contexts: React.FC = ({ children }) => {
  return (
    <DimensionProvider>
      <ThemeProvider>
        <AlertProvider>
          <AuthProvider>
            <AddressProvider>{children}</AddressProvider>
          </AuthProvider>
        </AlertProvider>
      </ThemeProvider>
    </DimensionProvider>
  );
};
