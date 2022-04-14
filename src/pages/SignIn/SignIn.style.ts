import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../contexts/theme/type";

interface SignInStyleProps {
  scrollContent: StyleProp<ViewStyle>;
  wrapperSignUpButton: StyleProp<ViewStyle>;
  wrapperOr: StyleProp<ViewStyle>;
  line: StyleProp<ViewStyle>;
  wrapperLabel: StyleProp<ViewStyle>;
}

export const SignInStyle = (theme: ThemeProps): SignInStyleProps => {
  return StyleSheet.create({
    scrollContent: {
      padding: theme.spaces.space_5,
    },
    wrapperSignUpButton: {
      marginVertical: theme.spaces.space_5,
    },

    wrapperOr: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: theme.spaces.space_5,
    },
    line: {
      flex: 1,
      marginHorizontal: theme.spaces.space_3,
      backgroundColor: theme.colors.on_background_disable,
      height: 1,
    },
    wrapperLabel: {
      alignItems: "center",
    },
  });
};
