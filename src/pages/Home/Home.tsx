import React from "react";
import { PPImage, PPSectionHeader, PPView } from "../../components";
import BulldogImg from "../../assets/images/bulldog.png";
import { useStyle } from "../../hooks";
import { HomeStyle } from "./Home.style";
import { PPButton } from "../../components/PPButton/PPButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GuestStackParamList } from "../../routes/guest.routes";

type HomeScreenProp = NativeStackNavigationProp<GuestStackParamList, "Home">;

export const Home: React.FC = () => {
  const style = useStyle(HomeStyle);
  const { navigate } = useNavigation<HomeScreenProp>();

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

        <PPButton onPress={handleStart} text="Começar agora" />
      </PPView>
    </PPView>
  );
};
