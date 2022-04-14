import React from "react";
import { Feather } from "@expo/vector-icons";

export interface PPIconProps {
  name: keyof typeof Feather.glyphMap;
  size?: number;
  color?: string;
}
export const PPIcon: React.FC<PPIconProps> = ({ name, size, color }) => {
  return <Feather name={name} color={color} size={size} />;
};
