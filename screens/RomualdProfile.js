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
import BenRound from '../assets/profile-pics/ben_round.svg';
import RomualdRound from '../assets/profile-pics/romuald_round.svg';
import BobRound from '../assets/profile-pics/bob_round.svg';
import ElyseRound from '../assets/profile-pics/elyse_round.svg';
import YousefRound from '../assets/profile-pics/yousef_round.svg';

store.setState("followTextRomuald", "Follow");
store.setState("followColorRomuald", "#DDDDDD");
store.setState("followButtonRomuald", "#000");

export default function RomualdProfile({ navigation }) {
    const [notifModalVisible, setNotifModalVisible] = React.useState(false);

    const [followTextRomuald, setFollowTextRomuald] = store.useState("followTextRomuald");
    const [followColorRomuald, setFollowColorRomuald] = store.useState("followColorRomuald");
    const [followButtonRomuald, setFollowButtonRomuald] = store.useState("followButtonRomuald");

    const [hciVisible, setHCIVisible] = React.useState(false);
    const [webVisible, setWebVisible] = React.useState(false);
    const [sweVisible, setSWEVisible] = React.useState(false);
    const [econVisible, setEconVisible] = React.useState(false);
    const [assistantVisible, setAssistantVisible] = React.useState(false);
    const [sectionVisible, setSectionVisible] = React.useState(false);


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

    const followUser = () => {
        if (followTextRomuald == 'Follow') {
            setFollowTextRomuald('Unfollow');
            setFollowColorRomuald('#000');
            setFollowButtonRomuald('#fff')
        } else {
            setFollowTextRomuald('Follow');
            setFollowColorRomuald('#DDDDDD');
            setFollowButtonRomuald('#000')
        }
    }

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.topSection}>
                <View style={styles.header}>
                    <View style={styles.screenLogo}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Messages")}
                        >
                            <Icon name="arrow-back-outline" style={{ paddingRight: 5 }} size={28}></Icon>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 28, paddingRight: 5 }}>Romuald Thomas</Text>
                        <YellowDot width={20} height={20} />
                    </View>
                </View>
                <View style={{ alignSelf: 'center', height: 5, backgroundColor: 'black', width: '90%', }} />
            </View>
            <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: '5%', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity
                            onPress={() => setNotifModalVisible(true)}
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
                            onPress={() => followUser()}
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
                                backgroundColor: followColorRomuald
                            }} >
                                <Text style={{
                                    fontFamily: 'Mont-Bold',
                                    color: followButtonRomuald,
                                    fontSize: 15,
                                    textAlign: "center",
                                    paddingTop: '5%',
                                    justifyContent: 'center',
                                    margin: 10,
                                }}>
                                    {followTextRomuald}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '5%', width: '90%', paddingLeft: '8%' }}>
                    <Text style={{ textAlign: 'center' }}>
                        Student interested in the intersection between CS and Econ.
                    </Text>
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
                            <Text style={styles.modalText}>Network</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ marginLeft: 50, paddingTop: '5%', flexDirection: 'row', justifyContent: 'center' }}>
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
                                        onPressOut={() => setNotifModalVisible(!notifModalVisible)}
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? 'rgb(210, 230, 255)'
                                                    : '#DDDDDD',
                                            }]}
                                    >
                                        <ElyseRound width={90} height={'90%'}></ElyseRound>
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
                                    </View>

                                </View>
                            </View>
                        </View>

                        <View style={{ marginLeft: 50, paddingTop: '5%', flexDirection: 'row', justifyContent: 'center' }}>
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
                                        onPressOut={() => setNotifModalVisible(!notifModalVisible)}
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? 'rgb(210, 230, 255)'
                                                    : '#DDDDDD',
                                            }]}
                                    >
                                        <BobRound width={90} height={'90%'}></BobRound>
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

                                    </View>

                                </View>
                            </View>
                        </View>




                    </View>
                </View>
            </Modal>

            {/* View Node Front */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={sectionVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setSectionVisible(!sectionVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setSectionVisible(!sectionVisible)}
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
                            <Text style={styles.modalText}>Section Leader</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> I love introducing students to programming </Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={hciVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setHCIVisible(!hciVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setHCIVisible(!setHCIVisible)}
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
                            <Text style={styles.modalText}>Human-Computer Interaction</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> The intersection between humans technology is a very interesting dynamic that I love to explore! </Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={webVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setWebVisible(!webVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setWebVisible(!webVisible)}
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
                            <Text style={styles.modalText}>Web Design</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> I like to make clean, sleek, and modern interfaces for my users to enjoy! </Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={sweVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setSWEVisible(!sweVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setSWEVisible(!sweVisible)}
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
                            <Text style={styles.modalText}>Software Engineer</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to build cool things </Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={econVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setEconVisible(!econVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setEconVisible(!econVisible)}
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
                            <Text style={styles.modalText}>Economics</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to observe how the world works! </Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={assistantVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setAssistantVisible(!assistantVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setAssistantVisible(!assistantVisible)}
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
                            <Text style={styles.modalText}>Research Assistant</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to test my assumoptions about the world and the things around me! </Text>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* View Node back */}



            <View style={{}}>
                <TouchableOpacity
                    onPress={() => setSWEVisible(true)}
                >
                    <Draggable x={'50%'} y={'100%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 150,
                            height: 150,
                            backgroundColor: '#B479C9'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 20,
                                textAlign: "center",
                                paddingTop: "30%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Software Engineer </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setEconVisible(true)}
                >
                    <Draggable x={'45%'} y={'265%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 120,
                            height: 120,
                            borderRadius: 120 / 2,
                            backgroundColor: '#3BA95B'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 14,
                                textAlign: "center",
                                paddingTop: "40%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Economics </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSectionVisible(true)}
                >
                    <Draggable x={'18%'} y={'280%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 55,
                            height: 55,
                            backgroundColor: '#FF9800'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 8,
                                textAlign: "center",
                                paddingTop: "20%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Section Leader</Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setAssistantVisible(true)}
                >
                    <Draggable x={'15%'} y={'300%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 75,
                            height: 75,
                            backgroundColor: '#6283FA'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 10,
                                textAlign: "center",
                                paddingTop: "20%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Research Assistant </Text>
                        </View>
                    </Draggable >
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setWebVisible(true)}
                >
                    <Draggable x={'40%'} y={'30%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100 / 2,
                            backgroundColor: '#B479C9'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 15,
                                textAlign: "center",
                                paddingTop: "25%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Web Design </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setHCIVisible(true)}
                >
                    <Draggable x={'70%'} y={'30%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100 / 2,
                            backgroundColor: '#B479C9'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 15,
                                textAlign: "center",
                                paddingTop: "35%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> HCI </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
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

    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
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
        width: 350,
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
