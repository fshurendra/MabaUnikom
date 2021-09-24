import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FinishScreen, Home, SplashScreen} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FinishScreen"
        component={FinishScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
