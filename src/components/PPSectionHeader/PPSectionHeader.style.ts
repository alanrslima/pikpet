import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeProps } from "../../contexts/theme/type";

interface PPSectionHeaderStyleProps {
  wrapperSubTitle?: StyleProp<ViewStyle>;
}

export const PPSectionHeaderStyle = (
  theme: ThemeProps
): PPSectionHeaderStyleProps => {
  return StyleSheet.create({
    wrapperSubTitle: {
      paddingTop: theme.spaces.space_4,
      paddingBottom: theme.spaces.space_5,
    },
  });
};
