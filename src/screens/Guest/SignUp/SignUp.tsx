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
import { PPText } from "../../../components/PPText/PPText";
import { useStyle, useTheme } from "../../../hooks";
import { GuestStackParamList } from "../../../routes/guest.routes";
import { SignUpStyle } from "./SignUp.style";

type SignUpScreenProp = NativeStackNavigationProp<
  GuestStackParamList,
  "SignUp"
>;

export const SignUp: React.FC = () => {
  const style = useStyle(SignUpStyle);
  const { goBack, navigate } = useNavigation<SignUpScreenProp>();
  const { theme } = useTheme();

  const loginSocial = [
    {
      id: "google",
      label: "Continue com Google",
      color: theme.colors.secundary,
    },
    {
      id: "facebook",
      label: "Continue com Facebook",
      color: theme.colors.primary,
    },
    { id: "apple", label: "Continue com Apple", color: "black" },
  ];

  const handleSignIn = () => {
    navigate("SignIn");
  };

  return (
    <PPScreen
      header={{
        leftButtons: [{ icon: { name: "arrow-left" }, onPress: goBack }],
      }}
    >
      <PPScrollView contentContainerStyle={style.scrollContent}>
        <PPSectionHeader
          title="Criar uma conta"
          subTitle="Crie uma conta, isso levará menos de 1 minuto, basta informar seu e-mail e uma senha segura"
        />
        <PPInput
          placeholder="E-mail"
          iconName="mail"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <PPInput placeholder="Senha" iconName="lock" secureTextEntry />
        <PPView style={style.wrapperSignUpButton}>
          <PPButton text="Cadastrar" />
        </PPView>

        <PPView style={style.wrapperOr}>
          <PPView style={style.line} />
          <PPText color={theme.colors.on_background_secundary}>ou</PPText>
          <PPView style={style.line} />
        </PPView>

        {loginSocial.map((item) => (
          <PPView style={style.wrapperSocialButton} key={item.id}>
            <PPButton bgColor={item.color} text={item.label} />
          </PPView>
        ))}

        <PPView style={style.wrapperFooterText}>
          <PPText
            onPress={handleSignIn}
            color={theme.colors.on_background_secundary}
          >
            Já possui um cadastro?{" "}
            <PPText weight="bold" color={theme.colors.primary}>
              Faça login
            </PPText>
          </PPText>
        </PPView>
      </PPScrollView>
    </PPScreen>
  );
};
