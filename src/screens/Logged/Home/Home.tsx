import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  PPSafeAreaView,
  PPTouchableOpacity,
  PPText,
  PPView,
  PPIcon,
  PPSectionHeader,
  PPScrollView,
  PPCardItem,
  PPInput,
  ProfileIcon,
} from "../../../components";
import { useStyle, useTheme } from "../../../hooks";
import { LoggedStackParamList } from "../../../routes/logged.routes";
import { HomeStyle } from "./Home.style";

type HomeScreenProp = NativeStackNavigationProp<LoggedStackParamList, "Home">;

export const Home: React.FC = () => {
  const style = useStyle(HomeStyle);
  const { theme } = useTheme();
  const { navigate } = useNavigation<HomeScreenProp>();

  const onPressStore = () => {
    navigate("StoreDetail");
  };

  const onPressAddress = () => {
    navigate("Adresses");
  };

  return (
    <PPSafeAreaView style={style.container}>
      <PPScrollView>
        <PPView style={style.wrapperHeader}>
          <PPTouchableOpacity onPress={onPressAddress}>
            <PPText color={theme.colors.on_background_secundary}>
              Localização atual
            </PPText>
            <PPView style={style.row}>
              <PPText
                size="heading_4"
                color={theme.colors.on_background_primary}
                weight="bold"
              >
                Goiânia, Goias
              </PPText>
              <PPIcon name="chevron-down" size={20} />
            </PPView>
          </PPTouchableOpacity>

          <ProfileIcon />
        </PPView>
        {/* Location Picker */}

        {/* Search */}
        <PPView style={style.wrapperItem}>
          <PPInput
            icon={{ name: "search" }}
            placeholder="Pesquisar"
            borderColor="transparent"
            bgColor={theme.colors.on_background_disable}
          />
        </PPView>

        {/* Melhores avalidados */}
        <PPView style={style.wrapperItem}>
          <PPSectionHeader titleSize="heading_3" title="Próximos de você" />
        </PPView>

        <PPCardItem onPress={onPressStore} />
        <PPCardItem />
        <PPCardItem />
        <PPCardItem />
      </PPScrollView>
    </PPSafeAreaView>
  );
};
