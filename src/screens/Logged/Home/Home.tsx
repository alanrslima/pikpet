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
  PPCarousel,
  PPScrollView,
  PPCardItem,
  PPInput,
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

  return (
    <PPSafeAreaView style={style.container}>
      <PPScrollView>
        {/* Location Picker */}
        <PPTouchableOpacity style={style.wrapperItem}>
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

        {/* Search */}
        <PPView style={style.wrapperItem}>
          <PPInput
            iconName="search"
            placeholder="Pesquisar"
            borderColor="transparent"
            bgColor={theme.colors.on_background_disable}
          />
        </PPView>

        {/* Pets carrousel */}
        <PPView style={style.wrapperItem}>
          <PPCarousel />
        </PPView>

        {/* Scroll horizontal */}
        <PPView style={style.wrapperItem}>
          <PPSectionHeader size="medium" title="Perto de você" />
        </PPView>

        {/* Melhores avalidados */}
        <PPView style={style.wrapperItem}>
          <PPSectionHeader size="medium" title="Melhores avaliados" />
        </PPView>

        <PPCardItem onPress={onPressStore} />
        <PPCardItem />
        <PPCardItem />
        <PPCardItem />
      </PPScrollView>
    </PPSafeAreaView>
  );
};
