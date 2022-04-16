import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../contexts/theme/type";

interface PPInputStyleProps {
  wrapper?: StyleProp<ViewStyle>;
  wrapperError?: StyleProp<ViewStyle>;
  container?: StyleProp<ViewStyle>;
  input?: StyleProp<ViewStyle>;
  wrapperIcon?: StyleProp<ViewStyle>;
}

export const PPInputStyle = (theme: ThemeProps): PPInputStyleProps => {
  return StyleSheet.create({
    wrapper: {
      marginBottom: theme.spaces.space_3,
    },
    container: {
      borderWidth: 1,
      borderColor: theme.colors.on_input_placeholder,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: theme.spaces.space_4,
    },
    wrapperError: {
      marginTop: theme.spaces.space_1,
      alignItems: "flex-end",
    },
    input: {
      flex: 1,
      paddingVertical: theme.spaces.space_3,
      fontSize: theme.fonts.heading_4,
      fontFamily: "Montserrat_500Medium",
    },
    wrapperIcon: {
      height: 25,
      width: 25,
      justifyContent: "center",
      alignItems: "center",
      marginRight: theme.spaces.space_2,
    },
  });
};
