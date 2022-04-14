import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  PPInput,
  PPScreen,
  PPScrollView,
  PPSectionHeader,
  PPView,
} from "../../components";
import { PPButton } from "../../components/PPButton/PPButton";
import { PPText } from "../../components/PPText/PPText";
import { useStyle, useTheme } from "../../hooks";
import { GuestStackParamList } from "../../routes/guest.routes";
import { SignInStyle } from "./SignIn.style";

type SignInScreenProp = NativeStackNavigationProp<
  GuestStackParamList,
  "SignIn"
>;

export const SignIn: React.FC = () => {
  const { goBack, navigate } = useNavigation<SignInScreenProp>();
  const { theme } = useTheme();
  const style = useStyle(SignInStyle);

  const handleSignUp = () => {
    navigate("SignUp");
  };

  const handleForgetPassword = () => {};

  return (
    <PPScreen
      header={{
        leftButtons: [{ icon: { name: "arrow-left" }, onPress: goBack }],
      }}
    >
      <PPScrollView contentContainerStyle={style.scrollContent}>
        <PPSectionHeader
          title="Seja bem vindo de volta,"
          subTitle="Estamos felizes em te ver novamente, digite seu e-mail e sua senha para acessar o aplicativo =)"
        />
        <PPInput placeholder="E-mail" />
        <PPInput placeholder="Senha" secureTextEntry />
        <PPView style={style.wrapperSignUpButton}>
          <PPButton text="Entrar" />
        </PPView>

        <PPView style={style.wrapperLabel}>
          <PPText
            weight="bold"
            onPress={handleForgetPassword}
            color={theme.colors.on_background_primary}
          >
            Esqueci minha senha
          </PPText>
        </PPView>

        <PPView style={style.wrapperOr}>
          <PPView style={style.line} />
          <PPText color={theme.colors.on_background_disable}>ou</PPText>
          <PPView style={style.line} />
        </PPView>

        <PPView style={style.wrapperLabel}>
          <PPText
            onPress={handleSignUp}
            color={theme.colors.on_background_secundary}
          >
            Ainda não possui uma conta?{" "}
            <PPText weight="bold" color={theme.colors.primary}>
              Se cadastre
            </PPText>
          </PPText>
        </PPView>
      </PPScrollView>
    </PPScreen>
  );
};
