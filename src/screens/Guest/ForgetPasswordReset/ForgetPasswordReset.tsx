import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  PPButton,
  PPControledInput,
  PPScreen,
  PPScrollView,
  PPSectionHeader,
  PPView,
} from "../../../components";
import { useStyle } from "../../../hooks";
import { ForgetPasswordResetStyle } from "./ForgetPasswordReset.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  password: yup
    .string()
    .min(6, "A senha deve ter ao menos 6 dígitos")
    .required("Informe uma senha"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "A sennha de confirmação não confere")
    .required("Informe a confirmação da senha"),
});

type FormData = {
  password: string;
  passwordConfirm: string;
};

export const ForgetPasswordReset: React.FC = () => {
  const { goBack } = useNavigation();
  const style = useStyle(ForgetPasswordResetStyle);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleSave = () => {};

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
        <PPControledInput
          name="password"
          control={control}
          secureTextEntry
          placeholder="Nova senha"
          autoFocus
          error={errors.password?.message}
          icon={{ name: "lock" }}
        />
        <PPControledInput
          name="passwordConfirm"
          control={control}
          error={errors.passwordConfirm?.message}
          secureTextEntry
          placeholder="Confirme a senha"
          icon={{ name: "lock" }}
        />
        <PPView style={style.wrapperSendButton}>
          <PPButton onPress={handleSubmit(handleSave)} text="Salvar" />
        </PPView>
      </PPScrollView>
    </PPScreen>
  );
};
