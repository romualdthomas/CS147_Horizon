import { StatusBar } from 'expo-status-bar';
import Tooltip from "react-native-walkthrough-tooltip";
import React from "react";
import { useCallback, useState } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, Button, Modal, TextInput, navigation, TouchableOpacity, Platform, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Draggable from 'react-native-draggable';
import colors from '../assets/colors/colors';
import store from './store';
import YellowDot from '../assets/components/yellow_dot.svg';
import Icon from 'react-native-vector-icons/Ionicons';
// import Red from '../assets/components/red.svg';
// import Yellow from '../assets/components/yellow.svg';
// import Orange from '../assets/components/orange.svg';
// import Blue from '../assets/components/blue.svg';
// import Green from '../assets/components/green.svg';
// import Purple from '../assets/components/purple.svg';
import CircleAddBTN from '../assets/components/circle_add_btn.svg';
import RecAddBTN from '../assets/components/Rectangle_add_btn.svg';
import HelpIcon from '../assets/components/help_icon.svg';
import Experiences from '../assets/components/experience_title.svg';
import Interests from '../assets/components/interests_title.svg';
import Likes from '../assets/components/likes_title.svg';
import Sizes from '../assets/components/size_title.svg';
import Color from '../assets/components/color_title.svg';
import Wizard from '../screens/Wizard.js';
import Profile_Pic from '../assets/components/profile_pic.svg';
import Crown from '../assets/components/crown.svg'

export default function BenProfile({ navigation }) {
    const [notifModalVisible, setNotifModalVisible] = React.useState(false);

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
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.topSection}>
                <View style={styles.header}>
                    <View style={styles.screenLogo}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Icon name="arrow-back-outline" style={{ paddingRight: 5 }} size={28}></Icon>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 28, paddingRight: 5 }}>Ben Liao</Text>
                        <YellowDot width={20} height={20} />
                    </View>
                </View>
                <View style={{ alignSelf: 'center', height: 5, backgroundColor: 'black', width: '90%', }} />
            </View>
            <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: '5%', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#DDDDDD',
                                }]}
                        >
                            <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 20 }}>View Network</Text>
                            <View style={{ alignSelf: 'center', height: 2, backgroundColor: 'black', width: '100%', }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#DDDDDD',
                                }]}
                        >
                            <View style={{
                                width: 90,
                                height: 40,
                                borderRadius: '25%',
                                backgroundColor: '#DDDDDD'
                            }} >
                                <Text style={{
                                    fontFamily: 'Mont-Bold',
                                    color: colors.black,
                                    fontSize: 15,
                                    textAlign: "center",
                                    paddingTop: '5%',
                                    justifyContent: 'center',
                                    margin: 10,
                                }}>
                                    Follow
                            </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '5%', width: '90%', paddingLeft: '8%' }}>
                    <Text style={{ textAlign: 'center' }}>
                        Computer Scientist and Designer interested in large-scale ideas.
                    </Text>
                </View>
            </View>
            <View style={{}}>
                <Draggable x={'11%'} y={'190%'}
                    disabled={true}
                >
                    <View style={{
                        width: 150,
                        height: 150,
                        backgroundColor: '#6283FA'
                    }} >
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 20,
                            textAlign: "center",
                            paddingTop: "30%",
                            justifyContent: 'center',
                            margin: 10,
                        }}> Computer Science </Text>
                    </View>
                </Draggable>
                <Draggable x={'11%'} y={'20%'}
                    disabled={true}
                >
                    <View style={{
                        width: 160,
                        height: 160,
                        borderRadius: 160 / 2,
                        backgroundColor: '#EB7A4A'
                    }} >
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 15,
                            textAlign: "center",
                            paddingTop: "40%",
                            justifyContent: 'center',
                            margin: 10,
                        }}> Entrepreneurship </Text>
                    </View>
                </Draggable>
                <Draggable x={'34%'} y={'370%'}
                    disabled={true}
                >
                    <View style={{
                        width: 60,
                        height: 60,
                        borderRadius: 60 / 2,
                        backgroundColor: '#5EAD75'
                    }} >
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 5,
                            textAlign: "center",
                            paddingTop: "30%",
                            justifyContent: 'center',
                            margin: 10,
                        }}> Environmental Science </Text>
                    </View>
                </Draggable>
                <Draggable x={'50%'} y={'730%'}
                    disabled={true}
                >
                    <View style={{
                        width: 60,
                        height: 60,
                        backgroundColor: '#DA6970'
                    }} >
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 8,
                            textAlign: "center",
                            paddingTop: "10%",
                            justifyContent: 'center',
                            margin: 10,
                        }}> Research </Text>
                    </View>
                </Draggable >

                <Draggable x={'50%'} y={'185%'}
                    disabled={true}
                >
                    <View style={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#F0B749'
                    }} >
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 10,
                            textAlign: "center",
                            paddingTop: "40%",
                            justifyContent: 'center',
                            margin: 10,
                        }}> Artist </Text>
                    </View>
                </Draggable>
                <Draggable x={'50%'} y={'630%'}
                    disabled={true}
                >
                    <View style={{
                        width: 60,
                        height: 60,
                        borderRadius: 60 / 2,
                        backgroundColor: '#B479C9'
                    }} >
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 8,
                            textAlign: "center",
                            paddingTop: "20%",
                            justifyContent: 'center',
                            margin: 10,
                        }}> Virtual Reality </Text>
                    </View>
                </Draggable>
                <Draggable x={'50%'} y={'475%'}
                    disabled={true}
                >
                    <View style={{
                        width: 60,
                        height: 60,
                        borderRadius: 60 / 2,
                        backgroundColor: '#B479C9'
                    }} >
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 8,
                            textAlign: "center",
                            paddingTop: "20%",
                            justifyContent: 'center',
                            margin: 10,
                        }}> Design </Text>
                    </View>
                </Draggable>
            </View>
        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

    },

    topSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },

    screenLogo: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: "5%"
    },

    header: {
        paddingTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
});
