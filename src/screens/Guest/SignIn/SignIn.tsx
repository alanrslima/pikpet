import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  PPControledInput,
  PPScreen,
  PPScrollView,
  PPSectionHeader,
  PPView,
} from "../../../components";
import { PPButton } from "../../../components/PPButton/PPButton";
import { PPText } from "../../../components/PPText/PPText";
import { useStyle, useTheme } from "../../../hooks";
import { useAuth } from "../../../hooks/useAuth";
import { GuestStackParamList } from "../../../routes/guest.routes";
import { SignInStyle } from "./SignIn.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type SignInScreenProp = NativeStackNavigationProp<
  GuestStackParamList,
  "SignIn"
>;

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Informe o seu e-mail"),
  password: yup
    .string()
    .min(6, "A senha deve ter ao menos 6 dígitos")
    .required("Informe a sua senha"),
});

export const SignIn: React.FC = () => {
  const { goBack, navigate } = useNavigation<SignInScreenProp>();
  const { theme } = useTheme();
  const { signIn } = useAuth();
  const style = useStyle(SignInStyle);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleSignUp = () => {
    navigate("SignUp");
  };

  const handleForgetPassword = () => {
    navigate("ForgetPasswordEmail");
  };

  const handleSignIn = () => {
    signIn();
  };

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
        <PPControledInput
          name="email"
          control={control}
          error={errors.email?.message}
          placeholder="E-mail"
          autoCapitalize="none"
          autoFocus
          icon={{ name: "mail" }}
          keyboardType="email-address"
        />
        <PPControledInput
          name="password"
          control={control}
          error={errors.password?.message}
          placeholder="Senha"
          icon={{ name: "lock" }}
          secureTextEntry
        />
        <PPView style={style.wrapperSignUpButton}>
          <PPButton onPress={handleSubmit(handleSignIn)} text="Entrar" />
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
          <PPText color={theme.colors.on_background_secundary}>ou</PPText>
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
