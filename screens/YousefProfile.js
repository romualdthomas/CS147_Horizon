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

store.setState("followTextYousef", "Follow");
store.setState("followColorYousef", "#DDDDDD");
store.setState("followButtonYousef", "#000");

export default function YousefProfile({ navigation }) {
    const [notifModalVisible, setNotifModalVisible] = React.useState(false);

    const [teacherVisble, setTeacherVisble] = React.useState(false);
    const [educationVisble, setEducationVisble] = React.useState(false);
    const [researcherVisble, setResearcherVisble] = React.useState(false);
    const [designVisble, setDesignVisble] = React.useState(false);
    const [csVisble, setCSVisble] = React.useState(false);


    const [followTextYousef, setFollowTextYousef] = store.useState("followTextYousef");
    const [followColorYousef, setFollowColorYousef] = store.useState("followColorYousef");
    const [followButtonYousef, setFollowButtonYousef] = store.useState("followButtonYousef");

    const [fontsLoaded] = useFonts({
        'Mont-Bold': require('../assets/fonts/Mont-Trial-Bold.ttf'),
        'Mont-Black': require('../assets/fonts/Mont-Trial-Black.ttf'),
        'Mont-Heavy': require('../assets/fonts/Mont-Trial-Heavy.ttf'),
        'Mont-Light': require('../assets/fonts/Mont-Trial-ExtraLight.ttf'),
        'Mont-Regular': require('../assets/fonts/Mont-Trial-Regular.ttf')
    });

    const followUser = () => {
        if (followTextYousef == 'Follow') {
            setFollowTextYousef('Unfollow');
            setFollowColorYousef('#000');
            setFollowButtonYousef('#fff')
        } else {
            setFollowTextYousef('Follow');
            setFollowColorYousef('#DDDDDD');
            setFollowButtonYousef('#000')
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
                        <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 28, paddingRight: 5 }}>Yousef AbuHashem</Text>
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
                                backgroundColor: followColorYousef
                            }} >
                                <Text style={{
                                    fontFamily: 'Mont-Bold',
                                    color: followButtonYousef,
                                    fontSize: 15,
                                    textAlign: "center",
                                    paddingTop: '5%',
                                    justifyContent: 'center',
                                    margin: 10,
                                }}>
                                    {followTextYousef}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '5%', width: '90%', paddingLeft: '8%' }}>
                    <Text style={{ textAlign: 'center' }}>
                        Student, researcher, educator.
                    </Text>
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
                    visible={teacherVisble}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setTeacherVisble(!teacherVisble);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setTeacherVisble(!teacherVisble)}
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
                                <Text style={styles.modalText}>Teacher</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to interact with students! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={researcherVisble}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setResearcherVisble(!researcherVisble);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setResearcherVisble(!researcherVisble)}
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
                                <Text style={styles.modalText}>Researcher</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to explore the world through questions! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={designVisble}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setDesignVisble(!designVisble);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setDesignVisble(!designVisble)}
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
                                <Text style={styles.modalText}>Design!</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to create new and interesting things for people to interact with! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={educationVisble}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setEducationVisble(!educationVisble);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setEducationVisble(!educationVisble)}
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
                                <Text style={styles.modalText}>Education</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I believe that everyone should have access to a good education! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={csVisble}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setCSVisble(!csVisble);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setCSVisble(!csVisble)}
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
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to code! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>


                {/* View Node back */}


            </View>
            <View style={{}}>
                <TouchableOpacity
                    onPress={() => setResearcherVisble(true)}
                >
                    <Draggable x={'20%'} y={'135%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 150,
                            height: 150,
                            backgroundColor: '#5EAD75'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 20,
                                textAlign: "center",
                                paddingTop: "40%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Researcher </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setEducationVisble(true)}
                >
                    <Draggable x={'50%'} y={'90%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100 / 2,
                            backgroundColor: '#6283FA'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 15,
                                textAlign: "center",
                                paddingTop: "40%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Education </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTeacherVisble(true)}
                >
                    <Draggable x={'22%'} y={'90%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 100,
                            height: 100,
                            backgroundColor: '#6283FA'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 15,
                                textAlign: "center",
                                paddingTop: "40%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Teacher </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setCSVisble(true)}
                >
                    <Draggable x={'12%'} y={'230%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 160,
                            height: 160,
                            backgroundColor: '#B479C9'
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
                    </Draggable >
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setDesignVisble(true)}
                >
                    <Draggable x={'60%'} y={'360%'}
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
                            }}> Design </Text>
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
