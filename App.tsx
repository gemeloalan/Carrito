import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator } from './src/Navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>

    </NavigationContainer>
  );
}

