import React from "react";
import { useCallback, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal, TextInput, navigation, TouchableOpacity, Platform, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Sizes from '../assets/components/size_title.svg';


SplashScreen.preventAutoHideAsync();


export default function Sizes() {

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
            <View style={{}}>
                <View style={{}}>
                    <Sizes width={120} height={25} />
                    <Text style={{ fontFamily: 'Mont-Regular', fontSize: 12, paddingTop: 10, }}>
                        The size of an item can indicate its importance to you, since larger nodes will be easier for other users to see on your profile.
                        Notice that larger nodes will also appear brighter in color.
                    </Text>
                </View>
            </View>

        </>
    );
}