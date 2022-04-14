import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../contexts/theme/type";

interface PPInputStyleProps {
  container?: StyleProp<ViewStyle>;
  input?: StyleProp<ViewStyle>;
}

export const PPInputStyle = (theme: ThemeProps): PPInputStyleProps => {
  return StyleSheet.create({
    container: {
      marginBottom: theme.spaces.space_3,
    },
    input: {
      paddingVertical: theme.spaces.space_3,
      paddingHorizontal: theme.spaces.space_4,
      borderRadius: 10,
      fontSize: theme.fonts.heading_4,
      fontFamily: "Montserrat_500Medium",
      borderWidth: 1,
      borderColor: theme.colors.on_input_placeholder,
    },
  });
};