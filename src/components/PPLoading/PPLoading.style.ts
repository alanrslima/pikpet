import { StyleProp, StyleSheet, ViewStyle } from "react-native";

interface PPLoadingStyleProps {
  container?: StyleProp<ViewStyle>;
}

export const PPLoadingStyle = (): PPLoadingStyleProps => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
