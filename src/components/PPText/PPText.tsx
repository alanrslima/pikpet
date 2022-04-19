import React from "react";
import { Text } from "react-native";
import { PPTextStyle } from "./PPText.style";
import { useStyle, useTheme } from "../../hooks";

import { TextProps } from "react-native";

export type TextSizeTypes =
  | "heading_1"
  | "heading_2"
  | "heading_3"
  | "heading_4"
  | "body"
  | "small"
  | "caption";

export interface IPPText extends TextProps {
  /**
   * Weight of the font > light = 300; regular = 400; medium = 500; semiBold = 600; bold = 700; black = 800
   */
  weight?: "light" | "regular" | "medium" | "semiBold" | "bold" | "black";

  /**
   * Size of the font > heading_1 = 30px; heading_2 = 26px; heading_3 = 22px; heading_4 = 16px; body = 14px; small = 12px; caption = 10px
   */
  size?: TextSizeTypes;

  /**
   * Color of the text
   */
  color?: string;

  align?: "left" | "center" | "right";
}

export const PPText: React.FC<IPPText> = (props) => {
  const {
    children,
    align = "left",
    color,
    size = "body",
    weight = "medium",
    ...rest
  } = props;
  const style = useStyle(PPTextStyle);
  const { theme } = useTheme();

  const getWeightStyle = () => {
    switch (weight) {
      case "light":
        return style.light;
      case "regular":
        return style.regular;
      case "medium":
        return style.medium;
      case "semiBold":
        return style.semiBold;
      case "bold":
        return style.bold;
      case "black":
        return style.black;
      default:
        break;
    }
  };

  const getFontSize = () => {
    switch (size) {
      case "heading_1":
        return theme.fonts.heading_1;
      case "heading_2":
        return theme.fonts.heading_2;
      case "heading_3":
        return theme.fonts.heading_3;
      case "heading_4":
        return theme.fonts.heading_4;
      case "body":
        return theme.fonts.body;
      case "small":
        return theme.fonts.small;
      case "caption":
        return theme.fonts.caption;
      default:
        break;
    }
  };

  return (
    <Text
      {...rest}
      style={[
        rest.style,
        { color, textAlign: align, fontSize: getFontSize() },
        getWeightStyle(),
      ]}
    >
      {children}
    </Text>
  );
};
