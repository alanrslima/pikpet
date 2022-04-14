import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../contexts/theme/type";

interface PProgressBarStyleProps {
  container?: StyleProp<ViewStyle>;
  bar?: StyleProp<ViewStyle>;
  wrapper?: StyleProp<ViewStyle>;
  containerLabel?: StyleProp<ViewStyle>;
}

export const PProgressBarStyle = (
  theme: ThemeProps
): PProgressBarStyleProps => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    containerLabel: {
      marginRight: theme.spaces.space_2,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.on_surface_disable,
      height: 10,
      justifyContent: "center",
    },
    bar: {
      height: 8,
      borderRadius: 10,
      backgroundColor: theme.colors.secundary,
    },
  });
};
