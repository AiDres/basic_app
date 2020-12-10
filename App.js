/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View,Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from './views/theme/UserScreen.js';
import HomeScreen from './views/theme/HomeScreen.js';
const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="homePage">
          <Stack.Screen name={'homePage'} options={{title:'首页'}}component={HomeScreen}/>
          <Stack.Screen name={'userPage'} options={{title:'个人'}}component={UserScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
