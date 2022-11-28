import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import YellowDot from '../assets/components/yellow_dot.svg'
import Shapes from '../assets/components/shapes.svg';

SplashScreen.preventAutoHideAsync();
{/* <Icon name="ios-arrow-forward-outline" size={30} color={colors.black} /> */ }

export default function HomeScreen({navigation}) {
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
        <Shapes width={300} height={249} />
        <View style={styles.title}>
          <Text style={{ fontFamily: 'Mont-Heavy', color: colors.black, fontSize: 35, }}>
            Welcome to
          </Text>
          <View style={styles.logo}>
            <Text style={{ fontFamily: 'Mont-Heavy', color: colors.black, fontSize: 35, }}>Career Backpack</Text>
            <YellowDot width={20} height={20} />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{ fontFamily: 'Mont-Regular', fontSize: 20, color: colors.black, textAlign: 'center', maxWidth: 300 }}>
            Connecting people with shared backgrounds as they look to
            make <Text style={{ fontFamily: 'Mont-Regular', fontSize: 20, color: colors.evergreen }}>career</Text> pivots
          </Text>
        </View>
        <View>
          <Button
            title="Begin"
            style={{ width: 300, color: colors.black }}
            color={colors.black}
            onPress={()=> navigation.navigate("ProfileScreen")}
            size='lg'
          >
            
          </Button>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
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
  logo: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  description: {
    alignItems: 'center',
    justifyContent: 'center',
    //position: 'absolute', // add if dont work with above
  }
});
