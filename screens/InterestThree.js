import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, navigation, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import TextBox from '../TextBox'
import Logo from '../assets/components/logo.svg';

SplashScreen.preventAutoHideAsync();
{/* <Icon name="ios-arrow-forward-outline" size={30} color={colors.black} /> */ }

export default function ExperienceOne({ navigation }) {
  const [text, onChangeText] = React.useState(null);
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
          <Logo width={180} height={38} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.title}>
            <Text style={{ fontFamily: 'Mont-Regular', color: colors.black, fontSize: 30, paddingBottom: 10 }}>
              Create your
            </Text>
            <Text style={{ fontFamily: 'Mont-Regular', color: colors.black, fontSize: 30, }}>
              profile
            </Text>
          </View>
          <View style={styles.description}>
            <View style={{paddingBottom: 40}}>
              <Text style={{ fontFamily: 'Mont-Bold', fontSize: 35, color: colors.black, maxWidth: 300, paddingBottom: 5 }}>
                Now, let us add
              </Text>
              <Text style={{ fontFamily: 'Mont-Bold', fontSize: 35, color: colors.black, maxWidth: 300, paddingBottom: 5 }}>
                a new interest.
              </Text>
            </View>
            <View>
              <Text style={{ fontFamily: 'Mont-Regular', fontSize: 12, color: colors.black, maxWidth: 300, paddingBottom: 5 }}>
                This is an item on a traditional resume 
              </Text>
              <Text style={{ fontFamily: 'Mont-Regular', fontSize: 12, color: colors.black, maxWidth: 300, paddingBottom: 15}}>
                such as a profession, degree, club, etc.
              </Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder='Enter interest here...'
            />
          </View>
          <View style={styles.appButton}>
            <TouchableOpacity onPress={() => navigation.navigate("LikesFour")} style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  appButton: {
    paddingTop: 40
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#000",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 105
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
    backgroundColor: '#fff',
    // flexDirection: 'column',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingLeft: 50
  },
  logoIcon: {
    paddingLeft: 30,
    paddingBottom: 40,
  },

  logo: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  description: {
    paddingTop: 40,
    //position: 'absolute', // add if dont work with above
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderRadius: 10, 
    padding: 10,
    paddingLeft: 20,
  },
});
