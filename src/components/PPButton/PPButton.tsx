import React from "react";
import { TouchableOpacity } from "react-native";
import { useStyle } from "../../hooks";
import { PPText } from "../PPText/PPText";
import { PPButtonStyle } from "./PPButton.style";

export interface PPButtonProps {
  onPress?: () => void;
  text?: string;
  disabled?: boolean;
}
export const PPButton: React.FC<PPButtonProps> = ({
  onPress,
  text,
  disabled,
}) => {
  const style = useStyle(PPButtonStyle);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[style.container, disabled && style.disabled]}
    >
      <PPText color="white" weight="bold">
        {text}
      </PPText>
    </TouchableOpacity>
  );
};
