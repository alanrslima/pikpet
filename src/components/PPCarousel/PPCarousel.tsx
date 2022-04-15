import React, { useState } from "react";
import { LayoutRectangle, ScrollView, View } from "react-native";
import { useStyle } from "../../hooks";
import { PPCarouselStyle } from "./PPCarousel.style";

interface BannerProps {}

interface PPCarouselProps {
  banners?: BannerProps[];
}
export const PPCarousel: React.FC = () => {
  const [layout, setLayout] = useState<LayoutRectangle>();
  const style = useStyle(PPCarouselStyle);

  return (
    <View
      onLayout={(e) => setLayout(e.nativeEvent.layout)}
      style={style.container}
    >
      <View style={style.content}>
        <ScrollView
          bounces={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
        >
          <View style={[style.banner, { width: layout?.width }]}></View>
          <View
            style={[
              style.banner,
              { width: layout?.width, backgroundColor: "red" },
            ]}
          ></View>
          <View
            style={[
              style.banner,
              { width: layout?.width, backgroundColor: "green" },
            ]}
          ></View>
          <View
            style={[
              style.banner,
              { width: layout?.width, backgroundColor: "yellow" },
            ]}
          ></View>
        </ScrollView>
      </View>
    </View>
  );
};
