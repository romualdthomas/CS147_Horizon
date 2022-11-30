import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, navigation } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import YellowDot from '../assets/components/yellow_dot.svg'
import Shapes from '../assets/components/shapes.svg';
import TextBox from '../TextBox'

SplashScreen.preventAutoHideAsync();
{/* <Icon name="ios-arrow-forward-outline" size={30} color={colors.black} /> */ }

export default function LikesFour({navigation}) {
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
        <View style={styles.title}>
          <Text style={{ fontFamily: 'Mont-Heavy', color: colors.black, fontSize: 30, }}>
            Create your profile
          </Text>
        </View>
        <View style={styles.description}>
          <Text style={{ fontFamily: 'Mont-Regular', fontSize: 20, color: colors.black, textAlign: 'center', maxWidth: 300, paddingBottom: "10%" }}>
           Lastly, what do you like about that interest?
          </Text>
          <TextBox placeHolder={"This could be an aspiration, topic, or hobby"}/>
        </View>
        <View>
            
          <Button
            title="Go to the Home Page [To be edited]"
            style={{ width: 300, color: colors.black }}
            color={colors.black}
            onPress={()=> navigation.navigate("Home")}
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
