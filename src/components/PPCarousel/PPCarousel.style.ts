import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../types/theme";

interface PPCarouselStyleProps {
  container?: StyleProp<ViewStyle>;
  content?: StyleProp<ViewStyle>;
  banner?: StyleProp<ViewStyle>;
}

export const PPCarouselStyle = (theme: ThemeProps): PPCarouselStyleProps => {
  return StyleSheet.create({
    container: {
      backgroundColor: "black",
      height: 150,
      borderRadius: 10,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    },
    content: {
      flex: 1,
      borderRadius: 10,
      overflow: "hidden",
    },
    banner: {
      backgroundColor: "blue",
      height: "100%",
    },
  });
};
