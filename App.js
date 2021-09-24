import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {FinishScreen, Home, SplashScreen} from './pages';
import Router from './router';

const MabaUnikom = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
export default MabaUnikom;
