import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Logged/Home/Home";
import { StoreDetail } from "../screens/Logged/StoreDetail/StoreDetail";

export type LoggedStackParamList = {
  Home: undefined;
  StoreDetail: undefined;
};
const RootStack = createNativeStackNavigator();
export function LoggedRoutes() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="StoreDetail" component={StoreDetail} />
    </RootStack.Navigator>
  );
}
