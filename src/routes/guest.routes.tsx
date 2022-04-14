import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "../screens/Guest/SignUp/SignUp";
import { SignIn } from "../screens/Guest/SignIn/SignIn";
import { Main } from "../screens/Guest/Main/Main";
import { ForgetPasswordEmail } from "../screens/Guest/ForgetPasswordEmail/ForgetPasswordEmail";

export type GuestStackParamList = {
  Main: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ForgetPasswordEmail: undefined;
};

const RootStack = createNativeStackNavigator<GuestStackParamList>();
export function GestRoutes() {
  // const {user} = useSelector((state: StoreStateProps) => state.Authentication);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Main" component={Main} />
      <RootStack.Screen name="SignUp" component={SignUp} />
      <RootStack.Screen name="SignIn" component={SignIn} />
      <RootStack.Screen
        name="ForgetPasswordEmail"
        component={ForgetPasswordEmail}
      />
    </RootStack.Navigator>
  );
}
