import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../../contexts/theme/type";

interface HomeStyleProps {
  container: StyleProp<ViewStyle>;
  wrapperItem: StyleProp<ViewStyle>;
  row: StyleProp<ViewStyle>;
}

export const HomeStyle = (theme: ThemeProps): HomeStyleProps => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    wrapperItem: {
      paddingTop: theme.spaces.space_2,
      paddingHorizontal: theme.spaces.space_5,
      paddingBottom: theme.spaces.space_4,
    },
    row: {
      flexDirection: "row",
    },
  });
};
