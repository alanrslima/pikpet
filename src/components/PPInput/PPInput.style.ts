import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../contexts/theme/type";

interface PPInputStyleProps {
  container?: StyleProp<ViewStyle>;
  input?: StyleProp<ViewStyle>;
  wrapperIcon?: StyleProp<ViewStyle>;
}

export const PPInputStyle = (theme: ThemeProps): PPInputStyleProps => {
  return StyleSheet.create({
    container: {
      marginBottom: theme.spaces.space_3,
      borderWidth: 1,
      borderColor: theme.colors.on_input_placeholder,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: theme.spaces.space_4,
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
