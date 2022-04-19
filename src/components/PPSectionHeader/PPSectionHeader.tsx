import React from "react";
import { View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPText, TextSizeTypes } from "../PPText/PPText";
import { PPSectionHeaderStyle } from "./PPSectionHeader.style";

interface PSectionHeaderProps {
  title?: string;
  subTitle?: string;
  titleSize?: TextSizeTypes;
  subTitleSize?: TextSizeTypes;
}
export const PPSectionHeader: React.FC<PSectionHeaderProps> = ({
  title,
  subTitle,
  titleSize = "heading_2",
  subTitleSize = "body",
}) => {
  const style = useStyle(PPSectionHeaderStyle);
  const { theme } = useTheme();

  return (
    <View>
      {title && title.length > 0 && (
        <PPText
          size={titleSize}
          weight="bold"
          testID="ppsectionheader_title"
          color={theme.colors.on_background_primary}
        >
          {title}
        </PPText>
      )}
      {subTitle && subTitle.length > 0 && (
        <View style={style.wrapperSubTitle}>
          <PPText
            testID="ppsectionheader_subtitle"
            size={subTitleSize}
            weight="medium"
            color={theme.colors.on_background_secundary}
          >
            {subTitle}
          </PPText>
        </View>
      )}
    </View>
  );
};
