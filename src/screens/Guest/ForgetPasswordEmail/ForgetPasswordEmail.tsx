import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  PPInput,
  PPScreen,
  PPScrollView,
  PPSectionHeader,
  PPView,
} from "../../../components";
import { PPButton } from "../../../components/PPButton/PPButton";
import { useStyle } from "../../../hooks";
import { GuestStackParamList } from "../../../routes/guest.routes";
import { ForgetPasswordEmailStyle } from "./ForgetPasswordEmail.style";

type ForgetPasswordEmailScreenProp = NativeStackNavigationProp<
  GuestStackParamList,
  "ForgetPasswordEmail"
>;

export const ForgetPasswordEmail: React.FC = () => {
  const { goBack, navigate } = useNavigation<ForgetPasswordEmailScreenProp>();
  const style = useStyle(ForgetPasswordEmailStyle);

  const onPressNext = () => {
    navigate("ForgetPasswordCode");
  };

  return (
    <PPScreen
      header={{
        leftButtons: [{ icon: { name: "arrow-left" }, onPress: goBack }],
      }}
    >
      <PPScrollView contentContainerStyle={style.scrollContent}>
        <PPSectionHeader
          title="Esqueceu sua senha?"
          subTitle="Digite o seu e-mail cadastrado que iremos enviar um código para recuperação de sua senha"
        />
        <PPInput
          placeholder="E-mail"
          autoCapitalize="none"
          autoFocus
          iconName="mail"
          keyboardType="email-address"
        />

        <PPView style={style.wrapperSendButton}>
          <PPButton text="Próximo" onPress={onPressNext} />
        </PPView>
      </PPScrollView>
    </PPScreen>
  );
};
