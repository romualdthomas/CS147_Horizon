
import { StatusBar } from 'expo-status-bar';
import Tooltip from "react-native-walkthrough-tooltip";
import React from "react";
import { useCallback, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal, TextInput, navigation, TouchableOpacity, Platform, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Draggable from 'react-native-draggable';
import colors from '../assets/colors/colors';
import store from './store';
import YellowDot from '../assets/components/yellow_dot.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import Red from '../assets/components/red.svg';
import Yellow from '../assets/components/yellow.svg';
import Orange from '../assets/components/orange.svg';
import Blue from '../assets/components/blue.svg';
import Green from '../assets/components/green.svg';
import Purple from '../assets/components/purple.svg';

SplashScreen.preventAutoHideAsync();

const userExperience = store.getState('textValue');

const userInterest = store.getState('newInterest');


var showInterest = false;
var showExperience = false;


store.setState("interestColor", "");
store.setState("experienceColor", "");




export default function ProfileWelcomeScreen({ navigation }) {
    const [text, onChangeText] = React.useState(null);
    const [bioValue, setBioValue] = React.useState("");

    const [newInterestValue, setNewInterestValue] = React.useState("");
    const [newExperienceValue, setNewExperienceValue] = React.useState("");

    const [interestColor, setInterestColor] = React.useState("");
    const [interestModalVisible, setInterestModalVisible] = useState(false);

    const [experienceColor, setExperienceColor] = React.useState("");
    const [experienceModalVisible, setExperienceModalVisible] = React.useState(false);

    const [fontsLoaded] = useFonts({
        'Mont-Bold': require('../assets/fonts/Mont-Trial-Bold.ttf'),
        'Mont-Black': require('../assets/fonts/Mont-Trial-Black.ttf'),
        'Mont-Heavy': require('../assets/fonts/Mont-Trial-Heavy.ttf'),
        'Mont-Light': require('../assets/fonts/Mont-Trial-ExtraLight.ttf'),
        'Mont-Regular': require('../assets/fonts/Mont-Trial-Regular.ttf')
    });

    const removeInterestModal = () => {
        setInterestModalVisible(!interestModalVisible);
        showInterest = true;
    }

    const removeExperienceModal = () => {
        setExperienceModalVisible(!experienceModalVisible);
        showExperience = true;
    }


    const experienceNode = () => {
        return (
            <Draggable x={150} y={100}>
                <View style={{
                    width: 150,
                    height: 150,
                    backgroundColor: "#F0B749"
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: 20,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperienceValue} </Text>
                </View>
            </Draggable>
        )
    }

    const interestNode = () => {
        return (
            <Draggable x={70} y={300}>
                <View style={{
                    width: 150,
                    height: 150,
                    borderRadius: 150 / 2,
                    backgroundColor: '#3BA95B'
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: 20,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterestValue} </Text>
                </View>
            </Draggable>
        );
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
        <>
            <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
                <View style={styles.topSection}>
                    <View style={styles.header}>
                        <View style={styles.screenLogo}>
                            <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 35, paddingRight: 5 }}>Profile</Text>
                            <YellowDot width={20} height={20} />
                        </View>
                        <View style={styles.screenLogo}>
                            <Icon style={{ paddingRight: 15 }} name="ios-notifications-sharp" size={30} ></Icon>
                            <Icon name="ios-settings-sharp" size={30}></Icon>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', height: 5, backgroundColor: 'black', width: '90%', }} />
                </View>
                <View style={{ paddingTop: '7%', paddingLeft: '20%' }}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(val) => setBioValue(val)}
                        value={bioValue}
                        placeholder='              Place your bio here'
                    />
                </View>
                <View style={styles.screen}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={interestModalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setExperienceModalVisible(!interestModalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>New Interest</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(val) => setNewInterestValue(val)}
                                    value={newInterestValue}
                                    placeholder='Add another interest'

                                />
                                <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setInterestModalVisible('#F0B749')}
                                        >
                                            <Orange width={50} height={50} />
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setInterestColor('#F0B749')}
                                        >
                                            <Yellow width={50} height={50} />
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setInterestColor('#DA6970')}
                                        >
                                            <Red width={50} height={50} />
                                        </Pressable>
                                    </View>

                                </View>
                                <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setInterestColor('#B479C9')}
                                        >
                                            <Purple width={50} height={50} />
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setInterestColor('#3BA95B')}
                                        >
                                            <Green width={50} height={50} />
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setInterestColor('#6283FA')}
                                        >
                                            <Blue width={50} height={50} />
                                        </Pressable>
                                    </View>

                                </View>





                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => removeInterestModal()}
                                >
                                    <Text style={styles.textStyle}>Create</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>




                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={experienceModalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setExperienceModalVisible(!experienceModalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>New Experience</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(val) => setNewExperienceValue(val)}
                                    value={newExperienceValue}
                                    placeholder='Add another interest'

                                />
                                <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setExperienceColor('#F0B749')}
                                        >
                                            <Orange width={50} height={50} />
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setExperienceColor('#F0B749')}
                                        >
                                            <Yellow width={50} height={50} />
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setExperienceColor('#DA6970')}
                                        >
                                            <Red width={50} height={50} />
                                        </Pressable>
                                    </View>

                                </View>
                                <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setExperienceColor('#B479C9')}
                                        >
                                            <Purple width={50} height={50} />
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setExperienceColor('#3BA95B')}
                                        >
                                            <Green width={50} height={50} />
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable
                                            style={{}}
                                            onPress={() => setExperienceColor('#6283FA')}
                                        >
                                            <Blue width={50} height={50} />
                                        </Pressable>
                                    </View>

                                </View>





                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => removeExperienceModal()}
                                >
                                    <Text style={styles.textStyle}>Create</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>






                    <View style={styles.body}>

                        <Draggable x={60} y={50}>
                            <View style={{
                                width: 150,
                                height: 150,
                                borderRadius: 150 / 2,
                                backgroundColor: '#FF9800'
                            }} >
                                <Text style={{
                                    fontFamily: 'Mont-Bold',
                                    fontSize: 20,
                                    textAlign: "center",
                                    paddingTop: "40%",
                                    justifyContent: 'center',
                                    margin: 10,
                                }}> {userInterest.value} </Text>
                            </View>
                        </Draggable>
                        <Draggable x={200} y={300}>
                            <View style={{
                                width: 150,
                                height: 150,
                                backgroundColor: '#B479C9'
                            }} >
                                <Text style={{
                                    fontFamily: 'Mont-Bold',
                                    fontSize: 20,
                                    textAlign: "center",
                                    paddingTop: "40%",
                                    justifyContent: 'center',
                                    margin: 10,
                                }}> {userExperience.value} </Text>
                            </View>
                        </Draggable>
                        <Draggable x={30} y={490}
                            onShortPressRelease={() => setInterestModalVisible(true)}
                        >
                            <View style={styles.experienceButton}>
                                <Icon name="add-circle-sharp" size={50}></Icon>
                            </View>
                            
                        </Draggable>
                        {showInterest && interestNode()}
                        {showExperience && experienceNode()}
                        <Draggable x={30} y={430}
                            onShortPressRelease={() => setExperienceModalVisible(true)}
                        >
                            <View style={styles.experienceButton}>
                                <Icon name="ios-add-outline" size={50}></Icon>
                            </View>
                        </Draggable>
                    </View>

                </View>

            </SafeAreaView>
            <StatusBar style="auto" />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },

    textStyle: {
        color: "white",
        fontFamily: 'Mont-Bold',
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: 'Mont-Heavy',
        paddingBottom: 10
    },

    buttonClose: {
        backgroundColor: "#434343",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    modalView: {
        // height: 400,
        margin: 20,
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

    screen: {

    },

    experienceButton: {

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

    topSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },

    icons: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        paddingBottom: 10
    }
});



{/* <Draggable x={200} y={300} renderSize={80} renderColor='#F2BA4C' isCircle renderText='Travel'/> */ }


<Draggable x={200} y={300}>
    <View style={{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: '#FF9800'
    }} >
        <Text style={{
            fontFamily: 'Mont-Black',
            textAlign: "center",
            paddingTop: "40%",
            justifyContent: 'center',
            margin: 10,
        }}> Circle Shape </Text>
    </View>
</Draggable>