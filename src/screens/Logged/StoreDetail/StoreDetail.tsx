import React from "react";
import {
  PPButton,
  PPImage,
  PPScreen,
  PPScrollView,
  PPSectionHeader,
  PPTouchableOpacity,
  PPView,
  SelectionItem,
} from "../../../components";
import { useStyle } from "../../../hooks";
import { StoreDetailStyle } from "./StoreDetail.style";
import ImageMock from "../../../assets/images/banner.png";
import { useNavigation } from "@react-navigation/native";

export const StoreDetail: React.FC = () => {
  const { goBack } = useNavigation();
  const style = useStyle(StoreDetailStyle);
  const photos = [1, 2, 3, 4, 5];

  return (
    <PPScreen
      useSafeArea={false}
      header={{
        floating: true,
        leftButtons: [{ onPress: goBack, icon: { name: "arrow-left" } }],
        rightButtons: [{ onPress: () => {}, icon: { name: "heart" } }],
      }}
    >
      <PPScrollView>
        <PPView style={style.wrapperImage}>
          <PPImage source={ImageMock} style={style.image} />
        </PPView>
        <PPScrollView
          contentContainerStyle={style.contentScroll}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {photos.map((photo) => (
            <PPTouchableOpacity key={photo} style={style.smallImage} />
          ))}
        </PPScrollView>

        <PPView style={style.content}>
          <PPSectionHeader subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam eget quam viverra tincidunt eget a neque. Cras velit dolor, fringilla non justo in" />
        </PPView>

        <SelectionItem
          title="Corte de cabelo"
          description="Corte de cabelo na régua com profissionais de respeitos"
          label="R$ 30,00"
          selected
        />
        <SelectionItem
          title="Corte de cabelo"
          description="Corte de cabelo na régua com profissionais de respeitos"
          label="R$ 30,00"
        />
        <SelectionItem
          title="Corte de cabelo"
          description="Corte de cabelo na régua com profissionais de respeitos"
          label="R$ 30,00"
        />

        <PPButton text="Próximo" />
      </PPScrollView>
    </PPScreen>
  );
};
