import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useCallback, useState } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, Image, Pressable, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Shapes from '../assets/components/shapes.svg';
import store from '../screens/store';
import { AntDesign } from '@expo/vector-icons';



SplashScreen.preventAutoHideAsync();


const RecConPostAlex = () => {
    const [modalVisible, setModalVisible] = useState(false);

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







        <View style={styles.container}>
            <View>
                <Text style={{ fontFamily: 'Mont-Heavy', fontSize: '17%', paddingLeft: '2%', paddingBottom: '2%' }}>
                    Recommended Connection Alex
          </Text>
            </View>
            <View style={{ paddingLeft: '6%' }}>
                <View style={{ flexDirection: "row", alignContent: 'center', alignItems: 'center' }}>
                    <Icon style={{ paddingRight: 5, color: 'black' }} name="heart" size={"20%"} ></Icon>
                    <Text style={{ color: 'black', width: "20%", marginRight: 2 }} numberOfLines={1}> blala </Text>
                </View>
                <View style={{ flexDirection: "row", alignContent: 'center', alignItems: 'center' }}>
                    <Icon style={{ paddingRight: 5 }} name="heart" size={"20%"} ></Icon>
                    <Text style={{ color: 'black', width: "20%", marginRight: 2 }} numberOfLines={1}> blala </Text>
                </View>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image
                    source={require('../assets/favicon.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.appButton}>

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
                            <Text style={{ fontFamily: 'Mont-Heavy', fontSize: '17%', paddingLeft: '2%', paddingBottom: '2%', alignSelf: 'center' }}>
                                Rec. Interest Name</Text>
                            <View style={{ height: 2, backgroundColor: 'green', width: 200, marginBottom: 15 }} />
                            <Text style={styles.descriptionTitle}> Description </Text>
                            <Text style={styles.description}> LOREMMMMMM IPSUMMMMMM ffsdfasdffsef sfsdvsdfw svsdft svs sisd nsierj sdjfsij sdfnwos.m posekfslmsiroj mnsa </Text>
                            <Text style={styles.descriptionTitle}> Common Likes </Text>
                            <Text style={styles.description}> Here is what other users like about tour guiding: </Text>
                            <View style={{ flexDirection: "row", alignContent: 'center', alignItems: 'center' }}>
                                <AntDesign style={{ paddingRight: 5 }} name="hearto" size={"20%"} ></AntDesign>
                                <Text style={{ color: 'black', width: "20%", marginRight: 2 }} numberOfLines={1}> blala </Text>
                            </View>

                            <View style={{ flexDirection: "row", alignContent: 'center', alignItems: 'center' }}>
                                <AntDesign style={{ paddingRight: 5 }} name="hearto" size={"20%"} ></AntDesign>
                                <Text style={{ color: 'black', width: "20%", marginRight: 2 }} numberOfLines={1}> blala </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignContent: 'center', alignItems: 'center', paddingBottom: 12 }}>
                                <AntDesign style={{ paddingRight: 5 }} name="hearto" size={"20%"} ></AntDesign>
                                <Text style={{ color: 'black', width: "20%", marginRight: 2 }} numberOfLines={1}> blala </Text>
                            </View>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Explore More</Text>
                </TouchableOpacity>





                <TouchableOpacity onPress={() => navigation.navigate("LikesTwo")} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Add to Profile</Text>
                </TouchableOpacity>

            </View>
            <View style={{ alignSelf: 'center', height: 4, backgroundColor: 'grey', width: '90%', }} />

        </View>

    );
};

export default RecConPostAlex;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignContent: 'center',
        width: '100%',
        paddingHorizontal: '5%',
        //borderWidth: 1,
        marginBottom: "3%"
    },
    index: {
        color: "grey",
        marginRight: "2%",
    },
    imageStyle: {

    },
    index: {
        color: "grey",
        marginRight: "2%",
    },
    logo: {
        width: '20%',
        height: 100,
        resizeMode: 'contain'
    },
    appButtonContainer: {
        elevation: 8,
        // backgroundColor: "#34495E",
        backgroundColor: "grey",
        borderRadius: '20%',
        paddingVertical: '5%',
        paddingHorizontal: "8%",
        // shadowColor: 'rgba(0, 0, 0, 0.1)',
        // shadowOpacity: 1,
        // elevation: 10,
        // shadowRadius: '2%',
        // shadowOffset : { width: '-1%', height: '15%'},
    },
    appButtonText: {
        fontSize: 14,
        color: "#fff",
        fontFamily: 'Mont-Regular',
        alignSelf: "center",
    },
    appButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: '7%',
        width: '100%',
        marginBottom: '3%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width: '100%'
    },
    modalView: {
        margin: 20,
        backgroundColor: "orange",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '70%'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196FF",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    descriptionTitle: {
        marginBottom: 15,
        fontFamily: 'Mont-Heavy',
    },
    description: {
        marginBottom: 15,
        fontFamily: 'Mont-Light',
    },
});
