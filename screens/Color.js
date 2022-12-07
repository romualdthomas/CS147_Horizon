import React from "react";
import { useCallback, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal, TextInput, navigation, TouchableOpacity, Platform, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../assets/components/color_title.svg';


SplashScreen.preventAutoHideAsync();


export default function Color() {

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
            <View style={{}} >
                <View style={{}}>
                    <Color width={120} height={25} />
                    <Text style={{ fontFamily: 'Mont-Regular', fontSize: 12, paddingTop: 10, }}>
                        You can use color to group the items on your profile.
                        For example, you might make all of the interests and experiences related to “real estate” blue, to show they’re conceptually related to you.
                    </Text>
                </View>
            </View>

        </>
    );
}