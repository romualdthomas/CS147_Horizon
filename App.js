import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, Stack } from "native-base";
import ProfileCreationScreen from './screens/ProfileCreationScreen.js';
import ExperienceOne from './screens/ExperienceOne.js';
import LikesTwo from './screens/LikesTwo.js';
import InterestThree from './screens/InterestThree.js';
import LikesFour from './screens/LikesFour.js';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ExperienceOne"
              component={ExperienceOne}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="LikesTwo"
              component={LikesTwo}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="InterestThree"
              component={InterestThree}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="LikesFour"
              component={LikesFour}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>

    </>
  );
}