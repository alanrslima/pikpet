import React from "react";
import { PPButton, PPScreen, PPSectionHeader } from "../../../components";

export const ForgetPasswordCode: React.FC = () => {
  return (
    <PPScreen
      header={{
        leftButtons: [{ onPress: () => {}, icon: { name: "arrow-left" } }],
      }}
    >
      <PPSectionHeader
        title="Digite o código"
        subTitle="Verifique a sua caixa de e-mail, você deve ter recebido um código de verificação para inserir logo abaixo"
      />

      <PPButton />
    </PPScreen>
  );
};
