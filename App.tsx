import React from "react";
import { Routes } from "./src/routes/index.routes";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

import { Contexts } from "./src/contexts";

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Contexts>
      <Routes />
    </Contexts>
  );
};

export default App;
