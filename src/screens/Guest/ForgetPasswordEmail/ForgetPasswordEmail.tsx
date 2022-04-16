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
import { useStyle } from "../../../hooks";
import { GuestStackParamList } from "../../../routes/guest.routes";
import { ForgetPasswordEmailStyle } from "./ForgetPasswordEmail.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type ForgetPasswordEmailScreenProp = NativeStackNavigationProp<
  GuestStackParamList,
  "ForgetPasswordEmail"
>;

type FormData = {
  email: string;
};

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Informe o seu e-mail"),
});

export const ForgetPasswordEmail: React.FC = () => {
  const { goBack, navigate } = useNavigation<ForgetPasswordEmailScreenProp>();
  const style = useStyle(ForgetPasswordEmailStyle);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleNext = () => {
    navigate("ForgetPasswordCode");
  };

  return (
    <PPScreen
      header={{
        leftButtons: [
          { icon: { name: "arrow-left", type: "feather" }, onPress: goBack },
        ],
      }}
    >
      <PPScrollView contentContainerStyle={style.scrollContent}>
        <PPSectionHeader
          title="Esqueceu sua senha?"
          subTitle="Digite o seu e-mail cadastrado que iremos enviar um código para recuperação de sua senha"
        />
        <PPControledInput
          name="email"
          control={control}
          error={errors.email?.message}
          placeholder="E-mail"
          autoCapitalize="none"
          autoFocus
          icon={{ name: "mail", type: "feather" }}
          keyboardType="email-address"
        />

        <PPView style={style.wrapperSendButton}>
          <PPButton text="Próximo" onPress={handleSubmit(handleNext)} />
        </PPView>
      </PPScrollView>
    </PPScreen>
  );
};
