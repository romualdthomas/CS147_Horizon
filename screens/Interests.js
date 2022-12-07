import React from "react";
import { useCallback, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal, TextInput, navigation, TouchableOpacity, Platform, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Interests from '../assets/components/interests_title.svg';


SplashScreen.preventAutoHideAsync();


export default function Experiences() {

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
            <View style={{}} onLayout={onLayoutRootView}>

                <View style={{ paddingBottom: 10, flexDirection: 'column', }}>
                    <Text style={styles.modalText}>Help</Text>
                    <View style={{ alignSelf: 'center', height: 5, backgroundColor: 'black', width: '94%', }} />
                </View>
                <View style={{}}>
                    <Interests width={120} height={25} />
                    <Text style={{ fontFamily: 'Mont-Regular', fontSize: 12, paddingTop: 10, }}>
                        Interests are aspirations, topics, or hobbies.
                        They may be related to your experiences, or not! On your profile, they’re represented as circles.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                    <Pressable
                        onPress={() => addNodeColor('orange', '#EB7A4A')}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? 'rgb(210, 230, 255)'
                                    : '#fff',
                            }]}
                    >
                        <Icon name="ios-arrow-back-circle-outline" size={20}></Icon>
                    </Pressable>
                    <Text style={{ fontFamily: 'Mont-Regular' }}>of</Text>
                    <Pressable
                        onPress={() => addNodeColor('orange', '#EB7A4A')}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? 'rgb(210, 230, 255)'
                                    : '#fff',
                            }]}
                    >
                        <Icon name="ios-arrow-forward-circle-outline" size={20}></Icon>
                    </Pressable>

                </View>
            </View>

        </>
    );
}