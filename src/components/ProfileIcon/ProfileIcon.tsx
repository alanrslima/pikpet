import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPIcon } from "../PPIcon/PPIcon";
import { ProfileIconStyle } from "./ProfileIcon.style";

export const ProfileIcon: React.FC = () => {
  const { theme } = useTheme();
  const style = useStyle(ProfileIconStyle);

  return (
    <TouchableOpacity>
      <PPIcon
        name="user-circle"
        color={theme.colors.on_background_secundary}
        size={35}
        type="font_awesome"
      />
      <View style={style.flag} />
    </TouchableOpacity>
  );
};
