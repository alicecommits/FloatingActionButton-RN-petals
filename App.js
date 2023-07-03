import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React, { useState, useEffect } from 'react';
import { StyleSheet,
  Text, 
  TextInput, 
  View, 
  Dimensions, 
  Button,
  Image } from 'react-native';

// ------------ navigation -------------------
import { NavigationContainer } from '@react-navigation/native';
// for tuto v using Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// for real v using Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
// DrawerContentScrollView,
// DrawerItemList,
// DrawerItem,
// useDrawerProgress,

// screens
import HelpScreen from 'src/screens/HelpScreen';
import HomeScreen from 'src/screens/HomeScreen';
import CreatePostScreen from 'src/screens/CreatePostScreen';

// components
import LogoTitle from 'src/components/LogoTitleComp';
import FloatingButton from 'src/components/FloatingActionButton';
import ButtonCustom from 'src/components/ButtonOptions';


 // not useful for now
import Animated from 'react-native-reanimated';
import MapView, {Marker} from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';

// --------------- END OF IMPORTS --------------------
// ----------------- START OF APP CODE ----------------


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator 
    mode="modal"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ 
        headerTitle: (props) => <LogoTitle {...props} />,
        // Add a placeholder button without the `onPress` to avoid flicker
        headerRight: () => (
          <Button
            title="Update count"
            color="#7393B3"
            />
        )}} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
 };

registerRootComponent(App);
