import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPLoadingStyle } from "./PPLoading.style";

export const PPLoading: React.FC = () => {
  const style = useStyle(PPLoadingStyle);
  const { theme } = useTheme();

  return (
    <View style={style.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};
