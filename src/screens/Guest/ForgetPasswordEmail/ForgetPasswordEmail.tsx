import { useNavigation } from "@react-navigation/native";
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
import { ForgetPasswordEmailStyle } from "./ForgetPasswordEmail.style";

export const ForgetPasswordEmail: React.FC = () => {
  const { goBack } = useNavigation();
  const style = useStyle(ForgetPasswordEmailStyle);

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
          keyboardType="email-address"
        />

        <PPView style={style.wrapperSendButton}>
          <PPButton text="Entrar" />
        </PPView>
      </PPScrollView>
    </PPScreen>
  );
};
