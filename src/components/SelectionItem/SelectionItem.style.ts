import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../types/theme";

interface SelectionItemStyleProps {
  container?: StyleProp<ViewStyle>;
  containerSelected?: StyleProp<ViewStyle>;
  content?: StyleProp<ViewStyle>;
  round?: StyleProp<ViewStyle>;
  roundSelected?: StyleProp<ViewStyle>;
  wrapperIcon?: StyleProp<ViewStyle>;
}

export const SelectionItemStyle = (
  theme: ThemeProps
): SelectionItemStyleProps => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      borderRadius: 10,
      padding: theme.spaces.space_4,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      flexDirection: "row",
      marginHorizontal: theme.spaces.space_5,
      marginBottom: theme.spaces.space_4,
      alignItems: "center",
    },
    containerSelected: {
      borderWidth: 1,
      borderColor: theme.colors.secundary,
    },
    content: {
      flex: 1,
    },
    round: {
      height: 23,
      width: 23,
      borderRadius: 15,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      borderColor: theme.colors.on_surface_secundary,
    },
    roundSelected: {
      backgroundColor: theme.colors.secundary,
      borderWidth: 0,
    },
    wrapperIcon: {
      marginRight: theme.spaces.space_3,
    },
  });
};
