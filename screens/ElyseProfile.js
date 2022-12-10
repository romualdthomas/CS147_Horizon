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

store.setState("followTextElyse", "Follow");
store.setState("followColorElyse", "#DDDDDD");
store.setState("followButtonElyse", "#000");

export default function ElyseProfile({ navigation }) {
    const [notifModalVisible, setNotifModalVisible] = React.useState(false);

    const [followTextElyse, setFollowTextElyse] = store.useState("followTextElyse");
    const [followColorElyse, setFollowColorElyse] = store.useState("followColorElyse");
    const [followButtonElyse, setFollowButtonElyse] = store.useState("followButtonElyse");


    const [sectionVisible, setSectionVisible] = React.useState(false);
    const [teachingVisible, setTeachingVisible] = React.useState(false);
    const [tutorVisible, setTutorVisible] = React.useState(false);
    const [assitantVisible, setAssitantVisible] = React.useState(false);
    const [csVisible, setCSVisible] = React.useState(false);
    const [diversityVisible, setDiverityVisible] = React.useState(false);
    const [catsVisible, setCatsVisible] = React.useState(false);
    const [campingVisible, setCampingVisible] = React.useState(false);
    const [cookingVisible, setCookingVisible] = React.useState(false);
    const [managerVisible, setManagerVisible] = React.useState(false);



    const [fontsLoaded] = useFonts({
        'Mont-Bold': require('../assets/fonts/Mont-Trial-Bold.ttf'),
        'Mont-Black': require('../assets/fonts/Mont-Trial-Black.ttf'),
        'Mont-Heavy': require('../assets/fonts/Mont-Trial-Heavy.ttf'),
        'Mont-Light': require('../assets/fonts/Mont-Trial-ExtraLight.ttf'),
        'Mont-Regular': require('../assets/fonts/Mont-Trial-Regular.ttf')
    });

    const followUser = () => {
        if (followTextElyse == 'Follow') {
            setFollowTextElyse('Unfollow');
            setFollowColorElyse('#000');
            setFollowButtonElyse('#fff')
        } else {
            setFollowTextElyse('Follow');
            setFollowColorElyse('#DDDDDD');
            setFollowButtonElyse('#000')
        }
    }

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
                            onPress={() => navigation.navigate("Messages")}
                        >
                            <Icon name="arrow-back-outline" style={{ paddingRight: 5 }} size={28}></Icon>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 28, paddingRight: 5 }}>Elyse Cornwall</Text>
                        <Crown width={20} height={20} />
                    </View>
                </View>
                <View style={{ alignSelf: 'center', height: 5, backgroundColor: 'black', width: '90%', }} />
            </View>
            <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: '5%', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity
                            onPress={() => setNotifModalVisible(!notifModalVisible)}
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
                                backgroundColor: followColorElyse
                            }} >
                                <Text style={{
                                    fontFamily: 'Mont-Bold',
                                    color: followButtonElyse,
                                    fontSize: 15,
                                    textAlign: "center",
                                    paddingTop: '5%',
                                    justifyContent: 'center',
                                    margin: 10,
                                }}>
                                    {followTextElyse}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '5%', width: '90%', paddingLeft: '8%' }}>
                    <Text style={{ textAlign: 'center' }}>
                        Teacher and student, passionate about diverse mentorship in STEM.
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
                                        onPress={() => navigation.navigate("YousefProfile")}
                                        onPressOut={() => setNotifModalVisible(!notifModalVisible)}
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? 'rgb(210, 230, 255)'
                                                    : '#DDDDDD',
                                            }]}
                                    >
                                        <YousefRound width={90} height={'90%'}></YousefRound>
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
                                        onPress={() => navigation.navigate("BenProfile")}
                                        onPressOut={() => setNotifModalVisible(!notifModalVisible)}
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? 'rgb(210, 230, 255)'
                                                    : '#DDDDDD',
                                            }]}
                                    >
                                        <BenRound width={90} height={'90%'}></BenRound>
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
                                        onPress={() => navigation.navigate("RomualdProfile")}
                                        onPressOut={() => setNotifModalVisible(!notifModalVisible)}
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? 'rgb(210, 230, 255)'
                                                    : '#DDDDDD',
                                            }]}
                                    >
                                        <RomualdRound width={90} height={'90%'}></RomualdRound>
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
                visible={teachingVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setTeachingVisible(!teachingVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setTeachingVisible(!teachingVisible)}
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
                            <Text style={styles.modalText}>Teaching Assistant</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> There is something about teaching that gets me really excited about my work!</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={assitantVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setAssitantVisible(!assitantVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setAssitantVisible(!assitantVisible)}
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
                            <Text style={styles.modalText}>Elementary School Classroom Assistant</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> I love interacting with the little ones!</Text>
                        </View>
                    </View>
                </View>
            </Modal>


            <Modal
                animationType="slide"
                transparent={true}
                visible={tutorVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setTutorVisible(!tutorVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setTutorVisible(!tutorVisible)}
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
                            <Text style={styles.modalText}>Tutor</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> Teaching and working with students is my passion!</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={csVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setCSVisible(!csVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setCSVisible(!csVisible)}
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
                            <Text style={styles.modalText}>Computer Science</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> Coding is really fun!</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={diversityVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setDiverityVisible(!diversityVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setDiverityVisible(!diversityVisible)}
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
                            <Text style={styles.modalText}>Diveristy and Inclusion</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> It is important to me that anyone regardless of their background is represented!</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={campingVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setCampingVisible(!campingVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setCampingVisible(!campingVisible)}
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
                            <Text style={styles.modalText}>Camping</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> The wilderness is where I find peace!</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={catsVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setCatsVisible(!catsVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setCatsVisible(!catsVisible)}
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
                            <Text style={styles.modalText}>Cat</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> I have a cat named Milo!</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={cookingVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setCookingVisible(!cookingVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setCookingVisible(!cookingVisible)}
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
                            <Text style={styles.modalText}>Cooking</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to cook for others!</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={managerVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setManagerVisible(!managerVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewNotif}>
                        <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setManagerVisible(!managerVisible)}
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
                            <Text style={styles.modalText}>Co-op Kitchen Manager</Text>
                            <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                        </View>
                        <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: '20', textAlign: 'center' }}> Cooking for groups is a fun activity!</Text>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* View Nodes Back */}

            <View style={{}}>
                <TouchableOpacity
                    onPress={() => setSectionVisible(true)}
                >
                    <Draggable x={'11%'} y={'25%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 120,
                            height: 120,
                            backgroundColor: '#EB7A4A'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 15,
                                textAlign: "center",
                                paddingTop: "35%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Section Leader </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setCSVisible(true)}
                >
                    <Draggable x={'15%'} y={'170%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 150,
                            height: 150,
                            borderRadius: 150 / 2,
                            backgroundColor: '#EB7A4A'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 20,
                                textAlign: "center",
                                paddingTop: "30%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Computer Science</Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setAssitantVisible(true)}
                >
                    <Draggable x={'33%'} y={'200%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 80,
                            height: 80,
                            backgroundColor: '#EB7A4A'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 10,
                                textAlign: "center",
                                paddingTop: "10%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Elementary School Classroom assistant</Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTutorVisible(true)}
                >
                    <Draggable x={'11%'} y={'200%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 80,
                            height: 80,
                            backgroundColor: '#EB7A4A'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 14,
                                textAlign: "center",
                                paddingTop: "30%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Tutor </Text>
                        </View>
                    </Draggable >
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTeachingVisible(true)}
                >
                    <Draggable x={'55%'} y={'20%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 160,
                            height: 160,
                            backgroundColor: '#EB7A4A'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 15,
                                textAlign: "center",
                                paddingTop: "40%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Teaching Assistant </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setDiverityVisible(true)}
                >
                    <Draggable x={'60%'} y={'280%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 90,
                            height: 90,
                            borderRadius: 90 / 2,
                            backgroundColor: '#DA6970'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 10,
                                textAlign: "center",
                                paddingTop: "30%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Diversity and Inclusion </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setCampingVisible(true)}
                >
                    <Draggable x={'55%'} y={'620%'}
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
                                paddingTop: "30%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Camping </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setCatsVisible(true)}
                >
                    <Draggable x={'35%'} y={'485%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 90,
                            height: 90,
                            borderRadius: 90 / 2,
                            backgroundColor: '#3BA95B'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 15,
                                textAlign: "center",
                                paddingTop: "30%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Cats </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setCookingVisible(true)}
                >
                <Draggable x={'65%'} y={'350%'}
                    disabled={true}
                >
                    <View style={{
                        width: 120,
                        height: 120,
                        borderRadius: 120 / 2,
                        backgroundColor: '#FF9800'
                    }} >
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 15,
                            textAlign: "center",
                            paddingTop: "30%",
                            justifyContent: 'center',
                            margin: 10,
                        }}> Cooking </Text>
                    </View>
                </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setManagerVisible(true)}
                >
                <Draggable x={'80%'} y={'570%'}
                    disabled={true}
                >
                    <View style={{
                        width: 60,
                        height: 60,
                        backgroundColor: '#FF9800'
                    }} >
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 8,
                            textAlign: "center",
                            paddingTop: "10%",
                            justifyContent: 'center',
                            margin: 10,
                        }}> Co-op Kitchen Manager </Text>
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
        height: 520,
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
