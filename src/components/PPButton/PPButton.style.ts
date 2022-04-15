import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../contexts/theme/type";

interface PPButtonStyleProps {
  container?: StyleProp<ViewStyle>;
  disabled?: StyleProp<ViewStyle>;
}

export const PPButtonStyle = (theme: ThemeProps): PPButtonStyleProps => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spaces.space_4,
      borderRadius: 10,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
      flexDirection: "row",
      minHeight: 55,
    },
    disabled: {
      backgroundColor: theme.colors.on_background_disable,
    },
  });
};
