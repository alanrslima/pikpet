import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../types/theme";

interface ProfileIconStyleProps {
  flag?: StyleProp<ViewStyle>;
}

export const ProfileIconStyle = (theme: ThemeProps): ProfileIconStyleProps => {
  return StyleSheet.create({
    flag: {
      position: "absolute",
      top: -1,
      right: -1,
      height: 10,
      width: 10,
      backgroundColor: theme.colors.secundary,
      borderRadius: 10,
    },
  });
};
