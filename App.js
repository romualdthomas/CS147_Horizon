import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, Stack } from "native-base";
import ProfileCreationScreen from './screens/ProfileCreationScreen.js';


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
              name="ProfileScreen"
              component={ProfileCreationScreen}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10
  },

});
