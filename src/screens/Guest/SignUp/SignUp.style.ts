import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../../contexts/theme/type";

interface SignUpStyleProps {
  scrollContent: StyleProp<ViewStyle>;
  wrapperSignUpButton: StyleProp<ViewStyle>;
  wrapperSocialButton: StyleProp<ViewStyle>;
  wrapperOr: StyleProp<ViewStyle>;
  line: StyleProp<ViewStyle>;
  wrapperFooterText: StyleProp<ViewStyle>;
}

export const SignUpStyle = (theme: ThemeProps): SignUpStyleProps => {
  return StyleSheet.create({
    scrollContent: {
      padding: theme.spaces.space_5,
    },
    wrapperSignUpButton: {
      marginVertical: theme.spaces.space_5,
    },
    wrapperSocialButton: {
      marginBottom: theme.spaces.space_3,
    },
    wrapperOr: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: theme.spaces.space_5,
    },
    line: {
      flex: 1,
      marginHorizontal: theme.spaces.space_3,
      backgroundColor: theme.colors.on_background_secundary,
      height: 1,
    },
    wrapperFooterText: {
      marginTop: theme.spaces.space_5,
      alignItems: "center",
    },
  });
};
