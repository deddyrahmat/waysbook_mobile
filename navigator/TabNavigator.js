/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 
 import {CartStackNavigator, ProfileStackNavigator, MainStackNavigator} from './StackNavigator';
 
 const Tab = createBottomTabNavigator();
 
 
 const BottomTabNavigator = () => {
 
   return (
     <Tab.Navigator>
       <Tab.Screen name="Home" component={MainStackNavigator}  />
       <Tab.Screen name="Profile" component={ProfileStackNavigator}  />
       <Tab.Screen name="Cart" component={CartStackNavigator}  />
     </Tab.Navigator>
     
   );
 };
 
 
 export default BottomTabNavigator;
 