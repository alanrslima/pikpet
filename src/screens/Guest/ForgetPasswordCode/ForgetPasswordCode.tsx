import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  PPButton,
  PPInput,
  PPScreen,
  PPScrollView,
  PPSectionHeader,
  PPView,
} from "../../../components";
import { useStyle } from "../../../hooks";
import { GuestStackParamList } from "../../../routes/guest.routes";
import { ForgetPasswordCodeStyle } from "./ForgetPasswordCode.style";

type ForgetPasswordResetScreenProp = NativeStackNavigationProp<
  GuestStackParamList,
  "ForgetPasswordEmail"
>;

export const ForgetPasswordCode: React.FC = () => {
  const style = useStyle(ForgetPasswordCodeStyle);
  const { goBack, navigate } = useNavigation<ForgetPasswordResetScreenProp>();

  const onPressNext = () => {
    navigate("ForgetPasswordReset");
  };

  return (
    <PPScreen
      header={{
        leftButtons: [{ onPress: goBack, icon: { name: "arrow-left" } }],
      }}
    >
      <PPScrollView contentContainerStyle={style.scrollContent}>
        <PPSectionHeader
          title="Digite o código"
          subTitle="Verifique a sua caixa de e-mail, você deve ter recebido um código de verificação para inserir logo abaixo"
        />
        <PPInput
          placeholder="Código"
          autoCapitalize="none"
          autoFocus
          icon={{ name: "code" }}
          keyboardType="number-pad"
        />
        <PPView style={style.wrapperSendButton}>
          <PPButton text="Próximo" onPress={onPressNext} />
        </PPView>
      </PPScrollView>
    </PPScreen>
  );
};
