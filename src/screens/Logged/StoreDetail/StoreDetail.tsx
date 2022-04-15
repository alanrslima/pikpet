import React from "react";
import {
  PPImage,
  PPScreen,
  PPScrollView,
  PPSectionHeader,
  PPTouchableOpacity,
  PPView,
} from "../../../components";
import { useStyle } from "../../../hooks";
import { StoreDetailStyle } from "./StoreDetail.style";
import ImageMock from "../../../assets/images/bulldog.png";
import { useNavigation } from "@react-navigation/native";

export const StoreDetail: React.FC = () => {
  const { goBack } = useNavigation();
  const style = useStyle(StoreDetailStyle);
  const photos = [1, 2, 3, 4, 5];

  return (
    <PPScreen
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
          <PPSectionHeader
            title="Descrição"
            size="medium"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam eget quam viverra tincidunt eget a neque. Cras velit dolor, fringilla non justo in"
          />
        </PPView>
      </PPScrollView>
    </PPScreen>
  );
};
