import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

interface IconProps {
  testID?: string;
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
  testID,
  ...rest
}) => {
  const renderIcon = () => {
    if (type === "feather") {
      return <Feather {...rest} />;
    }
    return <FontAwesome {...rest} />;
  };

  return <View testID={testID}>{renderIcon()}</View>;
};
