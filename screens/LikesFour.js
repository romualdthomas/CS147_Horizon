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
import Shapes from '../assets/components/shapes.svg'
import store from './store';

SplashScreen.preventAutoHideAsync();

const userInterest = store.getState('newInterest');

store.setState('newInterestLike', '');

export default function LikesFour({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [newInterestLike, setNewInterestLike] = store.useState("newInterestLike");


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
                Great! Now,
              </Text>
              <Text style={{ fontFamily: 'Mont-Bold', fontSize: 34, color: colors.black, maxWidth: 300, paddingBottom: 5 }}>
                what interests you about
              </Text>
              <Text style={{ fontFamily: 'Mont-Bold', fontSize: 34, color: colors.black, maxWidth: 300, paddingBottom: 5 }}>
                {userInterest.value}?
              </Text>
            </View>
            <View>
              <Text style={{ fontFamily: 'Mont-Regular', fontSize: 14, color: colors.black, maxWidth: 300, paddingBottom: 5 }}>
                What aspects of this interest
              </Text>
              <Text style={{ fontFamily: 'Mont-Regular', fontSize: 14, color: colors.black, maxWidth: 300, paddingBottom: 15 }}>
                make you want to explore it?
              </Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setNewInterestLike(val)}
              value={text}
              placeholder='i.e. Something new everyday...'
              
            />
            <View style={styles.appButton}>
              <TouchableOpacity onPress={() => navigation.navigate("ProfileCompleted")} style={styles.appButtonContainer}>
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
    maxWidth: 260
  },
});