import React from "react";
import { TouchableOpacity } from "react-native";
import { useStyle } from "../../hooks";
import { PPText } from "../PPText/PPText";
import { PPButtonStyle } from "./PPButton.style";

export interface PPButtonProps {
  onPress?: () => void;
  text?: string;
  disabled?: boolean;
  bgColor?: string;
  tintColor?: string;
}
export const PPButton: React.FC<PPButtonProps> = ({
  onPress,
  text,
  disabled,
  bgColor,
  tintColor,
}) => {
  const style = useStyle(PPButtonStyle);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        style.container,
        bgColor ? { backgroundColor: bgColor } : {},
        disabled && style.disabled,
      ]}
    >
      <PPText color={tintColor || "white"} weight="bold">
        {text}
      </PPText>
    </TouchableOpacity>
  );
};
