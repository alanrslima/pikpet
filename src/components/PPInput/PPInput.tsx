import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPIcon, PPIconProps } from "../PPIcon/PPIcon";

import { PPInputStyle } from "./PPInput.style";

interface PPInputProps extends TextInputProps {
  bgColor?: string;
  borderColor?: string;
  icon?: PPIconProps;
}
export const PPInput: React.FC<PPInputProps> = ({
  bgColor,
  borderColor,
  icon,
  ...rest
}) => {
  const style = useStyle(PPInputStyle);
  const { theme } = useTheme();

  return (
    <View
      style={[
        style.container,
        bgColor ? { backgroundColor: bgColor } : {},
        borderColor ? { borderColor: borderColor } : {},
      ]}
    >
      {icon && (
        <View style={style.wrapperIcon}>
          <PPIcon
            {...icon}
            size={18}
            color={theme.colors.on_input_placeholder}
          />
        </View>
      )}

      <TextInput {...rest} style={style.input} />
    </View>
  );
};
