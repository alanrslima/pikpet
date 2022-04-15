import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../../contexts/theme/type";

interface ForgetPasswordCodeStyleProps {
  scrollContent: StyleProp<ViewStyle>;
  wrapperSendButton: StyleProp<ViewStyle>;
}

export const ForgetPasswordCodeStyle = (
  theme: ThemeProps
): ForgetPasswordCodeStyleProps => {
  return StyleSheet.create({
    scrollContent: {
      padding: theme.spaces.space_5,
    },
    wrapperSendButton: {
      marginVertical: theme.spaces.space_5,
    },
  });
};
