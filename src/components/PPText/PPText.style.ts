import { StyleProp, StyleSheet, TextStyle } from "react-native";

interface PPTextStyleProps {
  light?: StyleProp<TextStyle>;
  regular?: StyleProp<TextStyle>;
  medium?: StyleProp<TextStyle>;
  semiBold?: StyleProp<TextStyle>;
  bold?: StyleProp<TextStyle>;
  black?: StyleProp<TextStyle>;
}

export const PPTextStyle = (): PPTextStyleProps => {
  return StyleSheet.create({
    light: { fontFamily: "Montserrat_300Light" },
    regular: { fontFamily: "Montserrat_400Regular" },
    medium: { fontFamily: "Montserrat_500Medium" },
    semiBold: { fontFamily: "Montserrat_600SemiBold" },
    bold: { fontFamily: "Montserrat_700Bold" },
    black: { fontFamily: "Montserrat_800ExtraBold" },
  });
};
