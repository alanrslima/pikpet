import React, { useState } from "react";
import { DimensionContext } from "./dimensionContext";
import { View, StyleSheet, LayoutChangeEvent, Dimensions } from "react-native";
import { OrientationEnum, DimensionProps } from "./type";
import { calculateSize } from "./helper";
// import {getStatusBarHeight} from 'react-native-status-bar-height';

export const DimensionProvider: React.FC = ({ children }) => {
  const [dimension, setDimension] = useState(null as DimensionProps | null);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    const windowDimension = Dimensions.get("window");
    const orientation =
      windowDimension.width > windowDimension.height
        ? OrientationEnum.Landscape
        : OrientationEnum.Portrait;

    const value: DimensionProps = {
      orientation,
      size: calculateSize(width),
      width,
      height,
      scale: windowDimension.scale,
      fontScale: windowDimension.fontScale,
      // statusBarHeight: getStatusBarHeight(),
      statusBarHeight: 44, // TODO: include dynamic status bar height
    };

    setDimension((prevState) => {
      if (JSON.stringify(prevState) === JSON.stringify(value)) {
        return prevState;
      }
      return value;
    });
  };

  return (
    <DimensionContext.Provider value={dimension!}>
      <View onLayout={onLayout} style={style.wrapper}>
        {dimension && (children as JSX.Element)}
      </View>
    </DimensionContext.Provider>
  );
};

const style = StyleSheet.create({
  wrapper: { flex: 1, width: "100%", height: "100%" },
});
