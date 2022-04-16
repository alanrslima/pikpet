import React from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { useStyle } from "../../hooks";
import { PPIcon, PPIconProps } from "../PPIcon/PPIcon";
import { PPText } from "../PPText/PPText";
import { PPButtonStyle } from "./PPButton.style";

export interface PPButtonProps {
  onPress?: () => void;
  text?: string;
  disabled?: boolean;
  bgColor?: string;
  tintColor?: string;
  loading?: boolean;
  rightIcon?: PPIconProps;
  leftIcon?: PPIconProps;
}
export const PPButton: React.FC<PPButtonProps> = ({
  onPress,
  text,
  disabled,
  bgColor,
  tintColor,
  loading,
  rightIcon,
  leftIcon,
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
      <View style={style.wrapperIcon}>
        <View>
          {leftIcon && <PPIcon {...leftIcon} testID="ppbutton-lefticon" />}
        </View>
        <View>
          {rightIcon && <PPIcon {...rightIcon} testID="ppbutton-righticon" />}
        </View>
      </View>

      {loading ? (
        <ActivityIndicator
          testID="ppbutton-loading"
          color={tintColor || "white"}
        />
      ) : (
        <PPText color={tintColor || "white"} weight="bold">
          {text}
        </PPText>
      )}
    </TouchableOpacity>
  );
};
