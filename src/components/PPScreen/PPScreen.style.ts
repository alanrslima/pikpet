import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../types/theme";

interface PPScreenStyleProps {
  container?: StyleProp<ViewStyle>;
  content?: StyleProp<ViewStyle>;
  safeArea?: StyleProp<ViewStyle>;
}

export const PPScreenStyle = (theme: ThemeProps): PPScreenStyleProps => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
    },
    safeArea: {
      paddingBottom: 44,
    },
  });
};
