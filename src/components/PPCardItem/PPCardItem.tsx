import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPText } from "../PPText/PPText";
import { PPCardItemStyle } from "./PPCardItem.style";
import ImageMock from "../../assets/images/bulldog.png";
import { PPIcon } from "../PPIcon/PPIcon";

interface PPCardItemProps {
  onPress?: () => void;
}
export const PPCardItem: React.FC<PPCardItemProps> = ({ onPress }) => {
  const style = useStyle(PPCardItemStyle);
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <Image style={style.image} source={ImageMock} />
      <View style={style.content}>
        <PPText weight="bold">Titulo</PPText>
        <View style={style.row}>
          <PPIcon name="map-pin" color={theme.colors.on_surface_secundary} />
          <PPText color={theme.colors.on_surface_secundary} size="small">
            Av das Acácias, Lote 45 - Nº 103
          </PPText>
        </View>

        <View style={style.row}>
          <PPIcon name="star" color={theme.colors.on_surface_secundary} />
          <PPText
            color={theme.colors.on_surface_primary}
            weight="bold"
            size="small"
          >
            {" "}
            4.5{" "}
            <PPText size="small" color={theme.colors.on_surface_secundary}>
              (100)
            </PPText>
          </PPText>
        </View>
        <View></View>
      </View>
    </TouchableOpacity>
  );
};
