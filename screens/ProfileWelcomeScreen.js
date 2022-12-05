
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
import CircleAddBTN from '../assets/components/circle_add_btn.svg';
import RecAddBTN from '../assets/components/Rectangle_add_btn.svg';


SplashScreen.preventAutoHideAsync();

const initialUserExperience = store.getState('textValue');
const initialUserInterest = store.getState('newInterest');

const initialExpereinceLike = store.getState('likeText');
const initialInterestLike = store.getState('newInterestLike');

var activeInterestNum = 1;
var activeExperienceNum = 1;

var borderWidthExperienceOrange = 0;
var borderWidthExperienceYellow = 0;
var borderWidthExperienceRed = 0;
var borderWidthExperienceBlue = 0;
var borderWidthExperienceGreen = 0;
var borderWidthExperiencePurple = 0;

var borderWidthInterestOrange = 0;
var borderWidthInterestYellow = 0;
var borderWidthInterestRed = 0;
var borderWidthInterestBlue = 0;
var borderWidthInterestGreen = 0;
var borderWidthInterestPurple = 0;

var borderWidthNodeOrange = 0;
var borderWidthNodeYellow = 0;
var borderWidthNodeRed = 0;
var borderWidthNodeBlue = 0;
var borderWidthNodeGreen = 0;
var borderWidthNodePurple = 0;


var borderWidthInterest = 0;
var borderWidthNode = 0;

var showInterest1 = true;
var showExperience1 = true;

var showInterest2 = false;
var showExperience2 = false;

var showInterest3 = true;
var showExperience3 = true;

var showInterest4 = true;
var showExperience4 = true;

var showInterest5 = true;
var showExperience5 = true;

var showInterest6 = true;
var showExperience6 = true;

var showInterest7 = true;
var showExperience7 = true;

var showInterest8 = true;
var showExperience8 = true;

var showInterest9 = true;
var showExperience9 = true;

var showInterest10 = true;
var showExperience10 = true;

var activeNode = 0;

store.setState("initialInterestColor", "#FF9800");
store.setState("initialExperienceColor", "#B479C9");

store.setState("initialInterestWidth", 150);
store.setState("initialInterestHeight", 150);
store.setState("initialExperienceWidth", 150);
store.setState("initialExperienceHeight", 150);

