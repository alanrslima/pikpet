import React from "react";
import { View } from "react-native";
import { useStyle } from "../../hooks";
import { PPHeaderProps, PPHeader } from "../PPHeader/PPHeader";
import { PPScreenStyle } from "./PPScreen.style";

interface IPScreen {
  header?: PPHeaderProps;
  children?: JSX.Element | JSX.Element[];
}
export const PPScreen: React.FC<IPScreen> = ({ header, children }) => {
  const style = useStyle(PPScreenStyle);

  return (
    <View style={style.container}>
      {header && <PPHeader {...header} />}
      {children}
    </View>
  );
};
