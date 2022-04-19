import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../../types/theme";

interface AdressesStyleProps {
  wrapperInput: StyleProp<ViewStyle>;
}

export const AdressesStyle = (theme: ThemeProps): AdressesStyleProps => {
  return StyleSheet.create({
    wrapperInput: {
      paddingHorizontal: theme.spaces.space_5,
      paddingVertical: theme.spaces.space_3,
    },
  });
};
