import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { useStyle, useTheme } from "../../hooks";

import { PPInputStyle } from "./PPInput.style";

interface PPInputProps extends TextInputProps {}
export const PPInput: React.FC<PPInputProps> = ({ ...rest }) => {
  const style = useStyle(PPInputStyle);

  return (
    <View style={style.container}>
      <TextInput {...rest} style={style.input} />
    </View>
  );
};
