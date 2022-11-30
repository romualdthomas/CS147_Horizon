import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import YellowDot from '../assets/components/yellow_dot.svg'
import Shapes from '../assets/components/shapes.svg';

SplashScreen.preventAutoHideAsync();
{/* <Icon name="ios-arrow-forward-outline" size={30} color={colors.black} /> */ }

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Mont-Bold': require('../assets/fonts/Mont-Trial-Bold.ttf'),
    'Mont-Black': require('../assets/fonts/Mont-Trial-Black.ttf'),
    'Mont-Heavy': require('../assets/fonts/Mont-Trial-Heavy.ttf'),
    'Mont-Light': require('../assets/fonts/Mont-Trial-ExtraLight.ttf'),
    'Mont-Regular': require('../assets/fonts/Mont-Trial-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <View style={styles.logoIcon}>
          <Shapes width={250} height={207} />
        </View>
        <View style={styles.title}>
          <Text style={{ fontFamily: 'Mont-Regular', color: colors.black, fontSize: 35, paddingBottom: 8 }}>
            Welcome to
          </Text>
          <View >
            <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 35, }}>Career </Text>
            <View style={styles.logo}>
              <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 35, }}>Backpack </Text>
              <YellowDot width={20} height={20} />
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{ fontFamily: 'Mont-Regular', fontSize: 20, color: colors.black, maxWidth: 300 }}>
            Connecting people with shared backgrounds as they look to
            make <Text style={{ fontFamily: 'Mont-Regular', fontSize: 20, color: colors.evergreen }}>career</Text> pivots
          </Text>
        </View>
        <View style={styles.appButton}>
          <TouchableOpacity onPress={() => navigation.navigate("ExperienceOne")} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Begin</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  appButton: {
    paddingTop: 50
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#000",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 120
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: 'Mont-Regular',
    alignSelf: "center",
    textTransform: "uppercase"
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 10,
  },
  logoIcon: {
    paddingRight: 150,
    paddingTop: 50,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    paddingRight: 80,
    paddingTop: 50,
    paddingBottom: 40,
  },
  description: {
    
  }
});