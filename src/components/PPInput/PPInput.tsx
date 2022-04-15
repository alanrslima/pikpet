import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPIcon, PPIconNameType } from "../PPIcon/PPIcon";

import { PPInputStyle } from "./PPInput.style";

interface PPInputProps extends TextInputProps {
  bgColor?: string;
  borderColor?: string;
  iconName?: PPIconNameType;
}
export const PPInput: React.FC<PPInputProps> = ({
  bgColor,
  borderColor,
  iconName,
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
      {iconName && iconName.length > 0 && (
        <View style={style.wrapperIcon}>
          <PPIcon
            color={theme.colors.on_input_placeholder}
            name={iconName}
            size={18}
          />
        </View>
      )}

      <TextInput {...rest} style={style.input} />
    </View>
  );
};
