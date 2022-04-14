import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();
export function App() {
  // const {user} = useSelector((state: StoreStateProps) => state.Authentication);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{headerShown: false}}
          name="App"
          component={Dashboard}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
