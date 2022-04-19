import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPIcon, PPIconProps } from "../PPIcon/PPIcon";
import { PPText } from "../PPText/PPText";
import { SelectionItemStyle } from "./SelectionItem.style";

interface SelectionItemProps {
  onPress?: () => void;
  selected?: boolean;
  icon?: PPIconProps;
  title?: string;
  description?: string;
  label?: string;
}
export const SelectionItem: React.FC<SelectionItemProps> = ({
  onPress,
  icon,
  title,
  description,
  label,
  selected,
}) => {
  const style = useStyle(SelectionItemStyle);
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.container, selected && style.containerSelected]}
    >
      {icon && (
        <View style={style.wrapperIcon}>
          <PPIcon
            {...icon}
            size={25}
            color={
              selected
                ? theme.colors.secundary
                : theme.colors.on_surface_primary
            }
          />
        </View>
      )}

      <View style={style.content}>
        <PPText weight="bold">{title}</PPText>
        {description && (
          <PPText
            style={{ marginTop: theme.spaces.space_1 }}
            color={theme.colors.on_surface_secundary}
            size="small"
          >
            {description}
          </PPText>
        )}

        {label && (
          <PPText
            style={{ marginTop: theme.spaces.space_2 }}
            size="small"
            weight="bold"
          >
            {label}
          </PPText>
        )}
      </View>
      <View>
        <View style={[style.round, selected && style.roundSelected]}>
          {selected && <PPIcon name="check" color="#FFF" size={15} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};