export default function ProfileWelcomeScreen({ navigation }) {
    const [text, onChangeText] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);
    const [text3, onChangeText3] = React.useState(null);
    const [bioValue, setBioValue] = React.useState("");

    /* States to keep track of selected size on Interest & Experience Modal */
    const [borderWidthInterestLow, setBorderWidthInterestLow] = React.useState(0);
    const [borderWidthInterestMed, setBorderWidthInterestMed] = React.useState(0);
    const [borderWidthInterestHigh, setBorderWidthInterestHigh] = React.useState(0);

    const [borderWidthExperienceLow, setBorderWidthExperienceLow] = React.useState(0);
    const [borderWidthExperienceMed, setBorderWidthExperienceMed] = React.useState(0);
    const [borderWidthExperienceHigh, setBorderWidthExperienceHigh] = React.useState(0);

    const [borderWidthNodeLow, setBorderWidthNodeLow] = React.useState(0);
    const [borderWidthNodeMed, setBorderWidthNodeMed] = React.useState(0);
    const [borderWidthNodeHigh, setBorderWidthNodeHigh] = React.useState(0);

    /* States to set size of Interest & Experience Nodes (Limit of 10 of Each) */
    const [initialInterestWidth, setInitialInterestWidth] = store.useState("initialInterestWidth");
    const [initialInterestHeight, setInitialInterestHeight] = store.useState("initialInterestHeight");
    const [initialExperienceWidth, setInitialExperienceWidth] = store.useState("initialExperienceWidth");
    const [initialExperienceHeight, setInitialExperienceHeight] = store.useState("initialExperienceHeight");

    const [interestWidth2, setInterestWidth2] = React.useState(150);
    const [interestHeight2, setInterestHeight2] = React.useState(150);
    const [experienceWidth2, setExperienceWidth2] = React.useState(150);
    const [experienceHeight2, setExperienceHeight2] = React.useState(150);

    /* States to set text value of Interest & Experience Nodes (Limit of 10 of Each) */
    const [textValue, setTextValue] = store.useState("textValue");
    const [newInterest, setNewInterest] = store.useState("newInterest");
    const [newInterest1Value, setNewInterest1Value] = React.useState("");
    const [newExperience1Value, setNewExperience1Value] = React.useState("");

    /* States to set text value of Interest & Experience Nodes (Limit of 10 of Each) */
    const [likeText, setLikeText] = store.useState("likeText");
    const [newInterestLike, setNewInterestLike] = store.useState("newInterestLike");
    const [newInterest1Like, setNewInterest1Like] = React.useState("");
    const [newExperience1Like, setNewExperience1Like] = React.useState("");

    /* States to set color value of Interest & Experience Nodes (Limit of 10 of Each) */
    const [initialInterestColor, setInitialInterestColor] = store.useState("initialInterestColor");
    const [initialExperienceColor, setInitialExperienceColor] = store.useState("initialExperienceColor");
    const [interestColor2, setInterest2Color] = React.useState("");
    const [experienceColor2, setExperience2Color] = React.useState("");

    /* States to set Interest & Experience modals visible (Limit of 10 of Each) */
    const [interestModalVisible, setInterestModalVisible] = React.useState(false);
    const [experienceModalVisible, setExperienceModalVisible] = React.useState(false);
    const [nodeModalVisible, setNodeModalVisible] = React.useState(false);

    const [nodeValue, setNodeValue] = React.useState('');
    const [likeValue, setLikeValue] = React.useState('');


    const [fontsLoaded] = useFonts({
        'Mont-Bold': require('../assets/fonts/Mont-Trial-Bold.ttf'),
        'Mont-Black': require('../assets/fonts/Mont-Trial-Black.ttf'),
        'Mont-Heavy': require('../assets/fonts/Mont-Trial-Heavy.ttf'),
        'Mont-Light': require('../assets/fonts/Mont-Trial-ExtraLight.ttf'),
        'Mont-Regular': require('../assets/fonts/Mont-Trial-Regular.ttf')
    });

    /* Functions that update values of Interest & Experience Nodes (Limit of 10 of Each) */
    const getNodeData = (num) => {
        if (num == 1) {
            setNodeValue(textValue);
            setLikeValue(likeText);
            setNodeModalVisible(true);
        } else if (num == 11) {
            setNodeValue(newInterest);
            setLikeValue(newInterestLike);
            setNodeModalVisible(true);
        } else if (num == 2) {
            setNodeValue(newExperience1Value);
            setLikeValue(newExperience1Like);
            setNodeModalVisible(true);
        } else if (num == 12) {
            setNodeValue(newInterest1Value);
            setLikeValue(newInterest1Like);
            setNodeModalVisible(true);

        }
    }


    const updateNode = () => {

    }

    const displaynode = () => {

    }


    /* Functions that set value of Interest & Experience Nodes (Limit of 10 of Each) */
    const setInterestValue = (text) => {
        if (activeInterestNum == 0) {
            setNewInterest(text);
        } else if (activeInterestNum == 1) {
            setNewInterest1Value(text);
        }
    }

    const setExperienceValue = (text) => {
        if (activeExperienceNum == 0) {
            setTextValue(text);
        } else if (activeExperienceNum == 1) {
            setNewExperience1Value(text);
        }
    }

    /* Functions that set size of Interest & Experience Nodes (Limit of 10 of Each) */
    const setInterestNodeSize = (size) => {
        if (activeInterestNum == 0) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInitialInterestWidth(80);
                setInitialInterestHeight(80);
            } else if (size == 'med') {
                setInitialInterestWidth(120);
                setInitialInterestHeight(120);
            } else {
                setInitialInterestWidth(160);
                setInitialInterestHeight(160);
            }
        } else if (activeInterestNum == 1) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInterestWidth2(80);
                setInterestHeight2(80);
            } else if (size == 'med') {
                setInterestWidth2(120);
                setInterestHeight2(120);
            } else {
                setInterestWidth2(160);
                setInterestHeight2(160);
            }
        }
    }

    const setExperienceNodeSize = (size) => {
        if (activeInterestNum == 0) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setInitialExperienceWidth(80);
                setInitialExperienceHeight(80);
            } else if (size == 'med') {
                setInitialExperienceWidth(120);
                setInitialExperienceHeight(120);
            } else {
                setInitialExperienceWidth(160);
                setInitialExperienceHeight(160);
            }
        } else if (activeInterestNum == 1) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setExperienceWidth2(80);
                setExperienceHeight2(80);
            } else if (size == 'med') {
                setExperienceWidth2(120);
                setExperienceHeight2(120);
            } else {
                setExperienceWidth2(160);
                setExperienceHeight2(160);
            }
        }
    }


    /* Functions that highlight selections on modal (Limit of 10 of Each) */
    const highlightInterestNodeSize = (size) => {
        if (size == 'low') {
            setBorderWidthInterestLow(2);
            setBorderWidthInterestMed(0);
            setBorderWidthInterestHigh(0);
        } else if (size == 'med') {
            setBorderWidthInterestLow(0);
            setBorderWidthInterestMed(2);
            setBorderWidthInterestHigh(0);
        } else {
            setBorderWidthInterestLow(0);
            setBorderWidthInterestMed(0);
            setBorderWidthInterestHigh(2);

        }
    }

    const highlightExperienceNodeSize = (size) => {
        if (size == 'low') {
            setBorderWidthExperienceLow(2);
            setBorderWidthExperienceMed(0);
            setBorderWidthExperienceHigh(0);
        } else if (size == 'med') {
            setBorderWidthExperienceLow(0);
            setBorderWidthExperienceMed(2);
            setBorderWidthExperienceHigh(0);
        } else {
            setBorderWidthExperienceLow(0);
            setBorderWidthExperienceMed(0);
            setBorderWidthExperienceHigh(2);

        }
    }




    const highlightSelectionExperience = (color) => {
        if (color == 'orange') {
            borderWidthExperienceOrange = 2;
            borderWidthExperienceYellow = 0;
            borderWidthExperienceRed = 0;
            borderWidthExperienceBlue = 0;
            borderWidthExperienceGreen = 0;
            borderWidthExperiencePurple = 0;
        } else if (color == 'yellow') {
            borderWidthExperienceOrange = 0;
            borderWidthExperienceYellow = 2;
            borderWidthExperienceRed = 0;
            borderWidthExperienceBlue = 0;
            borderWidthExperienceGreen = 0;
            borderWidthExperiencePurple = 0;
        } else if (color == 'red') {
            borderWidthExperienceOrange = 0;
            borderWidthExperienceYellow = 0;
            borderWidthExperienceRed = 2;
            borderWidthExperienceBlue = 0;
            borderWidthExperienceGreen = 0;
            borderWidthExperiencePurple = 0;
        } else if (color == 'blue') {
            borderWidthExperienceOrange = 0;
            borderWidthExperienceYellow = 0;
            borderWidthExperienceRed = 0;
            borderWidthExperienceBlue = 2;
            borderWidthExperienceGreen = 0;
            borderWidthExperiencePurple = 0;
        } else if (color == 'green') {
            borderWidthExperienceOrange = 0;
            borderWidthExperienceYellow = 0;
            borderWidthExperienceRed = 0;
            borderWidthExperienceBlue = 0;
            borderWidthExperienceGreen = 2;
            borderWidthExperiencePurple = 0;
        } else {
            borderWidthExperienceOrange = 0;
            borderWidthExperienceYellow = 0;
            borderWidthExperienceRed = 0;
            borderWidthExperienceBlue = 0;
            borderWidthExperienceGreen = 0;
            borderWidthExperiencePurple = 2;
        }
    }

    const highlightSelectionInterest = (color) => {
        if (color == 'orange') {
            borderWidthInterestOrange = 2;
            borderWidthInterestYellow = 0;
            borderWidthInterestRed = 0;
            borderWidthInterestBlue = 0;
            borderWidthInterestGreen = 0;
            borderWidthInterestPurple = 0;
        } else if (color == 'yellow') {
            borderWidthInterestOrange = 0;
            borderWidthInterestYellow = 2;
            borderWidthInterestRed = 0;
            borderWidthInterestBlue = 0;
            borderWidthInterestGreen = 0;
            borderWidthInterestPurple = 0;
        } else if (color == 'red') {
            borderWidthInterestOrange = 0;
            borderWidthInterestYellow = 0;
            borderWidthInterestRed = 2;
            borderWidthInterestBlue = 0;
            borderWidthInterestGreen = 0;
            borderWidthInterestPurple = 0;
        } else if (color == 'blue') {
            borderWidthInterestOrange = 0;
            borderWidthInterestYellow = 0;
            borderWidthInterestRed = 0;
            borderWidthInterestBlue = 2;
            borderWidthInterestGreen = 0;
            borderWidthInterestPurple = 0;
        } else if (color == 'green') {
            borderWidthInterestOrange = 0;
            borderWidthInterestYellow = 0;
            borderWidthInterestRed = 0;
            borderWidthInterestBlue = 0;
            borderWidthInterestGreen = 2;
            borderWidthInterestPurple = 0;
        } else {
            borderWidthInterestOrange = 0;
            borderWidthInterestYellow = 0;
            borderWidthInterestRed = 0;
            borderWidthInterestBlue = 0;
            borderWidthInterestGreen = 0;
            borderWidthInterestPurple = 2;
        }
    }

    /* Functions that set color of Interest & Experience Nodes (Limit of 10 of Each) */
    const addInterestNodeColor = (selection, colorVal) => {
        if (activeInterestNum == 0) {
            setInitialInterestColor(colorVal);
            highlightSelectionInterest(selection);
        } else if (activeInterestNum == 1) {
            setInterest2Color(colorVal);
            highlightSelectionInterest(selection);
        }
    }

    const addExperienceNodeColor = (selection, colorVal) => {
        if (activeExperienceNum == 0) {
            setInitialExperienceColor(colorVal);
            highlightSelectionExperience(selection)
        } else if (activeExperienceNum == 1) {
            setExperience2Color(colorVal);
            highlightSelectionExperience(selection)
        }
    }

    /* Functions that add Interest & Experience Nodes (Limit of 10 of Each) */
    const addInterestNode = () => {
        if (activeInterestNum == 0) {
            setInterestModalVisible(!interestModalVisible);
            showInterest1 = true;
            activeInterestNum += 1;
        } else if (activeInterestNum == 1) {
            setInterestModalVisible(!interestModalVisible);
            showInterest2 = true;
            activeInterestNum += 1;
        }
    }

    const addExperienceNode = () => {
        if (activeExperienceNum == 0) {
            setExperienceModalVisible(!experienceModalVisible);
            showExerience1 = true;
            activeExperienceNum += 1;
        } else if (activeExperienceNum == 1) {
            setExperienceModalVisible(!experienceModalVisible);
            showExperience2 = true;
            activeExperienceNum += 1;
        }
    }




    /* Interest & Experience Nodes (Limit of 10 of Each) */
    const experienceNode1 = () => {
        return (
            <Draggable x={200} y={300}
                onLongPress={() => getNodeData(1)}
            >
                <View style={{
                    width: initialExperienceWidth,
                    height: initialExperienceHeight,
                    backgroundColor: initialExperienceColor
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: 10,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {initialUserExperience.value} </Text>
                </View>
            </Draggable>
        )
    }


    const interestNode1 = () => {
        return (
            <Draggable x={60} y={50}
                onLongPress={() => getNodeData(11)}
            >
                <View style={{
                    width: initialInterestWidth,
                    height: initialInterestHeight,
                    borderRadius: 150 / 2,
                    backgroundColor: initialInterestColor
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: 10,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {initialUserInterest.value} </Text>
                </View>
            </Draggable>
        );
    }


    const experienceNode2 = () => {
        return (
            <Draggable x={150} y={100}
                onLongPress={() => getNodeData(2)}
            >
                <View style={{
                    width: experienceWidth2,
                    height: experienceHeight2,
                    backgroundColor: experienceColor2
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: 10,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperience1Value} </Text>
                </View>
            </Draggable>
        )
    }

    const interestNode2 = () => {
        return (
            <Draggable x={70} y={300}
                onLongPress={() => getNodeData(12)}
            >
                <View style={{
                    width: interestWidth2,
                    height: interestHeight2,
                    borderRadius: 150 / 2,
                    backgroundColor: interestColor2
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: 10,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest1Value} </Text>
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

                    {/* Edit Interest/Experience Node */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={nodeModalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setNodeModalVisible(!nodeModalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{nodeValue}</Text>
                                <View style={{ paddingBottom: 5 }}>
                                    <Text style={styles.modalNodeText}>{likeValue}</Text>
                                    {/* <TextInput
                                        style={styles.input}
                                        onChangeText={(val) => setInterestValue(val)}
                                        value={text}
                                        placeholder='Add another interest'

                                    /> */}
                                </View>
                                <View style={{ paddingBottom: 8 }}>
                                    {/* <TextInput
                                        style={styles.input}
                                        onChangeText={(val) => setInterestValue(val)}
                                        value={text}
                                        placeholder='What do you like about it?'

                                    /> */}
                                </View>
                                <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Pressable
                                            onPress={() => addNodeColor('orange', '#EB7A4A')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#EB7A4A',
                                                    borderWidth: borderWidthNodeOrange

                                                }]}
                                        >
                                            {/* Orange */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Text style={{ color: colors.white }}>This</Text>
                                    </View>
                                    <View>
                                        <Pressable
                                            onPress={() => addNodeColor('yellow', '#FF9800')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#FF9800',
                                                    borderWidth: borderWidthNodeYellow

                                                }]}
                                        >
                                            {/* Yellow */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <View>
                                        <Pressable
                                            onPress={() => addNodeColor('red', '#DA6970')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#DA6970',
                                                    borderWidth: borderWidthNodeRed

                                                }]}
                                        >
                                            {/* Red */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View>
                                        <Pressable
                                            onPress={() => addNodeColor('purple', '#B479C9')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#B479C9',
                                                    borderWidth: borderWidthNodePurple

                                                }]}
                                        >
                                            {/* Purple */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <View>
                                        <Pressable
                                            onPress={() => addNodeColor('green', '#3BA95B')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#3BA95B',
                                                    borderWidth: borderWidthNodeGreen

                                                }]}
                                        >
                                            {/* Green */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <View>
                                        <Pressable
                                            onPress={() => addNodeColor('blue', '#6283FA')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#6283FA',
                                                    borderWidth: borderWidthNodeBlue

                                                }]}
                                        >
                                            {/* Blue */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ paddingBottom: 10, paddingTop: 10 }}>
                                    <Text style={{ fontFamily: 'Mont-Bold', fontSize: 18, textAlign: 'center', paddingBottom: 4 }}>Size</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Pressable
                                            onPress={() => setNodeSize('low')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : colors.white,
                                                    borderWidth: borderWidthInterestLow

                                                }]}
                                        >
                                            {/* Low */}
                                            <Text style={{ fontFamily: 'Mont-Regular', fontSize: 15, textAlign: 'center', padding: 5 }}>Low</Text>
                                        </Pressable>
                                        <Pressable
                                            onPress={() => setNodeSize('med')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : colors.white,
                                                    borderWidth: borderWidthInterestMed

                                                }]}
                                        >
                                            {/* Med */}
                                            <Text style={{ fontFamily: 'Mont-Regular', fontSize: 15, textAlign: 'center', padding: 5 }}>Medium</Text>
                                        </Pressable>
                                        <Pressable
                                            onPress={() => setNodeSize('high')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : colors.white,
                                                    borderWidth: borderWidthInterestHigh

                                                }]}
                                        >
                                            {/* High */}
                                            <Text style={{ fontFamily: 'Mont-Regular', fontSize: 15, textAlign: 'center', padding: 5 }}>High</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => updateNode()}
                                    >
                                        <Text style={styles.textStyle}>Create</Text>
                                    </Pressable>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setNodeModalVisible(!nodeModalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>


                    {/* Add another Interest Modal */}
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
                                <View style={{ paddingBottom: 5 }}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(val) => setInterestValue(val)}
                                        value={text}
                                        placeholder='Add another interest'

                                    />
                                </View>
                                <View style={{ paddingBottom: 8 }}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(val) => setInterestValue(val)}
                                        value={text}
                                        placeholder='What do you like about it?'

                                    />
                                </View>
                                <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Pressable
                                            onPress={() => addInterestNodeColor('orange', '#EB7A4A')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#EB7A4A',
                                                    borderWidth: borderWidthInterestOrange

                                                }]}
                                        >
                                            {/* Orange */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Text style={{ color: colors.white }}>This</Text>
                                    </View>
                                    <View>
                                        <Pressable
                                            onPress={() => addInterestNodeColor('yellow', '#FF9800')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#FF9800',
                                                    borderWidth: borderWidthInterestYellow

                                                }]}
                                        >
                                            {/* Yellow */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <View>
                                        <Pressable
                                            onPress={() => addInterestNodeColor('red', '#DA6970')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#DA6970',
                                                    borderWidth: borderWidthInterestRed

                                                }]}
                                        >
                                            {/* Red */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View>
                                        <Pressable
                                            onPress={() => addInterestNodeColor('purple', '#B479C9')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#B479C9',
                                                    borderWidth: borderWidthInterestPurple

                                                }]}
                                        >
                                            {/* Purple */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <View>
                                        <Pressable
                                            onPress={() => addInterestNodeColor('green', '#3BA95B')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#3BA95B',
                                                    borderWidth: borderWidthInterestGreen

                                                }]}
                                        >
                                            {/* Green */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <View>
                                        <Pressable
                                            onPress={() => addInterestNodeColor('blue', '#6283FA')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#6283FA',
                                                    borderWidth: borderWidthInterestBlue

                                                }]}
                                        >
                                            {/* Blue */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ paddingBottom: 10, paddingTop: 10 }}>
                                    <Text style={{ fontFamily: 'Mont-Bold', fontSize: 18, textAlign: 'center', paddingBottom: 4 }}>Size</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Pressable
                                            onPress={() => setInterestNodeSize('low')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : colors.white,
                                                    borderWidth: borderWidthInterestLow

                                                }]}
                                        >
                                            {/* Low */}
                                            <Text style={{ fontFamily: 'Mont-Regular', fontSize: 15, textAlign: 'center', padding: 5 }}>Low</Text>
                                        </Pressable>
                                        <Pressable
                                            onPress={() => setInterestNodeSize('med')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : colors.white,
                                                    borderWidth: borderWidthInterestMed

                                                }]}
                                        >
                                            {/* Med */}
                                            <Text style={{ fontFamily: 'Mont-Regular', fontSize: 15, textAlign: 'center', padding: 5 }}>Medium</Text>
                                        </Pressable>
                                        <Pressable
                                            onPress={() => setInterestNodeSize('high')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : colors.white,
                                                    borderWidth: borderWidthInterestHigh

                                                }]}
                                        >
                                            {/* High */}
                                            <Text style={{ fontFamily: 'Mont-Regular', fontSize: 15, textAlign: 'center', padding: 5 }}>High</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => addInterestNode()}
                                    >
                                        <Text style={styles.textStyle}>Create</Text>
                                    </Pressable>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setInterestModalVisible(!interestModalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>


                    {/* Add another Exprience Modal */}
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
                                <View style={{ paddingBottom: 5 }}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(val) => setExperienceValue(val)}
                                        value={text}
                                        placeholder='Add another experience'

                                    />
                                </View>
                                <View style={{ paddingBottom: 8 }}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(val) => setExperienceValue(val)}
                                        value={text}
                                        placeholder='What do you like about it?'

                                    />
                                </View>
                                <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View>
                                        <Pressable
                                            onPress={() => addExperienceNodeColor('orange', '#EB7A4A')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#EB7A4A',
                                                    borderWidth: borderWidthExperienceOrange

                                                }]}
                                        >
                                            {/* Orange */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <View>
                                        <Pressable
                                            onPress={() => addExperienceNodeColor('yellow', '#FF9800')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#FF9800',
                                                    borderWidth: borderWidthExperienceYellow

                                                }]}
                                        >
                                            {/* Yellow */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <View>
                                        <Pressable
                                            onPress={() => addExperienceNodeColor('red', '#DA6970')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#DA6970',
                                                    borderWidth: borderWidthExperienceRed

                                                }]}
                                        >
                                            {/* Red */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View>
                                        <Pressable
                                            onPress={() => addExperienceNodeColor('purple', '#B479C9')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#B479C9',
                                                    borderWidth: borderWidthExperiencePurple

                                                }]}
                                        >
                                            {/* Purple */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <View>
                                        <Pressable
                                            onPress={() => addExperienceNodeColor('green', '#3BA95B')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : '#3BA95B',
                                                    borderWidth: borderWidthExperienceGreen

                                                }]}
                                        >
                                            {/* Green */}
                                            {({ pressed }) => (
                                                <View style={{
                                                    width: 50,
                                                    height: 50,

                                                    backgroundColor: pressed
                                                }} >
                                                </View>
                                            )}
                                        </Pressable>
                                    </View>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <Pressable
                                        onPress={() => addExperienceNodeColor('blue', '#6283FA')}
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? 'rgb(210, 230, 255)'
                                                    : '#6283FA',
                                                borderWidth: borderWidthExperienceBlue

                                            }]}
                                    >
                                        {/* Blue */}
                                        {({ pressed }) => (
                                            <View style={{
                                                width: 50,
                                                height: 50,

                                                backgroundColor: pressed
                                            }} >
                                            </View>
                                        )}
                                    </Pressable>
                                </View>
                                <View style={{ paddingBottom: 10, paddingTop: 10 }}>
                                    <Text style={{ fontFamily: 'Mont-Bold', fontSize: 18, textAlign: 'center', paddingBottom: 4 }}>Size</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Pressable
                                            onPress={() => setExperienceNodeSize('low')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : colors.white,
                                                    borderWidth: borderWidthExperienceLow

                                                }]}
                                        >
                                            {/* Low */}
                                            <Text style={{ fontFamily: 'Mont-Regular', fontSize: 15, textAlign: 'center', padding: 5 }}>Low</Text>
                                        </Pressable>
                                        <Pressable
                                            onPress={() => setExperienceNodeSize('med')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : colors.white,
                                                    borderWidth: borderWidthExperienceMed

                                                }]}
                                        >
                                            {/* Med */}
                                            <Text style={{ fontFamily: 'Mont-Regular', fontSize: 15, textAlign: 'center', padding: 5 }}>Medium</Text>
                                        </Pressable>
                                        <Pressable
                                            onPress={() => setExperienceNodeSize('high')}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : colors.white,
                                                    borderWidth: borderWidthExperienceHigh

                                                }]}
                                        >
                                            {/* High */}
                                            <Text style={{ fontFamily: 'Mont-Regular', fontSize: 15, textAlign: 'center', padding: 5 }}>High</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => addExperienceNode()}
                                    >
                                        <Text style={styles.textStyle}>Create</Text>
                                    </Pressable>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setExperienceModalVisible(!experienceModalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    {/* Bottom portion of screen with add buttons & navbar */}
                    <View style={styles.body}>
                        <Draggable x={30} y={430}
                            onShortPressRelease={() => setExperienceModalVisible(true)}
                        >
                            <View style={styles.experienceButton}>

                                <RecAddBTN width={50} height={'50%'} />
                            </View>
                        </Draggable>
                        <Draggable x={30} y={490}
                            onShortPressRelease={() => setInterestModalVisible(true)}
                        >
                            <View style={styles.experienceButton}>
                                <CircleAddBTN width={50} height={'50%'} />
                            </View>

                        </Draggable>

                        {/* Nodes */}
                        {showInterest1 && interestNode1()}
                        {showExperience1 && experienceNode1()}
                        {showInterest2 && interestNode2()}
                        {showExperience2 && experienceNode2()}

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
        fontSize: 20,
        paddingBottom: 10
    },

    modalNodeText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: 'Mont-Regular',
        fontSize: 10,
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
        //height: 400,
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
    },
    CircleShape: {

    },
});



{/* <Draggable x={200} y={300} renderSize={80} renderColor='#F2BA4C' isCircle renderText='Travel'/> */ }


{/* <Draggable x={200} y={300}>
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
</Draggable> */}