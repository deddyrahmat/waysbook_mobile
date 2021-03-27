/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import { createStackNavigator } from '@react-navigation/stack';
 
 
 const Stack = createStackNavigator();
 
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
 import Login from '../components/Login';
 import Register from '../components/Register';
 import Home from '../components/Home';
import Profile from '../components/Profile';
import Cart from '../components/Cart';
 
  const CartStackNavigator = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="CartScreen" component={Cart} options={{title : "Cart"}}  />
    </Stack.Navigator>
    );
  };
 
 const ProfileStackNavigator = () => {
   return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} options={{title : "Profile"}}  />
    </Stack.Navigator>
   );
 };
 
 const MainStackNavigator = () => {
  return (
   <Stack.Navigator>
     <Stack.Screen name="HomeScreen" component={Home} options={{title : "Home"}}  />
   </Stack.Navigator>
  );
};

 
 export {CartStackNavigator, ProfileStackNavigator, MainStackNavigator};
 