import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPIcon, PPIconProps } from "../PPIcon/PPIcon";
import { PPText } from "../PPText/PPText";

import { PPInputStyle } from "./PPInput.style";

export interface PPInputProps extends TextInputProps {
  bgColor?: string;
  borderColor?: string;
  icon?: PPIconProps;
  error?: string;
}
export const PPInput: React.FC<PPInputProps> = ({
  bgColor,
  borderColor,
  icon,
  error,
  ...rest
}) => {
  const style = useStyle(PPInputStyle);
  const { theme } = useTheme();

  return (
    <View style={style.wrapper}>
      <View
        style={[
          style.container,
          bgColor ? { backgroundColor: bgColor } : {},
          borderColor ? { borderColor: borderColor } : {},
          error ? { borderColor: theme.colors.danger } : {},
        ]}
      >
        {icon && (
          <View style={style.wrapperIcon}>
            <PPIcon
              {...icon}
              size={18}
              color={
                error ? theme.colors.danger : theme.colors.on_input_placeholder
              }
            />
          </View>
        )}

        <TextInput {...rest} style={style.input} />
      </View>
      {error && (
        <View style={style.wrapperError}>
          <PPText color={theme.colors.danger} size="small">
            {error}
          </PPText>
        </View>
      )}
    </View>
  );
};
