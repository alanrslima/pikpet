import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../types/theme";

interface PPAlertStyleProps {
  container: StyleProp<ViewStyle>;
  content: StyleProp<ViewStyle>;
  header: StyleProp<ViewStyle>;
  headerButton: StyleProp<ViewStyle>;
  body: StyleProp<ViewStyle>;
  wrapperSubTitle: StyleProp<ViewStyle>;
  wrapperButton: StyleProp<ViewStyle>;
}

export const PPAlertStyle = (theme: ThemeProps): PPAlertStyleProps => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 16,
      justifyContent: "flex-end",
    },
    content: {
      backgroundColor: theme.colors.surface,
      padding: theme.spaces.space_4,
      borderRadius: 10,
    },
    header: {
      alignItems: "flex-end",
    },
    headerButton: {
      height: 40,
      width: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      backgroundColor: theme.colors.on_surface_disable,
    },
    body: {
      paddingTop: theme.spaces.space_5,
      paddingBottom: theme.spaces.space_8,
      alignItems: "center",
    },
    wrapperSubTitle: {
      marginTop: theme.spaces.space_7,
    },
    wrapperButton: {
      marginTop: theme.spaces.space_3,
    },
  });
};
