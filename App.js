import { StatusBar } from 'expo-status-bar';
import colors from './assets/colors/colors';
import React from "react";
import HomeScreen from './screens/HomeScreen.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, Box, Stack } from "native-base";
import ExperienceOne from './screens/ExperienceOne.js';
import LikesTwo from './screens/LikesTwo.js';
import InterestThree from './screens/InterestThree.js';
import LikesFour from './screens/LikesFour.js';
import ProfileCompleted from './screens/ProfileCompleted.js';
import ProfileWelcomeScreen from './screens/ProfileWelcomeScreen.js';
import HomeFeed from './screens/HomeFeed.js';
import Messages from './screens/Messages.js'
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, navigation, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName={"Profile"}
        style={styles.tabBar}
        screenOptions={{
          tabBarStyle: { backgroundColor: colors.white, borderRadius: '20%' },
        }}
        tabBarOptions={{
          activeTintColor:'#D3D3D3',
          inactiveTintColor: colors.black,
          showLabel: false,
        }}
      >
        <Tab.Screen name="HomeFeed" component={HomeFeed} options={{
                headerShown: false,
                tabBarIcon: ({color}) => <Icon name="ios-home-sharp" color={color} size={20}></Icon>
              }}/>
        <Tab.Screen name="Messages" component={Messages} options={{
                headerShown: false,
                tabBarIcon: ({color}) => <Icon name="ios-chatbubble-sharp" color={color} size={20}></Icon>
              }}/>
        <Tab.Screen name="Profile" component={ProfileWelcomeScreen} options={{
                headerShown: false,
                tabBarIcon: ({color}) => <Icon name="ios-person-sharp" color={color} size={20}></Icon>
              }}/>
      </Tab.Navigator>
    )
  }

  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
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
            <Stack.Screen
              name="ProfileCompleted"
              component={ProfileCompleted}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ProfileWelcomeScreen"
              component={ProfileWelcomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
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
  tabBar: {
    backgroundColor: colors.black,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    
  }

}) 
