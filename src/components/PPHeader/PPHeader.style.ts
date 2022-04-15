import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../contexts/theme/type";
import {} from "react";

interface PPHeaderStyleProps {
  container?: StyleProp<ViewStyle>;
  floating?: StyleProp<ViewStyle>;
  wrapperTitle?: StyleProp<ViewStyle>;
  containerButton?: StyleProp<ViewStyle>;
  wrapperButtons?: StyleProp<ViewStyle>;
}

export const PPHeaderStyle = (theme: ThemeProps): PPHeaderStyleProps => {
  return StyleSheet.create({
    container: {
      height: 44 + 50, // TODO: include dynamic status bar height
      paddingTop: 44,
      paddingHorizontal: theme.spaces.space_5,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    wrapperTitle: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 44, // TODO: include dynamic status bar height
    },
    containerButton: {
      height: 45,
      minWidth: 45,
      backgroundColor: theme.colors.secundary,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    wrapperButtons: {
      flexDirection: "row",
    },
    floating: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
    },
  });
};
