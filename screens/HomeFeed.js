import { StatusBar } from 'expo-status-bar';
import Tooltip from "react-native-walkthrough-tooltip";
import React from "react";
import { useCallback, useState } from 'react';
import { Switch, ScrollView, StyleSheet, Text, View, SafeAreaView, Button, Modal, TextInput, navigation, TouchableOpacity, Platform, Pressable } from 'react-native';
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
import { AntDesign } from '@expo/vector-icons';
import RecIntPostEducation from '../posts/recIntPostEducation';
import RecIntPostTravel from '../posts/recIntPostTravel';
import RecConPostAlex from '../posts/recConPostAlex';
import RecConPostElyse from '../posts/recConPostElyse';
import UpdatePostElyse from '../posts/updatePostElyse';
import UpdatePostYousef from '../posts/updatePostYousef';

store.setState('bobmessage', true);
store.setState('eliseMessage', true);
store.setState('romualdMessage', true)
store.setState('benMessage', true)
store.setState('yousefMessage', true)

export default function HomeFeed({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const [isEnabledUpdates, setIsEnabledUpdates] = useState(true);
    const toggleSwitchUpdates = () => setIsEnabledUpdates(previousState => !previousState);

    const [isEnabledInterests, setIsEnabledInterests] = useState(true);
    const toggleSwitchInterests = () => setIsEnabledInterests(previousState => !previousState);

    const [isEnabledConnections, setIsEnabledConnections] = useState(true);
    const toggleSwitchConnections = () => setIsEnabledConnections(previousState => !previousState);


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

    const dataCStoMusic = [
        {
            type: 'Suggested Interest',
            data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
            title: 'Sides',
            data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
            title: 'Drinks',
            data: ['Water', 'Coke', 'Beer'],
        },
        {
            title: 'Desserts',
            data: ['Cheese Cake', 'Ice Cream'],
        },
    ];
    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.topSection}>
                <View style={styles.header}>
                    <View style={styles.screenLogo}>
                        <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 35, paddingRight: 5 }}>Discover</Text>
                        <YellowDot width={20} height={20} />
                    </View>
                    <View style={styles.screenLogo}>
                        <Icon style={{ paddingRight: 15 }} name="ios-notifications-sharp" size={30} ></Icon>
                        <Icon name="ios-settings-sharp" size={30}></Icon>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', height: 5, backgroundColor: 'black', width: '90%', }} />




                <View style={{ alignSelf: 'flex-end', paddingRight: 20, paddingTop: 10 }}>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={{ fontFamily: 'Mont-Heavy', color: 'black', width: "20%", marginRight: 2, alignSelf: 'center', paddingBottom: 10 }} numberOfLines={1}>
                                    Filter Feed </Text>
                                <View style={{ flexDirection: 'column', paddingBottom: 10 }}>
                                    <View style={{ flexDirection: 'row', paddingBottom: 10, width: '100%' }}>
                                        <Switch
                                            style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }], marginRight: 5 }}
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            thumbColor={isEnabledUpdates ? "#f5dd4b" : "#f4f3f4"}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitchUpdates}
                                            value={isEnabledUpdates}
                                        />
                                        <Text style={{ color: 'black', marginRight: 2, alignSelf: 'center' }}> My Network's Updates </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingBottom: 10, width: '100%' }}>
                                        <Switch
                                            style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }], marginRight: 5 }}
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            thumbColor={isEnabledInterests ? "#f5dd4b" : "#f4f3f4"}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitchInterests}
                                            value={isEnabledInterests}
                                        />
                                        <Text style={{ color: 'black', marginRight: 2, alignSelf: 'center' }}> Recommended Interests </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingBottom: 10, width: '100%' }}>
                                        <Switch
                                            style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }], marginRight: 5 }}
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            thumbColor={isEnabledConnections ? "#f5dd4b" : "#f4f3f4"}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitchConnections}
                                            value={isEnabledConnections}
                                        />
                                        <Text style={{ color: 'black', marginRight: 2, alignSelf: 'center' }}> Recommended Connections </Text>
                                    </View>
                                </View>

                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Hide</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.appButtonContainer}>
                        <AntDesign name="filter" size={24} color="black" />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ height: '83%' }}>
                <ScrollView>
                    {isEnabledConnections
                        ? 

                            <RecConPostAlex navigation={navigation} />
                            
                        : <View>
                        </View>
                    }
                    {isEnabledConnections
                        ? <RecConPostElyse navigation={navigation} />
                        : <View>
                        </View>
                    }

                    {isEnabledInterests
                        ? 

                            <RecIntPostEducation />
                            
                        : <View>
                        </View>
                    }

                    {isEnabledInterests
                        ? 
                            <RecIntPostTravel />

                        : <View>
                        </View>
                    }   

                    {isEnabledUpdates
                        ? 

                            <UpdatePostElyse />
                            

           
                        : <View>
                        </View>
                    }

                    {isEnabledUpdates
                        ? 
                            <UpdatePostYousef />

                        
                        : <View>
                        </View>
                    }

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height:"100%"

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
        paddingHorizontal: 35,
        paddingVertical: 20,
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
        alignContent: 'center',
        paddingBottom: 20
    },

    icons: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        paddingBottom: 10
    },

});