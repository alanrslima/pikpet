import React from "react";
import { View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPText } from "../PPText/PPText";
import { PPSectionHeaderStyle } from "./PPSectionHeader.style";

interface PSectionHeaderProps {
  title?: string;
  subTitle?: string;
}
export const PPSectionHeader: React.FC<PSectionHeaderProps> = ({
  title,
  subTitle,
}) => {
  const style = useStyle(PPSectionHeaderStyle);
  const { theme } = useTheme();

  return (
    <View>
      <PPText
        size="heading_2"
        weight="bold"
        color={theme.colors.on_background_primary}
      >
        {title}
      </PPText>
      <View style={style.wrapperSubTitle}>
        <PPText
          size="body"
          weight="medium"
          color={theme.colors.on_background_secundary}
        >
          {subTitle}
        </PPText>
      </View>
    </View>
  );
};
