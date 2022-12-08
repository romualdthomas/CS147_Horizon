import { StatusBar } from 'expo-status-bar';
import Tooltip from "react-native-walkthrough-tooltip";
import React from "react";
import { useCallback, useState } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, Button, Modal, TextInput, navigation, TouchableOpacity, Platform, Pressable, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Draggable from 'react-native-draggable';
import colors from '../assets/colors/colors';
import store from './store';
import YellowDot from '../assets/components/yellow_dot.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import { GiftedChat } from 'react-native-gifted-chat'
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

export default function Messages({ navigation }) {
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

    const bobMessage = () => {
        return (
            <View style={{ paddingTop: '5%', flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{
                    width: 330,
                    height: 100,
                    borderRadius: '25%',
                    backgroundColor: '#DDDDDD',
                    borderWidth: 3
                }} >
                    <View style={{ paddingTop: '2%', paddingLeft: '20%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: 220 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("BobSurferProfile")}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#DDDDDD',
                                }]}
                        >
                            <Profile_Pic width={90} height={'90%'}></Profile_Pic>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <Text style={{
                                            fontWeight: '900',
                                            fontSize: 12,


                                            justifyContent: 'center',
                                        }}>
                                            Bob Surfer
                                </Text>
                                    </View>
                                    <View>

                                        <Crown width={45} height={'45%'} />


                                    </View>

                                </View>
                                <View>
                                    <Text style={{

                                        fontSize: 12,


                                        justifyContent: 'center',
                                    }}>
                                        Professional surfer, looking to explore the world by surfing it!
                            </Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 10, }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("ChatBob")}
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? 'rgb(210, 230, 255)'
                                                : '#DDDDDD',
                                        }]}
                                >
                                    <Icon name="ios-chatbox-outline" size={25}></Icon>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </View>
            </View>
        )
    }

    const elyseMessage = () => {
        return (
            <View style={{ paddingTop: '5%', flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{
                    width: 330,
                    height: 100,
                    borderRadius: '25%',
                    backgroundColor: '#DDDDDD',
                    borderWidth: 3
                }} >
                    <View style={{ paddingTop: '2%', paddingLeft: '20%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: 220 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ElyseProfile")}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#DDDDDD',
                                }]}
                        >
                            <Profile_Pic width={90} height={'90%'}></Profile_Pic>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <Text style={{
                                            fontWeight: '900',
                                            fontSize: 12,


                                            justifyContent: 'center',
                                        }}>
                                            Elyse Cornwall
                                        </Text>
                                    </View>
                                    <View>

                                        <Crown width={45} height={'45%'} />


                                    </View>

                                </View>
                                <View>
                                    <Text style={{

                                        fontSize: 12,


                                        justifyContent: 'center',
                                    }}>
                                        Teacher and student, passionate about diverse mentorship in STEM.
                                    </Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 10, }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("ChatElyse")}
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? 'rgb(210, 230, 255)'
                                                : '#DDDDDD',
                                        }]}
                                >
                                    <Icon name="ios-chatbox-outline" size={25}></Icon>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </View>
            </View>
        )
    }

    const romualdMessage = () => {
        return (
            <View style={{ paddingTop: '5%', flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{
                    width: 330,
                    height: 100,
                    borderRadius: '25%',
                    backgroundColor: '#DDDDDD',
                    borderWidth: 3
                }} >
                    <View style={{ paddingTop: '2%', paddingLeft: '20%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: 220 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("RomualdProfile")}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#DDDDDD',
                                }]}
                        >
                            <Profile_Pic width={90} height={'90%'}></Profile_Pic>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View>
                                        <Text style={{
                                            fontWeight: '900',
                                            fontSize: 12,


                                            justifyContent: 'center',
                                        }}>
                                            Romuald Thomas
                                            </Text>
                                    </View>
                                </View>
                                <View style={{ paddingTop: '6%' }}>
                                    <Text style={{

                                        fontSize: 12,


                                        justifyContent: 'center',
                                    }}>
                                        Student interested in the intersection between CS and Econ.
                                        </Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 10, }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("ChatRomuald")}
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? 'rgb(210, 230, 255)'
                                                : '#DDDDDD',
                                        }]}
                                >
                                    <Icon name="ios-chatbox-outline" size={25}></Icon>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </View>
            </View>
        )
    }

    const benMessage = () => {
        return (
            <View style={{ paddingTop: '5%', flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{
                    width: 330,
                    height: 100,
                    borderRadius: '25%',
                    backgroundColor: '#DDDDDD',
                    borderWidth: 3
                }} >
                    <View style={{ paddingTop: '2%', paddingLeft: '20%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: 220 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("BenProfile")}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#DDDDDD',
                                }]}
                        >
                            <Profile_Pic width={90} height={'90%'}></Profile_Pic>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <Text style={{
                                            fontWeight: '900',
                                            fontSize: 12,


                                            justifyContent: 'center',
                                        }}>
                                            Ben Liao
                                            </Text>
                                    </View>
                                </View>
                                <View style={{ paddingTop: '6%' }}>
                                    <Text style={{

                                        fontSize: 12,


                                        justifyContent: 'center',
                                    }}>
                                        Computer Scientist and Designer interested in large-scale ideas.
                                        </Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 10, }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("ChatBen")}
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? 'rgb(210, 230, 255)'
                                                : '#DDDDDD',
                                        }]}
                                >
                                    <Icon name="ios-chatbox-outline" size={25}></Icon>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </View>
            </View>
        )
    }

    const yousefMessage = () => {
        return (
            <View style={{ paddingTop: '5%', flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{
                    width: 330,
                    height: 100,
                    borderRadius: '25%',
                    backgroundColor: '#DDDDDD',
                    borderWidth: 3
                }} >
                    <View style={{ paddingTop: '2%', paddingLeft: '20%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: 220 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("YousefProfile")}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#DDDDDD',
                                }]}
                        >
                            <Profile_Pic width={90} height={'90%'}></Profile_Pic>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <Text style={{
                                            fontWeight: '900',
                                            fontSize: 12,


                                            justifyContent: 'center',
                                        }}>
                                            Yousef AbuHashem
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ paddingTop: '6%' }}>
                                    <Text style={{

                                        fontSize: 12,


                                        justifyContent: 'center',
                                    }}>
                                        Student, researcher, educator.
                                        </Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 10, }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("ChatYousef")}
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? 'rgb(210, 230, 255)'
                                                : '#DDDDDD',
                                        }]}
                                >
                                    <Icon name="ios-chatbox-outline" size={25}></Icon>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>

            <View style={styles.topSection}>
                <View style={styles.header}>
                    <View style={styles.screenLogo}>
                        <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 28, paddingRight: 5 }}>Messages</Text>
                        <YellowDot width={20} height={20} />
                    </View>
                    <View style={styles.screenLogo}>
                        <TouchableOpacity
                            onPress={() => setNotifModalVisible(true)}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#fff',
                                }]}
                        >
                            <Icon name="ios-notifications-sharp" size={28} ></Icon>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ alignSelf: 'center', height: 5, backgroundColor: 'black', width: '90%', }} />
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: '5%' }}>
                    <View>
                        <TouchableOpacity
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#fff',
                                }]}
                        >
                            <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 20 }}>All Following</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#fff',
                                }]}
                        >
                            <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 20 }}>Mentors</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={notifModalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setNotifModalVisible(!notifModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setNotifModalVisible(!notifModalVisible)}
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? 'rgb(210, 230, 255)'
                                                : '#fff',
                                        }]}
                                >
                                    <Icon name="ios-close-circle-outline" size={20}></Icon>
                                </TouchableOpacity>

                            </View>
                            <View style={{ paddingBottom: 10, flexDirection: 'column', }}>
                                <Text style={styles.modalText}>Notifications</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: '10%', }}>
                                <View style={{
                                    width: 280,
                                    height: 80,
                                    borderRadius: '25%',
                                    backgroundColor: '#DDDDDD',
                                    borderWidth: 3
                                }} >
                                    <View style={{ paddingTop: '4%', paddingLeft: '20%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: 220 }}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("ChatBen")}
                                            onPressOut={() => setNotifModalVisible(!notifModalVisible)}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#DDDDDD',
                                                }]}
                                        >
                                            <Profile_Pic width={90} height={'90%'}></Profile_Pic>
                                        </TouchableOpacity>

                                        <Text style={{
                                            fontFamily: 'Mont-Regular',
                                            fontSize: 12,


                                            justifyContent: 'center',
                                            margin: 10,
                                        }}>
                                            Ben Liao has started following you -- See his profile now!
                                            </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                {bobMessage()}
                {elyseMessage()}
                {romualdMessage()}
                {benMessage()}
                {yousefMessage()}
            </ScrollView>
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

    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: 'Mont-Heavy',
        fontSize: 20,
        paddingBottom: 10
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    modalViewNotif: {
        height: 450,
        margin: 40,
        marginHorizontal: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

});
