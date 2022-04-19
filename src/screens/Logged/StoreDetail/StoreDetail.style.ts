import { ImageStyle, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { DimensionProps } from "../../../contexts/dimension/type";
import { ThemeProps } from "../../../types/theme";

interface StoreDetailStyleProps {
  wrapperImage: StyleProp<ViewStyle>;
  image?: StyleProp<ImageStyle>;
  smallImage?: StyleProp<ViewStyle>;
  contentScroll?: StyleProp<ViewStyle>;
  content?: StyleProp<ViewStyle>;
}

export const StoreDetailStyle = (
  theme: ThemeProps,
  dimension: DimensionProps
): StoreDetailStyleProps => {
  return StyleSheet.create({
    wrapperImage: {
      height: dimension.height * 0.4,
      backgroundColor: "red",
      borderRadius: 40,
      margin: theme.spaces.space_3,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    contentScroll: {
      paddingHorizontal: theme.spaces.space_3,
      paddingBottom: theme.spaces.space_4,
    },
    smallImage: {
      height: 55,
      width: 80,
      borderRadius: 10,
      backgroundColor: theme.colors.on_background_disable,
      marginHorizontal: theme.spaces.space_2,
    },
    content: {
      paddingHorizontal: theme.spaces.space_5,
    },
  });
};
