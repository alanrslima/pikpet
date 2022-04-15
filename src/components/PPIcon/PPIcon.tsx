import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

interface IconProps {
  size?: number;
  color?: string;
}
interface IconFeather extends IconProps {
  type?: "feather";
  name: keyof typeof Feather.glyphMap;
}

interface IconFontAwesome extends IconProps {
  type?: "font_awesome";
  name: keyof typeof FontAwesome.glyphMap;
}

export type PPIconProps = IconFeather | IconFontAwesome;

export const PPIcon: React.FC<PPIconProps> = ({
  type = "feather",
  ...rest
}) => {
  if (type === "feather") {
    return <Feather {...rest} />;
  }
  return <FontAwesome {...rest} />;
};
