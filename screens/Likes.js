import React from "react";
import { useCallback, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal, TextInput, navigation, TouchableOpacity, Platform, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Likes from '../assets/components/likes_title.svg';


SplashScreen.preventAutoHideAsync();


export default function Likes() {

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
                    <Likes width={120} height={25} />
                    <Text style={{ fontFamily: 'Mont-Regular', fontSize: 12, paddingTop: 10, }}>
                        Likes are tags that you can apply to an experience or interest to indicate what you like about it.
                        Likes help us recommend new people or interests to you.
                    </Text>
                </View>
            </View>

        </>
    );
}