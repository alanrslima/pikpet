import React from "react";
import { PPScreen, PPScrollView, PPSectionHeader } from "../../../components";

// import { Container } from './styles';

export const SignUp: React.FC = () => {
  return (
    <PPScreen
      header={{
        leftButtons: [{ icon: { name: "arrow-left" }, onPress: () => {} }],
      }}
    >
      <PPScrollView>
        <PPSectionHeader
          title="Criar uma conta"
          subTitle="Crie uma conta, isso levará menos de 1 minuto, basta informar seu e-mail e uma senha segura"
        />
      </PPScrollView>
    </PPScreen>
  );
};
