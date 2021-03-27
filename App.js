/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
  Text,
//   useColorScheme,
  View,
} from 'react-native';

// component
import Login from './components/Login';
import Register from './components/Register';
// import Home from './components/Home';

import BottomTabNavigator from './navigator/TabNavigator'


const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={Login}  />
          <Stack.Screen name="RegisterScreen" component={Register}  />
          <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }}  />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};


export default App;
