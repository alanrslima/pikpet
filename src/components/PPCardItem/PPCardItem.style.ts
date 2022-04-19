import { ImageStyle, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../types/theme";

interface PPCardItemStyleProps {
  container?: StyleProp<ViewStyle>;
  content?: StyleProp<ViewStyle>;
  row?: StyleProp<ViewStyle>;
  image?: StyleProp<ImageStyle>;
}

export const PPCardItemStyle = (theme: ThemeProps): PPCardItemStyleProps => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      borderRadius: 10,
      padding: theme.spaces.space_1,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      flexDirection: "row",
      marginHorizontal: theme.spaces.space_5,
      marginBottom: theme.spaces.space_4,
    },
    image: {
      height: 80,
      width: 80,
      borderRadius: 10,
    },
    content: {
      justifyContent: "center",
      paddingHorizontal: theme.spaces.space_3,
    },
    row: {
      flexDirection: "row",
      marginTop: theme.spaces.space_2,
      alignItems: "center",
    },
  });
};
