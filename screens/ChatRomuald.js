import { StatusBar } from 'expo-status-bar';
import Tooltip from "react-native-walkthrough-tooltip";
import React from "react";
import { useCallback, useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, Button, Modal, TextInput, navigation, TouchableOpacity, Platform, Pressable, KeyboardAvoidingView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Draggable from 'react-native-draggable';
import colors from '../assets/colors/colors';
import store from './store';
import YellowDot from '../assets/components/yellow_dot.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
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
import Wizard from './Wizard.js';
import Profile_Pic from '../assets/components/profile_pic.svg';
import Crown from '../assets/components/crown.svg'
import Romuald from '../assets/profile-pics/romuald.png'

export default function Chat({ navigation }) {
    const [notifModalVisible, setNotifModalVisible] = React.useState(false);
    const [text, onChangeText] = React.useState(null);
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: Romuald,
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

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

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#EB7A4A'
                    }
                }}

                textStyle={{
                    right: {
                        color: '#fff'
                    }
                }}
            />
        )
    }

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <Icon name="ios-send-outline" style={{marginBottom: 5, marginRight: 5, alignItems: 'center'}} size={30}></Icon>
                </View>
            </Send>
        )
    }


    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>

            <View style={styles.topSection}>
                <View style={styles.header}>
                    <View style={styles.screenLogo}>
                        <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        >
                        <Icon name="arrow-back-outline" style={{paddingRight: 5}} size={28}></Icon>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 28, paddingRight: 5 }}>Romuald Thomas</Text>
                        <YellowDot width={20} height={20} />
                    </View>
                </View>
                <View style={{ alignSelf: 'center', height: 5, backgroundColor: 'black', width: '90%', }} />
            </View>
            <View style={{}}>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '5%', width: '90%', paddingLeft: '8%' }}>
                    <Text style={{ textAlign: 'center' }}>
                    Student interested in the intersection between CS and Econ.
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                    renderBubble={renderBubble}
                    alwaysShowSend
                    renderSend={renderSend}
                    scrollToBottom
                    textInputStyle={{
                        height: 80,
                        borderWidth: 2,
                        borderRadius: 20,
                        padding: 10,
                        paddingLeft: 20,
                      
                    }} 
                />
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
    input: {
        height: 50,
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 20,
        width: '90%'
    },
});
