import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { useStyle } from "../../hooks";
import { PPText } from "../PPText/PPText";
import { PPButtonStyle } from "./PPButton.style";

export interface PPButtonProps {
  onPress?: () => void;
  text?: string;
  disabled?: boolean;
  bgColor?: string;
  tintColor?: string;
  loading?: boolean;
}
export const PPButton: React.FC<PPButtonProps> = ({
  onPress,
  text,
  disabled,
  bgColor,
  tintColor,
  loading,
}) => {
  const style = useStyle(PPButtonStyle);

  return (
    <TouchableOpacity
      testID="ppbutton"
      disabled={disabled}
      onPress={onPress}
      style={[
        style.container,
        bgColor ? { backgroundColor: bgColor } : {},
        disabled && style.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={tintColor || "white"} />
      ) : (
        <PPText color={tintColor || "white"} weight="bold">
          {text}
        </PPText>
      )}
    </TouchableOpacity>
  );
};
