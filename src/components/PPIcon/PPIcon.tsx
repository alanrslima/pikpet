import React from "react";
import { Feather } from "@expo/vector-icons";

export type PPIconNameType = keyof typeof Feather.glyphMap;
export interface PPIconProps {
  name: PPIconNameType;
  size?: number;
  color?: string;
}
export const PPIcon: React.FC<PPIconProps> = ({ name, size, color }) => {
  return <Feather name={name} color={color} size={size} />;
};
