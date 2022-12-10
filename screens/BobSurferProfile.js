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

store.setState("followTextBob", "Follow");
store.setState("followColorBob", "#DDDDDD");
store.setState("followButtonBob", "#000");

export default function BobSurferProfile({ navigation }) {
    const [notifModalVisible, setNotifModalVisible] = React.useState(false);

    const [surfingModalVisible, setSurfingModalVisible] = React.useState(false);
    const [swimVisible, setSwimVisible] = React.useState(false);
    const [hotelsVisible, setHotelsVisible] = React.useState(false);
    const [lifeGuardVisible, setLifeGuardVisible] = React.useState(false);
    const [windSurfingVisible, setWindSurfingVisible] = React.useState(false);
    const [travelVisible, setTravelVisible] = React.useState(false);

    const [followTextBob, setFollowTextBob] = store.useState("followTextBob");
    const [followColorBob, setFollowColorBob] = store.useState("followColorBob");
    const [followButtonBob, setFollowButtonBob] = store.useState("followButtonBob");

    const [fontsLoaded] = useFonts({
        'Mont-Bold': require('../assets/fonts/Mont-Trial-Bold.ttf'),
        'Mont-Black': require('../assets/fonts/Mont-Trial-Black.ttf'),
        'Mont-Heavy': require('../assets/fonts/Mont-Trial-Heavy.ttf'),
        'Mont-Light': require('../assets/fonts/Mont-Trial-ExtraLight.ttf'),
        'Mont-Regular': require('../assets/fonts/Mont-Trial-Regular.ttf')
    });

    const followUser = () => {
        if (followTextBob == 'Follow') {
            setFollowTextBob('Unfollow');
            setFollowColorBob('#000');
            setFollowButtonBob('#fff')
        } else {
            setFollowTextBob('Follow');
            setFollowColorBob('#DDDDDD');
            setFollowButtonBob('#000')
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
                        <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 28, paddingRight: 5 }}>Bob</Text>
                        <Crown width={20} height={20} />
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
                                backgroundColor: followColorBob
                            }} >
                                <Text style={{
                                    fontFamily: 'Mont-Bold',
                                    color: followButtonBob,
                                    fontSize: 15,
                                    textAlign: "center",
                                    paddingTop: '5%',
                                    justifyContent: 'center',
                                    margin: 10,
                                }}>
                                    {followTextBob}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* View Nodes */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={surfingModalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setSurfingModalVisible(!surfingModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setSurfingModalVisible(!surfingModalVisible)}
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
                                <Text style={styles.modalText}>Surfing</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love the waves and the ocean!</Text>
                            </View>
                        </View>
                    </View>
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={swimVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setSwimVisible(!swimVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setSwimVisible(!swimVisible)}
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
                                <Text style={styles.modalText}>Swim Instructor</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to interact with my students and teach them on of the essential skills in like</Text>
                            </View>
                        </View>
                    </View>
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={lifeGuardVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setLifeGuardVisible(!lifeGuardVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setLifeGuardVisible(!lifeGuardVisible)}
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
                                <Text style={styles.modalText}>LifeGuard</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love saving lives!</Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={windSurfingVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setWindSurfingVisible(!windSurfingVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setWindSurfingVisible(!windSurfingVisible)}
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
                                <Text style={styles.modalText}>WindSurfing</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> The Ocean is my calling!</Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={travelVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setTravelVisible(!travelVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setTravelVisible(!travelVisible)}
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
                                <Text style={styles.modalText}>Travel</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> Exploring the world is one of my favorite things to do!</Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={hotelsVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setHotelsVisible(!hotelsVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalViewNotif}>
                            <View style={{ paddingLeft: '92%', paddingBottom: '5%' }}>
                                <TouchableOpacity
                                    onPress={() => setHotelsVisible(!hotelsVisible)}
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
                                <Text style={styles.modalText}>Luxury Hotels</Text>
                                <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                            </View>
                            <View style={{ paddingTop: 55, justifyContent: 'center', alignItems: "center" }}>
                                <Text style={{ fontSize: '20', textAlign: 'center' }}> I love to enjoy the finer things in life!</Text>
                            </View>
                        </View>
                    </View>
                </Modal>















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
                        </View>
                    </View>
                </Modal>








                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '5%', width: '90%', paddingLeft: '8%' }}>
                    <Text style={{ textAlign: 'center' }}>
                        Professional surfer, looking to explore the world by surfing it!
                    </Text>
                </View>
            </View>
            <View style={{}}>
                <TouchableOpacity
                    onPress={() => setSurfingModalVisible(true)}
                >
                    <Draggable x={'11%'} y={'25%'}

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
                                paddingTop: "40%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Surfing </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setTravelVisible(true)}
                >
                    <Draggable x={'8%'} y={'180%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 150,
                            height: 150,
                            borderRadius: 150 / 2,
                            backgroundColor: '#6283FA'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 20,
                                textAlign: "center",
                                paddingTop: "40%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Travel </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSwimVisible(true)}
                >
                    <Draggable x={'65%'} y={'25%'}
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
                                paddingTop: "40%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Swim Instructor </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setLifeGuardVisible(true)}
                >
                    <Draggable x={'65%'} y={'140%'}
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
                                paddingTop: "40%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> LifeGuard </Text>
                        </View>
                    </Draggable >
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setWindSurfingVisible(true)}
                >
                    <Draggable x={'45%'} y={'200%'}
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
                                fontSize: 10,
                                textAlign: "center",
                                paddingTop: "40%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> WindSurfing </Text>
                        </View>
                    </Draggable>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setHotelsVisible(true)}
                >
                    <Draggable x={'60%'} y={'420%'}
                        disabled={true}
                    >
                        <View style={{
                            width: 75,
                            height: 75,
                            borderRadius: 75 / 2,
                            backgroundColor: '#B479C9'
                        }} >
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 10,
                                textAlign: "center",
                                paddingTop: "30%",
                                justifyContent: 'center',
                                margin: 10,
                            }}> Luxury Hotels </Text>
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
