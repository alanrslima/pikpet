import React, { useEffect } from "react";
import { Modal, View, TouchableOpacity, Animated } from "react-native";
import { useStyle, useTheme } from "../../hooks";
import { PPAlertStyle } from "./PPAlert.style";
import { PPText } from "../PPText/PPText";

export interface PPAlertProps {
  visible: boolean;
  title?: string;
  subTitle?: string;
  onClose?: () => void;
  // buttons?: INAButton[];
}

export const PPAlert: React.FC<PPAlertProps> = (props) => {
  const { visible, onClose, title, subTitle } = props;

  const style = useStyle(PPAlertStyle);

  const { theme } = useTheme();

  const bottom = React.useRef(new Animated.Value(-500)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

  const onPressWrapper = () => {
    Animated.parallel([
      Animated.timing(bottom, {
        toValue: -400,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(() => {
      onClose && onClose();
    });
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(bottom, {
        toValue: visible ? 0 : -400,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: visible ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  }, [visible, bottom, opacity]);

  return (
    <Modal visible={visible} transparent>
      <Animated.View style={[style.container, { opacity }]}>
        <Animated.View style={[style.content, { bottom }]}>
          <View style={style.header}>
            <TouchableOpacity
              onPress={onPressWrapper}
              style={style.headerButton}
            >
              {/* <PIcon name="x" color={theme.colors.on_surface_secundary} /> */}
            </TouchableOpacity>
          </View>
          <View style={style.body}>
            <PPText size="heading_3">{title}</PPText>
            <View style={style.wrapperSubTitle}>
              <PPText align="center" color={theme.colors.on_surface_secundary}>
                {subTitle}
              </PPText>
            </View>
          </View>
          {/* {buttons?.map((button, index) => (
            <View key={index} style={style.wrapperButton}>
              <NAButton
                {...button}
                onPress={() => {
                  onPressWrapper();
                  button.onPress && button.onPress();
                }}
              />
            </View>
          ))} */}
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};
