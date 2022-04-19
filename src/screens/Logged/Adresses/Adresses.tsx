import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import {
  PPFlatList,
  PPInput,
  PPScreen,
  PPView,
  SelectionItem,
} from "../../../components";
import { useAddress, useStyle, useTheme } from "../../../hooks";
import { AdressesStyle } from "./Adresses.style";

export const Adresses: React.FC = () => {
  const { adresses } = useAddress();
  const style = useStyle(AdressesStyle);
  const { goBack } = useNavigation();
  const { theme } = useTheme();

  return (
    <PPScreen
      header={{
        leftButtons: [{ icon: { name: "arrow-left" }, onPress: goBack }],
        title: "Endereços",
      }}
    >
      <PPFlatList
        ListHeaderComponent={
          <PPView style={style.wrapperInput}>
            <PPInput
              bgColor={theme.colors.on_background_disable}
              borderColor="transparent"
              placeholder="Pesquisar endereço"
              onFocus={() => {}}
              icon={{ name: "search" }}
            />
          </PPView>
        }
        data={adresses}
        renderItem={({ item, index }) => (
          <SelectionItem
            selected={index === 0}
            icon={{ name: "map-pin" }}
            title="Rua das Palmeiras, 30"
            description={`Parque das Acácias\nGoiânia, GO \nQuadra 45, Lote 30`}
          />
        )}
      />
    </PPScreen>
  );
};
