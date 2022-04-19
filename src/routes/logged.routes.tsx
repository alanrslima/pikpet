import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Logged/Home/Home";
import { StoreDetail } from "../screens/Logged/StoreDetail/StoreDetail";
import { Adresses } from "../screens/Logged/Adresses/Adresses";

export type LoggedStackParamList = {
  Home: undefined;
  StoreDetail: undefined;
  Adresses: undefined;
};
const RootStack = createNativeStackNavigator();
export function LoggedRoutes() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="StoreDetail" component={StoreDetail} />
      <RootStack.Screen name="Adresses" component={Adresses} />
    </RootStack.Navigator>
  );
}
