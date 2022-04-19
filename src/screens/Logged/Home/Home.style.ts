import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../../types/theme";

interface HomeStyleProps {
  container: StyleProp<ViewStyle>;
  wrapperItem: StyleProp<ViewStyle>;
  wrapperHeader: StyleProp<ViewStyle>;
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
      paddingBottom: theme.spaces.space_4,
      paddingHorizontal: theme.spaces.space_5,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    wrapperHeader: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: theme.spaces.space_2,

      paddingBottom: theme.spaces.space_4,
      justifyContent: "space-between",
      paddingHorizontal: theme.spaces.space_5,
    },
  });
};
