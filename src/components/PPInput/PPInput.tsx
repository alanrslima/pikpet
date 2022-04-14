import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPText } from "../PPText/PPText";

import { PPInputStyle } from "./PPInput.style";

interface PPInputProps extends TextInputProps {
  label?: string;
}
export const PPInput: React.FC<PPInputProps> = ({ label, ...rest }) => {
  const { theme } = useTheme();
  const style = useStyle(PPInputStyle);

  return (
    <View style={style.container}>
      <TextInput {...rest} style={style.input} />
      <View style={style.wrapperLabel}>
        <PPText size="small" color={theme.colors.on_surface_secundary}>
          {label}
        </PPText>
      </View>
    </View>
  );
};
