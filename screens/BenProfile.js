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

store.setState("followTextBen", "Follow");
store.setState("followColorBen", "#DDDDDD");
store.setState("followButtonBen", "#000");

export default function BenProfile({ navigation }) {
    const [notifModalVisible, setNotifModalVisible] = React.useState(false);

    const [entreVisible, setEntreVisible] = React.useState(false);
    const [artistVisible, setArtistVisible] = React.useState(false);
    const [scienceVisible, setScienceVisible] = React.useState(false);
    const [designVisible, setDesignVisible] = React.useState(false);
    const [virtualVisible, setVirtualVisible] = React.useState(false);
    const [csVisible, setCSVisible] = React.useState(false);
    const [researchVisible, setResearchVisible] = React.useState(false);

    const [followTextBen, setFollowTextBen] = store.useState("followTextBen");
    const [followColorBen, setFollowColorBen] = store.useState("followColorBen");
    const [followButtonBen, setFollowButtonBen] = store.useState("followButtonBen");

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
        if (followTextBen == 'Follow') {
            setFollowTextBen('Unfollow');
            setFollowColorBen('#000');
            setFollowButtonBen('#fff')
        } else {
            setFollowTextBen('Follow');
            setFollowColorBen('#DDDDDD');
            setFollowButtonBen('#000')
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
                                backgroundColor: followColorBen
                            }} >
                                <Text style={{
                                    fontFamily: 'Mont-Bold',
                                    color: followButtonBen,
                                    fontSize: 15,
                                    textAlign: "center",
                                    paddingTop: '5%',
                                    justifyContent: 'center',
                                    margin: 10,
                                }}>
                                    {followTextBen}
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
                    visible={entreVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setEntreVisible(!entreVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setEntreVisible(!entreVisible)}
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
                                <Text style={styles.modalText}>Entrepreneurship</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love exploring new ideas and solving interesting problems with a group of talented and likemind individuals! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={scienceVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setScienceVisible(!scienceVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setScienceVisible(!scienceVisible)}
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
                                <Text style={styles.modalText}>Environmental Science</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I care deeply about the preservation of our Earth! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={artistVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setArtistVisible(!artistVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setArtistVisible(!artistVisible)}
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
                                <Text style={styles.modalText}>Artist</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love the creative aspect of art! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={designVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setDesignVisible(!designVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setDesignVisible(!designVisible)}
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
                                <Text style={styles.modalText}>Design</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> Design allows me to combine my interest in technology and art! </Text>
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
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love programming! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={virtualVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setVirtualVisible(!virtualVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setVirtualVisible(!virtualVisible)}
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
                                <Text style={styles.modalText}>Virtual Reality</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> Exploring the world through a new lens is what interests me the most about virtual reality! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={researchVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setResearchVisible(!researchVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setResearchVisible(!researchVisible)}
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
                                <Text style={styles.modalText}>Research</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to explore thew world by asking questions and tesing said questions! </Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* View Node back */}







            </View>
            <View style={{}}>
                <TouchableOpacity
                    onPress={() => setCSVisible(true)}
                >
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setEntreVisible(true)}
                >
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setScienceVisible(true)}
                >
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setResearchVisible(true)}
                >
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setArtistVisible(true)}
                >
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setVirtualVisible(true)}
                >
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setDesignVisible(true)}
                >
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
    }
});
