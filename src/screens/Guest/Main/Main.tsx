import React from "react";
import { PPImage, PPSectionHeader, PPView } from "../../../components";
import BannerImg from "../../../assets/images/banner.png";
import { useStyle } from "../../../hooks";
import { MainStyle } from "./Main.style";
import { PPButton } from "../../../components/PPButton/PPButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GuestStackParamList } from "../../../routes/guest.routes";

type MainScreenProp = NativeStackNavigationProp<GuestStackParamList, "Main">;

export const Main: React.FC = () => {
  const style = useStyle(MainStyle);
  const { navigate } = useNavigation<MainScreenProp>();

  const handleStart = () => {
    navigate("SignUp");
  };

  return (
    <PPView style={style.container}>
      <PPView style={style.wrapperBanner}>
        <PPImage resizeMode="cover" style={style.banner} source={BannerImg} />
      </PPView>
      <PPView style={style.footer}>
        <PPSectionHeader
          title="Encontre o barbeiro perfeito para você"
          subTitle="Os melhores profissionais estão a poucos cliques de distância"
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
