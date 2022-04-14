import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../contexts/theme/type";

interface IPPScreenStyle {
  container?: StyleProp<ViewStyle>;
  content?: StyleProp<ViewStyle>;
}

export const PPScreenStyle = (theme: ThemeProps): IPPScreenStyle => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingBottom: 44,
    },
    content: {
      flex: 1,
    },
  });
};
