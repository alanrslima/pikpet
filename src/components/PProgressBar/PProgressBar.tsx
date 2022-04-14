import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, LayoutRectangle, View } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPText } from "../PPText/PPText";
import { PProgressBarStyle } from "./PProgressBar.style";

interface PProgressBarProps {
  percent: number;
  label?: string;
  delay?: number;
  colorIndicator?: boolean;
}
export const PProgressBar: React.FC<PProgressBarProps> = ({
  percent = 0,
  label,
  delay = 0,
  colorIndicator,
}) => {
  const style = useStyle(PProgressBarStyle);
  const { theme } = useTheme();
  const [containerLayout, setContainerLayout] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const animatedWidth = useRef(new Animated.Value(0)).current;

  const inputRange = [0, containerLayout.width * 0.4, containerLayout.width];

  const animatedColor = animatedWidth.interpolate({
    inputRange,
    outputRange: ["red", "yellow", "green"],
  });

  const calcWidth = useCallback(() => {
    let contentWidth = 0;
    if (percent >= 100) {
      contentWidth = containerLayout?.width;
    } else if (percent <= 0) {
      contentWidth = 0;
    } else {
      const percentRef = percent / 100;
      contentWidth = percentRef * containerLayout.width;
    }
    contentWidth = Math.floor(contentWidth);
    // if (contentWidth > 6) {
    //   contentWidth = Math.floor(contentWidth - 6);
    // }
    Animated.timing(animatedWidth, {
      toValue: contentWidth,
      duration: 400,
      // easing: Easing.in,
      delay,
      useNativeDriver: false,
    }).start();
  }, [animatedWidth, percent, containerLayout.width, delay]);

  useEffect(() => {
    calcWidth();
  }, [calcWidth]);

  return (
    <View style={style.wrapper}>
      {label && label.length && (
        <View style={style.containerLabel}>
          <PPText size="body" weight="semiBold">
            {label}
          </PPText>
        </View>
      )}

      <View
        onLayout={(event) => {
          setContainerLayout(event.nativeEvent.layout);
        }}
        style={style.container}
      >
        <Animated.View
          style={[
            style.bar,
            {
              width: animatedWidth,
              backgroundColor: colorIndicator
                ? animatedColor
                : theme.colors.secundary,
            },
          ]}
        />
      </View>
    </View>
  );
};
