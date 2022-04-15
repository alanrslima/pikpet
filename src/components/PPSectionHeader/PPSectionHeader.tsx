import React from "react";
import { View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPText, TextSizeTypes } from "../PPText/PPText";
import { PPSectionHeaderStyle } from "./PPSectionHeader.style";

interface PSectionHeaderProps {
  title?: string;
  subTitle?: string;
  size?: "small" | "medium" | "big";
}
export const PPSectionHeader: React.FC<PSectionHeaderProps> = ({
  title,
  subTitle,
  size = "big",
}) => {
  const style = useStyle(PPSectionHeaderStyle);
  const { theme } = useTheme();

  const getSize = (): { title: TextSizeTypes; subTitle: TextSizeTypes } => {
    switch (size) {
      case "small":
        return { title: "heading_4", subTitle: "small" };
      case "medium":
        return { title: "heading_3", subTitle: "body" };
      case "big":
        return { title: "heading_2", subTitle: "body" };
      default:
        return { title: "heading_2", subTitle: "body" };
    }
  };

  const { title: titleSize, subTitle: subTitleSize } = getSize();

  return (
    <View>
      <PPText
        size={titleSize}
        weight="bold"
        color={theme.colors.on_background_primary}
      >
        {title}
      </PPText>
      {subTitle && subTitle.length > 0 && (
        <View style={style.wrapperSubTitle}>
          <PPText
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
