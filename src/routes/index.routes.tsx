import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestRoutes } from "./guest.routes";
import { useAuth } from "../hooks/useAuth";
import { LoggedRoutes } from "./logged.routes";

const Stack = createNativeStackNavigator();
export const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="LoggedRoutes" component={LoggedRoutes} />
        ) : (
          <Stack.Screen name="GestRoutes" component={GestRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
