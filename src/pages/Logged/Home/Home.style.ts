import { ImageStyle, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../contexts/theme/type";

interface HomeStyleProps {
  container: StyleProp<ViewStyle>;
  wrapperBanner: StyleProp<ViewStyle>;
  banner: StyleProp<ImageStyle>;
  footer: StyleProp<ViewStyle>;
}

export const HomeStyle = (theme: ThemeProps): HomeStyleProps => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapperBanner: {
      flex: 1,
    },
    banner: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    footer: {
      padding: theme.spaces.space_5,
    },
  });
};
