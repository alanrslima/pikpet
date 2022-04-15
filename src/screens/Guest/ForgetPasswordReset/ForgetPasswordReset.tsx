import { useNavigation } from "@react-navigation/native";
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
import { ForgetPasswordResetStyle } from "./ForgetPasswordReset.style";

export const ForgetPasswordReset: React.FC = () => {
  const { goBack } = useNavigation();
  const style = useStyle(ForgetPasswordResetStyle);

  return (
    <PPScreen
      header={{
        leftButtons: [{ onPress: goBack, icon: { name: "arrow-left" } }],
      }}
    >
      <PPScrollView contentContainerStyle={style.scrollContent}>
        <PPSectionHeader
          title="Escolha uma nova senha"
          subTitle="Prontinho, agora basta definir uma nova senha para acessar o aplicativo."
        />
        <PPInput
          secureTextEntry
          placeholder="Nova senha"
          autoFocus
          icon={{ name: "lock" }}
        />
        <PPInput
          secureTextEntry
          placeholder="Confirme a senha"
          icon={{ name: "lock" }}
        />
        <PPView style={style.wrapperSendButton}>
          <PPButton text="Salvar" />
        </PPView>
      </PPScrollView>
    </PPScreen>
  );
};
