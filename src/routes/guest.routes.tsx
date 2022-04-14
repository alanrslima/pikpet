import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home/Home";
import { SignUp } from "../pages/SignUp/SignUp/SignUp";

export type GuestStackParamList = {
  Home: undefined;
  SignUp: undefined;
};

const RootStack = createNativeStackNavigator<GuestStackParamList>();
export function GestRoutes() {
  // const {user} = useSelector((state: StoreStateProps) => state.Authentication);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="SignUp" component={SignUp} />
    </RootStack.Navigator>
  );
}
