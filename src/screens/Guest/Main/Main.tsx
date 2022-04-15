import React from "react";
import { PPImage, PPSectionHeader, PPView } from "../../../components";
import BulldogImg from "../../../assets/images/bulldog.png";
import { useStyle, useTheme } from "../../../hooks";
import { MainStyle } from "./Main.style";
import { PPButton } from "../../../components/PPButton/PPButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GuestStackParamList } from "../../../routes/guest.routes";

type MainScreenProp = NativeStackNavigationProp<GuestStackParamList, "Main">;

export const Main: React.FC = () => {
  const style = useStyle(MainStyle);
  const { navigate } = useNavigation<MainScreenProp>();
  const { theme } = useTheme();

  const handleStart = () => {
    navigate("SignUp");
  };

  return (
    <PPView style={style.container}>
      <PPView style={style.wrapperBanner}>
        <PPImage resizeMode="cover" style={style.banner} source={BulldogImg} />
      </PPView>
      <PPView style={style.footer}>
        <PPSectionHeader
          title="Encontre os produtos e serviços perfeitos para seu Pet"
          subTitle="Os melhores profissionais e produtos estão a poucos cliques de
            distância"
        />

        <PPButton
          rightIcon={{ name: "arrow-right", size: 20, color: "#FFF" }}
          onPress={handleStart}
          text="Começar agora"
        />
      </PPView>
    </PPView>
  );
};
