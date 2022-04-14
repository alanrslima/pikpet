import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useStyle } from "../../hooks";
import { PPIcon, PPIconProps } from "../PPIcon/PPIcon";
import { PPText } from "../PPText/PPText";
import { PPHeaderStyle } from "./PPHeader.style";

interface PPHeaderButtonProps {
  onPress?: () => void;
  icon: PPIconProps;
}
const PPHeaderButton: React.FC<PPHeaderButtonProps> = ({ onPress, icon }) => {
  const style = useStyle(PPHeaderStyle);

  return (
    <TouchableOpacity style={style.containerButton} onPress={onPress}>
      <PPIcon {...icon} size={icon.size || 20} color={icon.color || "white"} />
    </TouchableOpacity>
  );
};

export interface PPHeaderProps {
  leftButtons?: PPHeaderButtonProps[];
  rightButtons?: PPHeaderButtonProps[];
  title?: string;
}
export const PPHeader: React.FC<PPHeaderProps> = ({
  leftButtons,
  rightButtons,
  title,
}) => {
  const style = useStyle(PPHeaderStyle);

  return (
    <View style={style.container}>
      <View style={style.wrapperTitle}>
        <PPText color="white">{title}</PPText>
      </View>

      <View style={style.wrapperButtons}>
        {leftButtons?.map((button, index) => (
          <PPHeaderButton key={index} {...button} />
        ))}
      </View>

      <View style={style.wrapperButtons}>
        {rightButtons?.map((button, index) => (
          <PPHeaderButton key={index} {...button} />
        ))}
      </View>
    </View>
  );
};
