import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../../contexts/theme/type";

interface ForgetPasswordResetStyleProps {
  scrollContent: StyleProp<ViewStyle>;
  wrapperSendButton: StyleProp<ViewStyle>;
}

export const ForgetPasswordResetStyle = (
  theme: ThemeProps
): ForgetPasswordResetStyleProps => {
  return StyleSheet.create({
    scrollContent: {
      padding: theme.spaces.space_5,
    },
    wrapperSendButton: {
      marginVertical: theme.spaces.space_5,
    },
  });
};
