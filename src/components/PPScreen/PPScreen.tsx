import React from "react";
import { View } from "react-native";
import { useStyle } from "../../hooks";
import { PPHeaderProps, PPHeader } from "../PPHeader/PPHeader";
import { PPLoading } from "../PPLoading/PPLoading";
import { PPScreenStyle } from "./PPScreen.style";
import * as Animatable from "react-native-animatable";

interface IPScreen {
  header?: PPHeaderProps;
  loading?: boolean;
  useSafeArea?: boolean;
  children?: JSX.Element | JSX.Element[];
}
export const PPScreen: React.FC<IPScreen> = ({
  header,
  loading,
  children,
  useSafeArea = true,
}) => {
  const style = useStyle(PPScreenStyle);

  return (
    <View style={[style.container, useSafeArea && style.safeArea]}>
      {header && <PPHeader {...header} />}
      {loading ? (
        <PPLoading />
      ) : (
        <Animatable.View
          style={style.content}
          animation="fadeInUp"
          iterationCount={1}
        >
          {children}
        </Animatable.View>
      )}
    </View>
  );
};
