import store from '../screens/store.js';
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, navigation, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import colors from '../assets/colors/colors';
import Shapes from '../assets/components/shapes.svg'

SplashScreen.preventAutoHideAsync();

const userExperience = store.getState('textValue');

store.setState("likeText", "");

export default function LikesTwo({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [likeText, setLikeText] = store.useState("likeText");

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
            <Shapes width={100} height={'100%'} />
            <View style={styles.title}>
              <Text style={{ fontFamily: 'Mont-Regular', color: colors.black, fontSize: 24, paddingBottom: 10 }}>
                Create your
            </Text>
              <Text style={{ fontFamily: 'Mont-Regular', color: colors.black, fontSize: 24, }}>
                profile
            </Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.description}>
              <View style={{ paddingBottom: '15%' }}>
                <Text style={{ fontFamily: 'Mont-Bold', fontSize: 34, color: colors.black, maxWidth: 300, paddingBottom: 5 }}>
                  What do you
              </Text>
                <Text style={{ fontFamily: 'Mont-Bold', fontSize: 34, color: colors.black, maxWidth: 300, paddingBottom: 5 }}>
                  like about this
              </Text>
                <Text style={{ fontFamily: 'Mont-Bold', fontSize: 34, color: colors.black, maxWidth: 300 }}>
                  experience?
              </Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'Mont-Regular', fontSize: 14, color: colors.black, maxWidth: 300, paddingBottom: 5 }}>
                  What aspects of this experience were
              </Text>
                <Text style={{ fontFamily: 'Mont-Regular', fontSize: 14, color: colors.black, maxWidth: 300, paddingBottom: 20 }}>
                  particularily enjoyable?
              </Text>
              </View>

              <Text style={{ fontFamily: 'Mont-Bold', fontSize: 14, color: colors.black, maxWidth: 300, paddingBottom: 20, textAlign: "center" }}>{userExperience.value}</Text>

              <TextInput
                style={styles.input}
                onChangeText={(val) => setLikeText(val)}
                value={text}
                placeholder='i.e. Dealing with people, taking risks...'

              />
              <View style={styles.appButton}>
                <TouchableOpacity onPress={() => navigation.navigate("InterestThree")} style={styles.appButtonContainer}>
                  <Text style={styles.appButtonText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  appButton: {
    paddingTop: '7%'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#34495E",
    borderRadius: 10,
    paddingVertical: '7%',
    paddingHorizontal: 105,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: '2%',
    shadowOffset: { width: '-1%', height: '15%' },
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
    paddingTop: '40%'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  logoIcon: {
    height: '20%',
    flexDirection: 'row',
    paddingTop: '7%',
    paddingBottom: '10%',
    paddingRight: '45%',
    paddingLeft: '15%',
    alignItems: 'center',
    marginBottom: '7%'
  },

  logo: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    paddingTop: '7%'
  },
  description: {
    paddingTop: '10%',
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    maxWidth: 270
  },
});