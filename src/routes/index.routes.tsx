import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {useSelector} from 'react-redux';
// import {navigationRef} from '~/config/RootNavigation';

// import Login from './login.routes';
import { GestRoutes } from "./guest.routes";
// import {StoreStateProps} from '~/store/createStore';

const Stack = createNativeStackNavigator();
export const Routes: React.FC = () => {
  // const {user} = useSelector((state: StoreStateProps) => state.Authentication);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GestRoutes" component={GestRoutes} />
        {/* {user ? (
          <RootStack.Screen
            options={{headerShown: false}}
            name="App"
            component={Dashboard}
          />
        ) : (
          <RootStack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
