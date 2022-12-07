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

SplashScreen.preventAutoHideAsync();

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

var showInterest3 = false;
var showExperience3 = false;

var showInterest4 = false;
var showExperience4 = false;

var showInterest5 = false;
var showExperience5 = false;

var showInterest6 = false;
var showExperience6 = false;

var showInterest7 = false;
var showExperience7 = false;

var showInterest8 = false;
var showExperience8 = false;

var showInterest9 = false;
var showExperience9 = false;

var showInterest10 = false;
var showExperience10 = false;

var activeNode = 0;

var activeInterestNum = 1;
var activeExperienceNum = 1;

var countInterestValue = 0;
var countInterestLike = 0;
var countInterestColor = 0;
var countInterestSize = 0;

var countExperienceValue = 0;
var countExperienceLike = 0;
var countExperienceColor = 0;
var countExperienceSize = 0;

var interestArray = [false, false, true, true, true, true, true, true, true, true];
var experienceArray = [false, false, true, true, true, true, true, true, true, true];

store.setState("initialInterestColor", "#FF9800");
store.setState("initialExperienceColor", "#B479C9");

store.setState("initialInterestWidth", 160);
store.setState("initialInterestHeight", 160);
store.setState("initialExperienceWidth", 160);
store.setState("initialExperienceHeight", 160);

export default function ProfileWelcomeScreen({ navigation }) {
    const [text1, onChangeText] = React.useState(null);
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

    const [interestWidth3, setInterestWidth3] = React.useState(150);
    const [interestHeight3, setInterestHeight3] = React.useState(150);
    const [experienceWidth3, setExperienceWidth3] = React.useState(150);
    const [experienceHeight3, setExperienceHeight3] = React.useState(150);

    const [interestWidth4, setInterestWidth4] = React.useState(150);
    const [interestHeight4, setInterestHeight4] = React.useState(150);
    const [experienceWidth4, setExperienceWidth4] = React.useState(150);
    const [experienceHeight4, setExperienceHeight4] = React.useState(150);

    const [interestWidth5, setInterestWidth5] = React.useState(150);
    const [interestHeight5, setInterestHeight5] = React.useState(150);
    const [experienceWidth5, setExperienceWidth5] = React.useState(150);
    const [experienceHeight5, setExperienceHeight5] = React.useState(150);

    const [interestWidth6, setInterestWidth6] = React.useState(150);
    const [interestHeight6, setInterestHeight6] = React.useState(150);
    const [experienceWidth6, setExperienceWidth6] = React.useState(150);
    const [experienceHeight6, setExperienceHeight6] = React.useState(150);

    const [interestWidth7, setInterestWidth7] = React.useState(150);
    const [interestHeight7, setInterestHeight7] = React.useState(150);
    const [experienceWidth7, setExperienceWidth7] = React.useState(150);
    const [experienceHeight7, setExperienceHeight7] = React.useState(150);

    const [interestWidth8, setInterestWidth8] = React.useState(150);
    const [interestHeight8, setInterestHeight8] = React.useState(150);
    const [experienceWidth8, setExperienceWidth8] = React.useState(150);
    const [experienceHeight8, setExperienceHeight8] = React.useState(150);

    const [interestWidth9, setInterestWidth9] = React.useState(150);
    const [interestHeight9, setInterestHeight9] = React.useState(150);
    const [experienceWidth9, setExperienceWidth9] = React.useState(150);
    const [experienceHeight9, setExperienceHeight9] = React.useState(150);

    const [interestWidth10, setInterestWidth10] = React.useState(150);
    const [interestHeight10, setInterestHeight10] = React.useState(150);
    const [experienceWidth10, setExperienceWidth10] = React.useState(150);
    const [experienceHeight10, setExperienceHeight10] = React.useState(150);

    /* States to set text value of Interest & Experience Nodes (Limit of 10 of Each) */
    const [textValue, setTextValue] = store.useState("textValue");
    const [newInterest, setNewInterest] = store.useState("newInterest");

    const [newInterest2Value, setNewInterest2Value] = React.useState("");
    const [newExperience2Value, setNewExperience2Value] = React.useState("");

    const [newInterest3Value, setNewInterest3Value] = React.useState("");
    const [newExperience3Value, setNewExperience3Value] = React.useState("");

    const [newInterest4Value, setNewInterest4Value] = React.useState("");
    const [newExperience4Value, setNewExperience4Value] = React.useState("");

    const [newInterest5Value, setNewInterest5Value] = React.useState("");
    const [newExperience5Value, setNewExperience5Value] = React.useState("");

    const [newInterest6Value, setNewInterest6Value] = React.useState("");
    const [newExperience6Value, setNewExperience6Value] = React.useState("");

    const [newInterest7Value, setNewInterest7Value] = React.useState("");
    const [newExperience7Value, setNewExperience7Value] = React.useState("");

    const [newInterest8Value, setNewInterest8Value] = React.useState("");
    const [newExperience8Value, setNewExperience8Value] = React.useState("");

    const [newInterest9Value, setNewInterest9Value] = React.useState("");
    const [newExperience9Value, setNewExperience9Value] = React.useState("");

    const [newInterest10Value, setNewInterest10Value] = React.useState("");
    const [newExperience10Value, setNewExperience10Value] = React.useState("");

    /* States to set text value font size of Interest & Experience Nodes (Limit of 10 of Each) */
    const [experienceNode1Font, setExperienceNode1Font] = React.useState(14);
    const [interestNode1Font, setInterestNode1Font] = React.useState(14);

    const [experienceNode2Font, setExperienceNode2Font] = React.useState(14);
    const [interestNode2Font, setInterestNode2Font] = React.useState(14);

    const [experienceNode3Font, setExperienceNode3Font] = React.useState(14);
    const [interestNode3Font, setInterestNode3Font] = React.useState(14);

    const [experienceNode4Font, setExperienceNode4Font] = React.useState(14);
    const [interestNode4Font, setInterestNode4Font] = React.useState(14);

    const [experienceNode5Font, setExperienceNode5Font] = React.useState(14);
    const [interestNode5Font, setInterestNode5Font] = React.useState(14);

    const [experienceNode6Font, setExperienceNode6Font] = React.useState(14);
    const [interestNode6Font, setInterestNode6Font] = React.useState(14);

    const [experienceNode7Font, setExperienceNode7Font] = React.useState(14);
    const [interestNode7Font, setInterestNode7Font] = React.useState(14);

    const [experienceNode8Font, setExperienceNode8Font] = React.useState(14);
    const [interestNode8Font, setInterestNode8Font] = React.useState(14);

    const [experienceNode9Font, setExperienceNode9Font] = React.useState(14);
    const [interestNode9Font, setInterestNode9Font] = React.useState(14);

    const [experienceNode10Font, setExperienceNode10Font] = React.useState(14);
    const [interestNode10Font, setInterestNode10Font] = React.useState(14);

    /* States to set text value of Interest & Experience Nodes (Limit of 10 of Each) */
    const [likeText, setLikeText] = store.useState("likeText");
    const [newInterestLike, setNewInterestLike] = store.useState("newInterestLike");

    const [newInterest2Like, setNewInterest2Like] = React.useState("");
    const [newExperience2Like, setNewExperience2Like] = React.useState("");

    const [newInterest3Like, setNewInterest3Like] = React.useState("");
    const [newExperience3Like, setNewExperience3Like] = React.useState("");

    const [newInterest4Like, setNewInterest4Like] = React.useState("");
    const [newExperience4Like, setNewExperience4Like] = React.useState("");

    const [newInterest5Like, setNewInterest5Like] = React.useState("");
    const [newExperience5Like, setNewExperience5Like] = React.useState("");

    const [newInterest6Like, setNewInterest6Like] = React.useState("");
    const [newExperience6Like, setNewExperience6Like] = React.useState("");

    const [newInterest7Like, setNewInterest7Like] = React.useState("");
    const [newExperience7Like, setNewExperience7Like] = React.useState("");

    const [newInterest8Like, setNewInterest8Like] = React.useState("");
    const [newExperience8Like, setNewExperience8Like] = React.useState("");

    const [newInterest9Like, setNewInterest9Like] = React.useState("");
    const [newExperience9Like, setNewExperience9Like] = React.useState("");

    const [newInterest10Like, setNewInterest10Like] = React.useState("");
    const [newExperience10Like, setNewExperience10Like] = React.useState("");

    /* States to set color value of Interest & Experience Nodes (Limit of 10 of Each) */
    const [initialInterestColor, setInitialInterestColor] = store.useState("initialInterestColor");
    const [initialExperienceColor, setInitialExperienceColor] = store.useState("initialExperienceColor");

    const [interestColor2, setInterest2Color] = React.useState("");
    const [experienceColor2, setExperience2Color] = React.useState("");

    const [interestColor3, setInterest3Color] = React.useState("");
    const [experienceColor3, setExperience3Color] = React.useState("");

    const [interestColor4, setInterest4Color] = React.useState("");
    const [experienceColor4, setExperience4Color] = React.useState("");

    const [interestColor5, setInterest5Color] = React.useState("");
    const [experienceColor5, setExperience5Color] = React.useState("");

    const [interestColor6, setInterest6Color] = React.useState("");
    const [experienceColor6, setExperience6Color] = React.useState("");

    const [interestColor7, setInterest7Color] = React.useState("");
    const [experienceColor7, setExperience7Color] = React.useState("");

    const [interestColor8, setInterest8Color] = React.useState("");
    const [experienceColor8, setExperience8Color] = React.useState("");

    const [interestColor9, setInterest9Color] = React.useState("");
    const [experienceColor9, setExperience9Color] = React.useState("");

    const [interestColor10, setInterest10Color] = React.useState("");
    const [experienceColor10, setExperience10Color] = React.useState("");

    /* States to set Interest & Experience modals visible (Limit of 10 of Each) */
    const [interestModalVisible, setInterestModalVisible] = React.useState(false);

    const [experienceModalVisible, setExperienceModalVisible] = React.useState(false);

    const [nodeModalVisible, setNodeModalVisible] = React.useState(false);

    const [nodeValue, setNodeValue] = React.useState('');
    const [likeValue, setLikeValue] = React.useState('');

    const [helpModalVisible, setHelpModalVisible] = React.useState(true);
    const [notifModalVisible, setNotifModalVisible] = React.useState(false);


    const [fontsLoaded] = useFonts({
        'Mont-Bold': require('../assets/fonts/Mont-Trial-Bold.ttf'),
        'Mont-Black': require('../assets/fonts/Mont-Trial-Black.ttf'),
        'Mont-Heavy': require('../assets/fonts/Mont-Trial-Heavy.ttf'),
        'Mont-Light': require('../assets/fonts/Mont-Trial-ExtraLight.ttf'),
        'Mont-Regular': require('../assets/fonts/Mont-Trial-Regular.ttf')
    });

    /* Functions that update/delete values of Interest & Experience Nodes (Limit of 10 of Each) */

    const getNodeData = (num) => {
        setBorderWidthNodeLow(0);
        setBorderWidthNodeMed(0);
        setBorderWidthNodeHigh(0);
        borderWidthNodeOrange = 0;
        borderWidthNodeYellow = 0;
        borderWidthNodeRed = 0;
        borderWidthNodeBlue = 0;
        borderWidthNodeGreen = 0;
        borderWidthNodePurple = 0;
        if (num == 1) {
            activeNode = 1;
            setNodeValue(textValue);
            setLikeValue(likeText);
            setNodeModalVisible(true);
        } else if (num == 11) {
            activeNode = 11;
            setNodeValue(newInterest);
            setLikeValue(newInterestLike);
            setNodeModalVisible(true);
        } else if (num == 2) {
            activeNode = 2;
            setNodeValue(newExperience2Value);
            setLikeValue(newExperience2Like);
            setNodeModalVisible(true);
        } else if (num == 12) {
            activeNode = 12;
            setNodeValue(newInterest2Value);
            setLikeValue(newInterest2Like);
            setNodeModalVisible(true);
        } else if (num == 3) {
            activeNode = 3;
            setNodeValue(newExperience3Value);
            setLikeValue(newExperience3Like);
            setNodeModalVisible(true);
        } else if (num == 13) {
            activeNode = 13;
            setNodeValue(newInterest3Value);
            setLikeValue(newInterest3Like);
            setNodeModalVisible(true);
        } else if (num == 4) {
            activeNode = 4;
            setNodeValue(newExperience4Value);
            setLikeValue(newExperience4Like);
            setNodeModalVisible(true);
        } else if (num == 14) {
            activeNode = 14;
            setNodeValue(newInterest4Value);
            setLikeValue(newInterest4Like);
            setNodeModalVisible(true);
        } else if (num == 5) {
            activeNode = 5;
            setNodeValue(newExperience5Value);
            setLikeValue(newExperience5Like);
            setNodeModalVisible(true);
        } else if (num == 15) {
            activeNode = 15;
            setNodeValue(newInterest5Value);
            setLikeValue(newInterest5Like);
            setNodeModalVisible(true);
        } else if (num == 6) {
            activeNode = 6;
            setNodeValue(newExperience6Value);
            setLikeValue(newExperience6Like);
            setNodeModalVisible(true);
        } else if (num == 16) {
            activeNode = 16;
            setNodeValue(newInterest6Value);
            setLikeValue(newInterest6Like);
            setNodeModalVisible(true);
        } else if (num == 7) {
            activeNode = 7;
            setNodeValue(newExperience7Value);
            setLikeValue(newExperience7Like);
            setNodeModalVisible(true);
        } else if (num == 17) {
            activeNode = 17;
            setNodeValue(newInterest7Value);
            setLikeValue(newInterest7Like);
            setNodeModalVisible(true);
        } else if (num == 8) {
            activeNode = 8;
            setNodeValue(newExperience8Value);
            setLikeValue(newExperience8Like);
            setNodeModalVisible(true);
        } else if (num == 18) {
            activeNode = 18;
            setNodeValue(newInterest8Value);
            setLikeValue(newInterest8Like);
            setNodeModalVisible(true);
        } else if (num == 9) {
            activeNode = 9;
            setNodeValue(newExperience9Value);
            setLikeValue(newExperience9Like);
            setNodeModalVisible(true);
        } else if (num == 19) {
            activeNode = 19;
            setNodeValue(newInterest9Value);
            setLikeValue(newInterest9Like);
            setNodeModalVisible(true);
        } else if (num == 10) {
            activeNode = 10;
            setNodeValue(newExperience10Value);
            setLikeValue(newExperience10Like);
            setNodeModalVisible(true);
        } else if (num == 20) {
            activeNode = 20;
            setNodeValue(newInterest10Value);
            setLikeValue(newInterest10Like);
            setNodeModalVisible(true);
        }
    }

    const deleteNode = () => {
        if (activeNode == 1) {
            showExperience1 = false;
            experienceArray[0] = true;
            setNodeModalVisible(false);
        } else if (activeNode == 11) {
            showInterest1 = false;
            interestArray[0] = true;
            setNodeModalVisible(false);
        } else if (activeNode == 2) {
            showExperience2 = false;
            experienceArray[1] = true;
            setNodeModalVisible(false)
        } else if (activeNode == 12) {
            showInterest2 = false;
            interestArray[1] = true;
            setNodeModalVisible(false);
        } else if (activeNode == 3) {
            showExperience3 = false;
            experienceArray[2] = true;
            setNodeModalVisible(false)
        } else if (activeNode == 13) {
            showInterest3 = false;
            interestArray[2] = true;
            setNodeModalVisible(false);
        } else if (activeNode == 4) {
            showExperience4 = false;
            experienceArray[3] = true;
            setNodeModalVisible(false)
        } else if (activeNode == 14) {
            showInterest4 = false;
            interestArray[3] = true;
            setNodeModalVisible(false);
        } else if (activeNode == 5) {
            showExperience5 = false;
            experienceArray[4] = true;
            setNodeModalVisible(false)
        } else if (activeNode == 15) {
            showInterest5 = false;
            interestArray[4] = true;
            setNodeModalVisible(false);
        } else if (activeNode == 6) {
            showExperience6 = false;
            experienceArray[5] = true;
            setNodeModalVisible(false)
        } else if (activeNode == 16) {
            showInterest6 = false;
            interestArray[5] = true;
            setNodeModalVisible(false);
        } else if (activeNode == 7) {
            showExperience7 = false;
            experienceArray[6] = true;
            setNodeModalVisible(false)
        } else if (activeNode == 17) {
            showInterest7 = false;
            interestArray[6] = true;
            setNodeModalVisible(false);
        } else if (activeNode == 8) {
            showExperience8 = false;
            experienceArray[7] = true;
            setNodeModalVisible(false)
        } else if (activeNode == 18) {
            showInterest8 = false;
            interestArray[7] = true;
            setNodeModalVisible(false);
        } else if (activeNode == 9) {
            showExperience9 = false;
            experienceArray[8] = true;
            setNodeModalVisible(false)
        } else if (activeNode == 19) {
            showInterest9 = false;
            interestArray[8] = true;
            setNodeModalVisible(false);
        } else if (activeNode == 10) {
            showExperience10 = false;
            experienceArray[9] = true;
            setNodeModalVisible(false)
        } else if (activeNode == 20) {
            showInterest10 = false;
            interestArray[9] = true;
            setNodeModalVisible(false);
        }

        for (var i = 0; i < experienceArray.length; i++) {
            if (experienceArray[i] == true) {
                activeExperienceNum = i;
                experienceArray[i] = false;
                break;
            }
        }

        for (var i = 0; i < interestArray.length; i++) {
            if (interestArray[i] == true) {
                activeInterestNum = i;
                interestArray[i] = false;
                break;
            }
        }
    }



    /* Functions that set value of Interest & Experience Nodes (Limit of 10 of Each) */
    const setInterestValue = (text) => {
        countInterestValue += 1;
        if (activeInterestNum == 0) {
            setNewInterest(text);
        } else if (activeInterestNum == 1) {
            setNewInterest2Value(text);
        } else if (activeInterestNum == 2) {
            setNewInterest3Value(text);
        } else if (activeInterestNum == 3) {
            setNewInterest4Value(text);
        } else if (activeInterestNum == 4) {
            setNewInterest5Value(text);
        } else if (activeInterestNum == 5) {
            setNewInterest6Value(text);
        } else if (activeInterestNum == 6) {
            setNewInterest7Value(text);
        } else if (activeInterestNum == 7) {
            setNewInterest8Value(text);
        } else if (activeInterestNum == 8) {
            setNewInterest9Value(text);
        } else if (activeInterestNum == 9) {
            setNewInterest10Value(text);
        }
    }

    const setExperienceValue = (text) => {
        countExperienceValue += 1;
        if (activeExperienceNum == 0) {
            setTextValue(text);
        } else if (activeExperienceNum == 1) {
            setNewExperience2Value(text);
        } else if (activeExperienceNum == 2) {
            setNewExperience3Value(text);
        } else if (activeExperienceNum == 3) {
            setNewExperience4Value(text);
        } else if (activeExperienceNum == 4) {
            setNewExperience5Value(text);
        } else if (activeExperienceNum == 5) {
            setNewExperience6Value(text);
        } else if (activeExperienceNum == 6) {
            setNewExperience7Value(text);
        } else if (activeExperienceNum == 7) {
            setNewExperience8Value(text);
        } else if (activeExperienceNum == 8) {
            setNewExperience9Value(text);
        } else if (activeExperienceNum == 9) {
            setNewExperience10Value(text);
        }
    }

    const setNodeTextValue = (text) => {
        if (activeNode == 1) {
            setTextValue(text);
        } else if (activeNode == 11) {
            setNewInterest(text);
        } else if (activeNode == 2) {
            setNewExperience2Value(text);
        } else if (activeNode == 12) {
            setNewInterest2Value(text);
        } else if (activeNode == 3) {
            setNewExperience3Value(text);
        } else if (activeNode == 13) {
            setNewInterest3Value(text);
        } else if (activeNode == 4) {
            setNewExperience4Value(text);
        } else if (activeNode == 14) {
            setNewInterest4Value(text);
        } else if (activeNode == 5) {
            setNewExperience5Value(text);
        } else if (activeNode == 15) {
            setNewInterest5Value(text);
        } else if (activeNode == 6) {
            setNewExperience6Value(text);
        } else if (activeNode == 16) {
            setNewInterest6Value(text);
        } else if (activeNode == 7) {
            setNewExperience7Value(text);
        } else if (activeNode == 17) {
            setNewInterest7Value(text);
        } else if (activeNode == 8) {
            setNewExperience8Value(text);
        } else if (activeNode == 18) {
            setNewInterest8Value(text);
        } else if (activeNode == 9) {
            setNewExperience9Value(text);
        } else if (activeNode == 19) {
            setNewInterest9Value(text);
        } else if (activeNode == 10) {
            setNewExperience10Value(text);
        } else if (activeNode == 20) {
            setNewInterest10Value(text);
        }
    }

    /* Functions that set text like values of Interest & Experience Nodes (Limit of 10 of Each) */
    const setInterestLike = (text) => {
        countInterestLike += 1;
        if (activeInterestNum == 0) {
            setNewInterestLike(text);
        } else if (activeInterestNum == 1) {
            setNewInterest2Like(text);
        } else if (activeInterestNum == 2) {
            setNewInterest3Like(text);
        } else if (activeInterestNum == 3) {
            setNewInterest4Like(text);
        } else if (activeInterestNum == 4) {
            setNewInterest5Like(text);
        } else if (activeInterestNum == 5) {
            setNewInterest6Like(text);
        } else if (activeInterestNum == 6) {
            setNewInterest7Like(text);
        } else if (activeInterestNum == 7) {
            setNewInterest8Like(text);
        } else if (activeInterestNum == 8) {
            setNewInterest9Like(text);
        } else if (activeInterestNum == 9) {
            setNewInterest10Like(text);
        }
    }

    const setExperienceLike = (text) => {
        countExperienceLike += 1;
        if (activeExperienceNum == 0) {
            setLikeText(text);
        } else if (activeExperienceNum == 1) {
            setNewExperience2Like(text);
        } else if (activeExperienceNum == 2) {
            setNewExperience3Like(text);
        } else if (activeExperienceNum == 3) {
            setNewExperience4Like(text);
        } else if (activeExperienceNum == 4) {
            setNewExperience5Like(text);
        } else if (activeExperienceNum == 6) {
            setNewExperience7Like(text);
        } else if (activeExperienceNum == 7) {
            setNewExperience8Like(text);
        } else if (activeExperienceNum == 8) {
            setNewExperience9Like(text);
        } else if (activeExperienceNum == 9) {
            setNewExperience10Like(text);
        }
    }

    const setNodeTextLike = (text) => {
        if (activeNode == 1) {
            setLikeText(text);
        } else if (activeNode == 11) {
            setNewInterestLike(text);
        } else if (activeNode == 2) {
            setNewExperience2Like(text);
        } else if (activeNode == 12) {
            setNewInterest2Like(text);
        } else if (activeNode == 3) {
            setNewExperience3Like(text);
        } else if (activeNode == 13) {
            setNewInterest3Like(text);
        } else if (activeNode == 4) {
            setNewExperience4Like(text);
        } else if (activeNode == 14) {
            setNewInterest4Like(text);
        } else if (activeNode == 5) {
            setNewExperience5Like(text);
        } else if (activeNode == 15) {
            setNewInterest5Like(text);
        } else if (activeNode == 6) {
            setNewExperience6Like(text);
        } else if (activeNode == 16) {
            setNewInterest6Like(text);
        } else if (activeNode == 7) {
            setNewExperience7Like(text);
        } else if (activeNode == 17) {
            setNewInterest7Like(text);
        } else if (activeNode == 8) {
            setNewExperience8Like(text);
        } else if (activeNode == 18) {
            setNewInterest8Like(text);
        } else if (activeNode == 9) {
            setNewExperience9Like(text);
        } else if (activeNode == 19) {
            setNewInterest9Like(text);
        } else if (activeNode == 10) {
            setNewExperience10Like(text);
        } else if (activeNode == 20) {
            setNewInterest10Like(text);
        }
    }

    /* Functions that set size of Interest & Experience Nodes (Limit of 10 of Each) */
    const setInterestNodeSize = (size) => {
        countInterestSize += 1;
        if (activeInterestNum == 0) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInitialInterestWidth(80);
                setInitialInterestHeight(80);
                setInterestNode1Font(10);
            } else if (size == 'med') {
                setInitialInterestWidth(120);
                setInitialInterestHeight(120);
                setInterestNode1Font(12);
            } else {
                setInitialInterestWidth(160);
                setInitialInterestHeight(160);
                setInterestNode1Font(14);
            }
        } else if (activeInterestNum == 1) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInterestWidth2(80);
                setInterestHeight2(80);
                setInterestNode2Font(10);
            } else if (size == 'med') {
                setInterestWidth2(120);
                setInterestHeight2(120);
                setInterestNode2Font(12);
            } else {
                setInterestWidth2(160);
                setInterestHeight2(160);
                setInterestNode2Font(14);
            }
        } else if (activeInterestNum == 2) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInterestWidth3(80);
                setInterestHeight3(80);
                setInterestNode3Font(10);
            } else if (size == 'med') {
                setInterestWidth3(120);
                setInterestHeight3(120);
                setInterestNode3Font(12);
            } else {
                setInterestWidth3(160);
                setInterestHeight3(160);
                setInterestNode3Font(14);
            }
        } else if (activeInterestNum == 3) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInterestWidth4(80);
                setInterestHeight4(80);
                setInterestNode4Font(10);
            } else if (size == 'med') {
                setInterestWidth4(120);
                setInterestHeight4(120);
                setInterestNode4Font(12);
            } else {
                setInterestWidth4(160);
                setInterestHeight4(160);
                setInterestNode4Font(14);
            }
        } else if (activeInterestNum == 4) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInterestWidth5(80);
                setInterestHeight5(80);
                setInterestNode5Font(10);
            } else if (size == 'med') {
                setInterestWidth5(120);
                setInterestHeight5(120);
                setInterestNode5Font(12);
            } else {
                setInterestWidth5(160);
                setInterestHeight5(160);
                setInterestNode5Font(14);
            }
        } else if (activeInterestNum == 5) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInterestWidth6(80);
                setInterestHeight6(80);
                setInterestNode6Font(10);
            } else if (size == 'med') {
                setInterestWidth6(120);
                setInterestHeight6(120);
                setInterestNode6Font(12);
            } else {
                setInterestWidth6(160);
                setInterestHeight6(160);
                setInterestNode6Font(14);
            }
        } else if (activeInterestNum == 6) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInterestWidth7(80);
                setInterestHeight7(80);
                setInterestNode7Font(10);
            } else if (size == 'med') {
                setInterestWidth7(120);
                setInterestHeight7(120);
                setInterestNode7Font(12);
            } else {
                setInterestWidth7(160);
                setInterestHeight7(160);
                setInterestNode7Font(14);
            }
        } else if (activeInterestNum == 7) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInterestWidth8(80);
                setInterestHeight8(80);
                setInterestNode8Font(10);
            } else if (size == 'med') {
                setInterestWidth8(120);
                setInterestHeight8(120);
                setInterestNode8Font(12);
            } else {
                setInterestWidth8(160);
                setInterestHeight8(160);
                setInterestNode8Font(14);
            }
        } else if (activeInterestNum == 8) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInterestWidth9(80);
                setInterestHeight9(80);
                setInterestNode9Font(10);
            } else if (size == 'med') {
                setInterestWidth9(120);
                setInterestHeight9(120);
                setInterestNode9Font(12);
            } else {
                setInterestWidth9(160);
                setInterestHeight9(160);
                setInterestNode9Font(14);
            }
        } else if (activeInterestNum == 9) {
            highlightInterestNodeSize(size);
            if (size == 'low') {
                setInterestWidth10(80);
                setInterestHeight10(80);
                setInterestNode10Font(10);
            } else if (size == 'med') {
                setInterestWidth10(120);
                setInterestHeight10(120);
                setInterestNode10Font(12);
            } else {
                setInterestWidth10(160);
                setInterestHeight10(160);
                setInterestNode10Font(14);
            }
        }
    }

    const setExperienceNodeSize = (size) => {
        countExperienceSize += 1;
        if (activeExperienceNum == 0) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setInitialExperienceWidth(80);
                setInitialExperienceHeight(80);
                setExperienceNode1Font(10);
            } else if (size == 'med') {
                setInitialExperienceWidth(120);
                setInitialExperienceHeight(120);
                setExperienceNode1Font(12);
            } else {
                setInitialExperienceWidth(160);
                setInitialExperienceHeight(160);
                setExperienceNode1Font(14);
            }
        } else if (activeExperienceNum == 1) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setExperienceWidth2(80);
                setExperienceHeight2(80);
                setExperienceNode2Font(10);
            } else if (size == 'med') {
                setExperienceWidth2(120);
                setExperienceHeight2(120);
                setExperienceNode2Font(12);
            } else {
                setExperienceWidth2(160);
                setExperienceHeight2(160);
                setExperienceNode2Font(14);
            }
        } else if (activeExperienceNum == 2) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setExperienceWidth3(80);
                setExperienceHeight3(80);
                setExperienceNode3Font(10);
            } else if (size == 'med') {
                setExperienceWidth3(120);
                setExperienceHeight3(120);
                setExperienceNode3Font(12);
            } else {
                setExperienceWidth3(160);
                setExperienceHeight3(160);
                setExperienceNode3Font(14);
            }
        } else if (activeExperienceNum == 3) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setExperienceWidth4(80);
                setExperienceHeight4(80);
                setExperienceNode4Font(10);
            } else if (size == 'med') {
                setExperienceWidth4(120);
                setExperienceHeight4(120);
                setExperienceNode4Font(12);
            } else {
                setExperienceWidth4(160);
                setExperienceHeight4(160);
                setExperienceNode4Font(14);
            }
        } else if (activeExperienceNum == 4) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setExperienceWidth5(80);
                setExperienceHeight5(80);
                setExperienceNode5Font(10);
            } else if (size == 'med') {
                setExperienceWidth5(120);
                setExperienceHeight5(120);
                setExperienceNode5Font(12);
            } else {
                setExperienceWidth5(160);
                setExperienceHeight5(160);
                setExperienceNode5Font(14);
            }
        } else if (activeExperienceNum == 5) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setExperienceWidth6(80);
                setExperienceHeight6(80);
                setExperienceNode6Font(10);
            } else if (size == 'med') {
                setExperienceWidth6(120);
                setExperienceHeight6(120);
                setExperienceNode6Font(12);
            } else {
                setExperienceWidth6(160);
                setExperienceHeight6(160);
                setExperienceNode6Font(14);
            }
        } else if (activeExperienceNum == 6) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setExperienceWidth7(80);
                setExperienceHeight7(80);
                setExperienceNode7Font(10);
            } else if (size == 'med') {
                setExperienceWidth7(120);
                setExperienceHeight7(120);
                setExperienceNode7Font(12);
            } else {
                setExperienceWidth7(160);
                setExperienceHeight7(160);
                setExperienceNode7Font(14);
            }
        } else if (activeExperienceNum == 7) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setExperienceWidth8(80);
                setExperienceHeight8(80);
                setExperienceNode8Font(10);
            } else if (size == 'med') {
                setExperienceWidth8(120);
                setExperienceHeight8(120);
                setExperienceNode8Font(12);
            } else {
                setExperienceWidth8(160);
                setExperienceHeight8(160);
                setExperienceNode8Font(14);
            }
        } else if (activeExperienceNum == 8) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setExperienceWidth9(80);
                setExperienceHeight9(80);
                setExperienceNode9Font(10);
            } else if (size == 'med') {
                setExperienceWidth9(120);
                setExperienceHeight9(120);
                setExperienceNode9Font(12);
            } else {
                setExperienceWidth9(160);
                setExperienceHeight9(160);
                setExperienceNode9Font(14);
            }
        } else if (activeExperienceNum == 9) {
            highlightExperienceNodeSize(size);
            if (size == 'low') {
                setExperienceWidth10(80);
                setExperienceHeight10(80);
                setExperienceNode10Font(10);
            } else if (size == 'med') {
                setExperienceWidth10(120);
                setExperienceHeight10(120);
                setExperienceNode10Font(12);
            } else {
                setExperienceWidth10(160);
                setExperienceHeight10(160);
                setExperienceNode10Font(14);
            }
        }
    }

    const setNodeSize = (size) => {
        if (activeNode == 1) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInitialExperienceWidth(80);
                setInitialExperienceHeight(80);
                setExperienceNode1Font(10);
            } else if (size == 'med') {
                setInitialExperienceWidth(120);
                setInitialExperienceHeight(120);
                setExperienceNode1Font(12);
            } else {
                setInitialExperienceWidth(160);
                setInitialExperienceHeight(160);
                setExperienceNode1Font(14);
            }
        } else if (activeNode == 11) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInitialInterestWidth(80);
                setInitialInterestHeight(80);
                setInterestNode1Font(10);
            } else if (size == 'med') {
                setInitialInterestWidth(120);
                setInitialInterestHeight(120);
                setInterestNode1Font(12);
            } else {
                setInitialInterestWidth(160);
                setInitialInterestHeight(160);
                setInterestNode1Font(14);
            }
        } else if (activeNode == 2) {
            highlightNodeSize(size);
            if (size == 'low') {
                setExperienceWidth2(80);
                setExperienceHeight2(80);
                setExperienceNode2Font(10);
            } else if (size == 'med') {
                setExperienceWidth2(120);
                setExperienceHeight2(120);
                setExperienceNode2Font(12);
            } else {
                setExperienceWidth2(160);
                setExperienceHeight2(160);
                setExperienceNode2Font(14);
            }
        } else if (activeNode == 12) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInterestWidth2(80);
                setInterestHeight2(80);
                setInterestNode2Font(10);
            } else if (size == 'med') {
                setInterestWidth2(120);
                setInterestHeight2(120);
                setInterestNode2Font(12);
            } else {
                setInterestWidth2(160);
                setInterestHeight2(160);
                setInterestNode2Font(14);
            }
        } else if (activeNode == 3) {
            highlightNodeSize(size);
            if (size == 'low') {
                setExperienceWidth3(80);
                setExperienceHeight3(80);
                setExperienceNode3Font(10);
            } else if (size == 'med') {
                setExperienceWidth3(120);
                setExperienceHeight3(120);
                setExperienceNode3Font(12);
            } else {
                setExperienceWidth3(160);
                setExperienceHeight3(160);
                setExperienceNode3Font(14);
            }
        } else if (activeNode == 13) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInterestWidth3(80);
                setInterestHeight3(80);
                setInterestNode3Font(10);
            } else if (size == 'med') {
                setInterestWidth3(120);
                setInterestHeight3(120);
                setInterestNode3Font(12);
            } else {
                setInterestWidth3(160);
                setInterestHeight3(160);
                setInterestNode3Font(14);
            }
        } else if (activeNode == 4) {
            highlightNodeSize(size);
            if (size == 'low') {
                setExperienceWidth4(80);
                setExperienceHeight4(80);
                setExperienceNode4Font(10);
            } else if (size == 'med') {
                setExperienceWidth4(120);
                setExperienceHeight4(120);
                setExperienceNode4Font(12);
            } else {
                setExperienceWidth4(160);
                setExperienceHeight4(160);
                setExperienceNode4Font(14);
            }
        } else if (activeNode == 14) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInterestWidth4(80);
                setInterestHeight4(80);
                setInterestNode4Font(10);
            } else if (size == 'med') {
                setInterestWidth4(120);
                setInterestHeight4(120);
                setInterestNode4Font(12);
            } else {
                setInterestWidth4(160);
                setInterestHeight4(160);
                setInterestNode4Font(14);
            }
        } else if (activeNode == 5) {
            highlightNodeSize(size);
            if (size == 'low') {
                setExperienceWidth5(80);
                setExperienceHeight5(80);
                setExperienceNode5Font(10);
            } else if (size == 'med') {
                setExperienceWidth5(120);
                setExperienceHeight5(120);
                setExperienceNode5Font(12);
            } else {
                setExperienceWidth5(160);
                setExperienceHeight5(160);
                setExperienceNode5Font(14);
            }
        } else if (activeNode == 15) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInterestWidth5(80);
                setInterestHeight5(80);
                setInterestNode5Font(10);
            } else if (size == 'med') {
                setInterestWidth5(120);
                setInterestHeight5(120);
                setInterestNode5Font(12);
            } else {
                setInterestWidth5(160);
                setInterestHeight5(160);
                setInterestNode5Font(14);
            }
        } else if (activeNode == 6) {
            highlightNodeSize(size);
            if (size == 'low') {
                setExperienceWidth6(80);
                setExperienceHeight6(80);
                setExperienceNode6Font(10);
            } else if (size == 'med') {
                setExperienceWidth6(120);
                setExperienceHeight6(120);
                setExperienceNode6Font(12);
            } else {
                setExperienceWidth6(160);
                setExperienceHeight6(160);
                setExperienceNode6Font(14);
            }
        } else if (activeNode == 16) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInterestWidth6(80);
                setInterestHeight6(80);
                setInterestNode6Font(10);
            } else if (size == 'med') {
                setInterestWidth6(120);
                setInterestHeight6(120);
                setInterestNode6Font(12);
            } else {
                setInterestWidth6(160);
                setInterestHeight6(160);
                setInterestNode6Font(14);
            }
        } else if (activeNode == 7) {
            highlightNodeSize(size);
            if (size == 'low') {
                setExperienceWidth7(80);
                setExperienceHeight7(80);
                setExperienceNode7Font(10);
            } else if (size == 'med') {
                setExperienceWidth7(120);
                setExperienceHeight7(120);
                setExperienceNode7Font(12);
            } else {
                setExperienceWidth7(160);
                setExperienceHeight7(160);
                setExperienceNode7Font(14);
            }
        } else if (activeNode == 17) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInterestWidth7(80);
                setInterestHeight7(80);
                setInterestNode7Font(10);
            } else if (size == 'med') {
                setInterestWidth7(120);
                setInterestHeight7(120);
                setInterestNode7Font(12);
            } else {
                setInterestWidth7(160);
                setInterestHeight7(160);
                setInterestNode7Font(14);
            }
        } else if (activeNode == 8) {
            highlightNodeSize(size);
            if (size == 'low') {
                setExperienceWidth8(80);
                setExperienceHeight8(80);
                setExperienceNode8Font(10);
            } else if (size == 'med') {
                setExperienceWidth8(120);
                setExperienceHeight8(120);
                setExperienceNode8Font(12);
            } else {
                setExperienceWidth8(160);
                setExperienceHeight8(160);
                setExperienceNode8Font(14);
            }
        } else if (activeNode == 18) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInterestWidth8(80);
                setInterestHeight8(80);
                setInterestNode8Font(10);
            } else if (size == 'med') {
                setInterestWidth8(120);
                setInterestHeight8(120);
                setInterestNode8Font(12);
            } else {
                setInterestWidth8(160);
                setInterestHeight8(160);
                setInterestNode8Font(14);
            }
        } else if (activeNode == 9) {
            highlightNodeSize(size);
            if (size == 'low') {
                setExperienceWidth9(80);
                setExperienceHeight9(80);
                setExperienceNode9Font(10);
            } else if (size == 'med') {
                setExperienceWidth9(120);
                setExperienceHeight9(120);
                setExperienceNode9Font(12);
            } else {
                setExperienceWidth9(160);
                setExperienceHeight9(160);
                setExperienceNode9Font(14);
            }
        } else if (activeNode == 19) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInterestWidth9(80);
                setInterestHeight9(80);
                setInterestNode9Font(10);
            } else if (size == 'med') {
                setInterestWidth9(120);
                setInterestHeight9(120);
                setInterestNode9Font(12);
            } else {
                setInterestWidth9(160);
                setInterestHeight9(160);
                setInterestNode9Font(14);
            }
        } else if (activeNode == 10) {
            highlightNodeSize(size);
            if (size == 'low') {
                setExperienceWidth10(80);
                setExperienceHeight10(80);
                setExperienceNode10Font(10);
            } else if (size == 'med') {
                setExperienceWidth10(120);
                setExperienceHeight10(120);
                setExperienceNode10Font(12);
            } else {
                setExperienceWidth10(160);
                setExperienceHeight10(160);
                setExperienceNode10Font(14);
            }
        } else if (activeNode == 20) {
            highlightNodeSize(size);
            if (size == 'low') {
                setInterestWidth10(80);
                setInterestHeight10(80);
                setInterestNode10Font(10);
            } else if (size == 'med') {
                setInterestWidth10(120);
                setInterestHeight10(120);
                setInterestNode10Font(12);
            } else {
                setInterestWidth10(160);
                setInterestHeight10(160);
                setInterestNode10Font(14);
            }
        }
    }

    /* Functions that highlight size/color selections on modal (Limit of 10 of Each) */
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

    const highlightNodeSize = (size) => {
        if (size == 'low') {
            setBorderWidthNodeLow(2);
            setBorderWidthNodeMed(0);
            setBorderWidthNodeHigh(0);
        } else if (size == 'med') {
            setBorderWidthNodeLow(0);
            setBorderWidthNodeMed(2);
            setBorderWidthNodeHigh(0);
        } else {
            setBorderWidthNodeLow(0);
            setBorderWidthNodeMed(0);
            setBorderWidthNodeHigh(2);

        }
    }

    const highlightSelectionNode = (color) => {
        if (color == '#EB7A4A') {
            borderWidthNodeOrange = 2;
            borderWidthNodeYellow = 0;
            borderWidthNodeRed = 0;
            borderWidthNodeBlue = 0;
            borderWidthNodeGreen = 0;
            borderWidthNodePurple = 0;
        } else if (color == '#FF9800') {
            borderWidthNodeOrange = 0;
            borderWidthNodeYellow = 2;
            borderWidthNodeRed = 0;
            borderWidthNodeBlue = 0;
            borderWidthNodeGreen = 0;
            borderWidthNodePurple = 0;
        } else if (color == '#DA6970') {
            borderWidthNodeOrange = 0;
            borderWidthNodeYellow = 0;
            borderWidthNodeRed = 2;
            borderWidthNodeBlue = 0;
            borderWidthNodeGreen = 0;
            borderWidthNodePurple = 0;
        } else if (color == '#6283FA') {
            borderWidthNodeOrange = 0;
            borderWidthNodeYellow = 0;
            borderWidthNodeRed = 0;
            borderWidthNodeBlue = 2;
            borderWidthNodeGreen = 0;
            borderWidthNodePurple = 0;
        } else if (color == '#3BA95B') {
            borderWidthNodeOrange = 0;
            borderWidthNodeYellow = 0;
            borderWidthNodeRed = 0;
            borderWidthNodeBlue = 0;
            borderWidthNodeGreen = 2;
            borderWidthNodePurple = 0;
        } else {
            borderWidthNodeOrange = 0;
            borderWidthNodeYellow = 0;
            borderWidthNodeRed = 0;
            borderWidthNodeBlue = 0;
            borderWidthNodeGreen = 0;
            borderWidthNodePurple = 2;
        }
    }




    const highlightSelectionExperience = (color) => {
        if (color == '#EB7A4A') {
            borderWidthExperienceOrange = 2;
            borderWidthExperienceYellow = 0;
            borderWidthExperienceRed = 0;
            borderWidthExperienceBlue = 0;
            borderWidthExperienceGreen = 0;
            borderWidthExperiencePurple = 0;
        } else if (color == '#FF9800') {
            borderWidthExperienceOrange = 0;
            borderWidthExperienceYellow = 2;
            borderWidthExperienceRed = 0;
            borderWidthExperienceBlue = 0;
            borderWidthExperienceGreen = 0;
            borderWidthExperiencePurple = 0;
        } else if (color == '#DA6970') {
            borderWidthExperienceOrange = 0;
            borderWidthExperienceYellow = 0;
            borderWidthExperienceRed = 2;
            borderWidthExperienceBlue = 0;
            borderWidthExperienceGreen = 0;
            borderWidthExperiencePurple = 0;
        } else if (color == '#6283FA') {
            borderWidthExperienceOrange = 0;
            borderWidthExperienceYellow = 0;
            borderWidthExperienceRed = 0;
            borderWidthExperienceBlue = 2;
            borderWidthExperienceGreen = 0;
            borderWidthExperiencePurple = 0;
        } else if (color == '#3BA95B') {
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
        if (color == '#EB7A4A') {
            borderWidthInterestOrange = 2;
            borderWidthInterestYellow = 0;
            borderWidthInterestRed = 0;
            borderWidthInterestBlue = 0;
            borderWidthInterestGreen = 0;
            borderWidthInterestPurple = 0;
        } else if (color == '#FF9800') {
            borderWidthInterestOrange = 0;
            borderWidthInterestYellow = 2;
            borderWidthInterestRed = 0;
            borderWidthInterestBlue = 0;
            borderWidthInterestGreen = 0;
            borderWidthInterestPurple = 0;
        } else if (color == '#DA6970') {
            borderWidthInterestOrange = 0;
            borderWidthInterestYellow = 0;
            borderWidthInterestRed = 2;
            borderWidthInterestBlue = 0;
            borderWidthInterestGreen = 0;
            borderWidthInterestPurple = 0;
        } else if (color == '#6283FA') {
            borderWidthInterestOrange = 0;
            borderWidthInterestYellow = 0;
            borderWidthInterestRed = 0;
            borderWidthInterestBlue = 2;
            borderWidthInterestGreen = 0;
            borderWidthInterestPurple = 0;
        } else if (color == '#3BA95B') {
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
        countInterestColor += 1;
        if (activeInterestNum == 0) {
            setInitialInterestColor(colorVal);
            highlightSelectionInterest(colorVal);
        } else if (activeInterestNum == 1) {
            setInterest2Color(colorVal);
            highlightSelectionInterest(colorVal);
        } else if (activeInterestNum == 2) {
            setInterest3Color(colorVal);
            highlightSelectionInterest(colorVal);
        } else if (activeInterestNum == 3) {
            setInterest4Color(colorVal);
            highlightSelectionInterest(colorVal);
        } else if (activeInterestNum == 4) {
            setInterest5Color(colorVal);
            highlightSelectionInterest(colorVal);
        } else if (activeInterestNum == 5) {
            setInterest6Color(colorVal);
            highlightSelectionInterest(colorVal);
        } else if (activeInterestNum == 6) {
            setInterest7Color(colorVal);
            highlightSelectionInterest(colorVal);
        } else if (activeInterestNum == 7) {
            setInterest8Color(colorVal);
            highlightSelectionInterest(colorVal);
        } else if (activeInterestNum == 8) {
            setInterest9Color(colorVal);
            highlightSelectionInterest(colorVal);
        } else if (activeInterestNum == 9) {
            setInterest10Color(colorVal);
            highlightSelectionInterest(colorVal);
        }
    }

    const addExperienceNodeColor = (selection, colorVal) => {
        countExperienceColor += 1;
        if (activeExperienceNum == 0) {
            setInitialExperienceColor(colorVal);
            highlightSelectionExperience(colorVal)
        } else if (activeExperienceNum == 1) {
            setExperience2Color(colorVal);
            highlightSelectionExperience(colorVal)
        } else if (activeExperienceNum == 2) {
            setExperience3Color(colorVal);
            highlightSelectionExperience(colorVal)
        } else if (activeExperienceNum == 3) {
            setExperience4Color(colorVal);
            highlightSelectionExperience(colorVal)
        } else if (activeExperienceNum == 4) {
            setExperience5Color(colorVal);
            highlightSelectionExperience(colorVal)
        } else if (activeExperienceNum == 5) {
            setExperience6Color(colorVal);
            highlightSelectionExperience(colorVal)
        } else if (activeExperienceNum == 6) {
            setExperience7Color(colorVal);
            highlightSelectionExperience(colorVal)
        } else if (activeExperienceNum == 7) {
            setExperience8Color(colorVal);
            highlightSelectionExperience(colorVal)
        } else if (activeExperienceNum == 8) {
            setExperience9Color(colorVal);
            highlightSelectionExperience(colorVal)
        } else if (activeExperienceNum == 9) {
            setExperience10Color(colorVal);
            highlightSelectionExperience(colorVal)
        }
    }

    const addNodeColor = (selection, color) => {
        if (activeNode == 1) {
            setInitialExperienceColor(color);
            highlightSelectionNode(color);
        } else if (activeNode == 11) {
            setInitialInterestColor(color);
            highlightSelectionNode(color);
        } else if (activeNode == 2) {
            setExperience2Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 12) {
            setInterest2Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 3) {
            setExperience3Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 13) {
            setInterest3Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 4) {
            setExperience4Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 14) {
            setInterest4Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 5) {
            setExperience5Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 15) {
            setInterest5Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 6) {
            setExperience6Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 16) {
            setInterest6Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 7) {
            setExperience7Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 17) {
            setInterest7Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 8) {
            setExperience8Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 18) {
            setInterest8Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 9) {
            setExperience9Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 19) {
            setInterest9Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 10) {
            setExperience10Color(color);
            highlightSelectionNode(color);
        } else if (activeNode == 20) {
            setInterest10Color(color);
            highlightSelectionNode(color);
        }
    }

    /* Functions that add Interest & Experience Nodes (Limit of 10 of Each) */
    const addInterestNode = () => {
        if (activeInterestNum >= 10) {
            Alert.alert("Maximum number of Interest Nodes have been reached");
        } else {
            if (countInterestValue <= 0 || countInterestLike <= 0 || countInterestColor <= 0 || countInterestSize <= 0) {
                Alert.alert("Please fillout all fields or click 'Cancel'.");
            } else {
                countInterestValue = 0;
                countInterestLike = 0;
                countInterestColor = 0;
                countInterestSize = 0;
                if (activeInterestNum == 0) {
                    setInterestModalVisible(!interestModalVisible);
                    showInterest1 = true;
                } else if (activeInterestNum == 1) {
                    setInterestModalVisible(!interestModalVisible);
                    showInterest2 = true;
                } else if (activeInterestNum == 2) {
                    setInterestModalVisible(!interestModalVisible);
                    showInterest3 = true;
                } else if (activeInterestNum == 3) {
                    setInterestModalVisible(!interestModalVisible);
                    showInterest4 = true;
                } else if (activeInterestNum == 4) {
                    setInterestModalVisible(!interestModalVisible);
                    showInterest5 = true;
                } else if (activeInterestNum == 5) {
                    setInterestModalVisible(!interestModalVisible);
                    showInterest6 = true;
                } else if (activeInterestNum == 6) {
                    setInterestModalVisible(!interestModalVisible);
                    showInterest7 = true;
                } else if (activeInterestNum == 7) {
                    setInterestModalVisible(!interestModalVisible);
                    showInterest8 = true;
                } else if (activeInterestNum == 8) {
                    setInterestModalVisible(!interestModalVisible);
                    showInterest9 = true;
                } else if (activeInterestNum == 9) {
                    setInterestModalVisible(!interestModalVisible);
                    showInterest10 = true;
                }
            }


            for (var i = 0; i < interestArray.length + 1; i++) {
                if (interestArray[i] == true) {
                    activeInterestNum = i;
                    interestArray[i] = false;
                    break;
                }
                if (i == 10) {
                    activeInterestNum = i;
                    Alert.alert("Maximum number of Interest Nodes have been reached");
                }
            }
        }
    }

    const addExperienceNode = () => {
        if (activeInterestNum == 10) {
            Alert.alert("Maximum number of Experience Nodes have been reached");
        } else {
            if (countExperienceValue <= 0 || countExperienceLike <= 0 || countExperienceColor <= 0 || countExperienceSize <= 0) {
                Alert.alert("Please fillout all fields or click 'Cancel'.");
            } else {
                if (activeExperienceNum == 0) {
                    setExperienceModalVisible(!experienceModalVisible);
                    showExperience1 = true;
                } else if (activeExperienceNum == 1) {
                    setExperienceModalVisible(!experienceModalVisible);
                    showExperience2 = true;
                } else if (activeExperienceNum == 2) {
                    setExperienceModalVisible(!experienceModalVisible);
                    showExperience3 = true;
                } else if (activeExperienceNum == 3) {
                    setExperienceModalVisible(!experienceModalVisible);
                    showExperience4 = true;
                } else if (activeExperienceNum == 4) {
                    setExperienceModalVisible(!experienceModalVisible);
                    showExperience5 = true;
                } else if (activeExperienceNum == 5) {
                    setExperienceModalVisible(!experienceModalVisible);
                    showExperience6 = true;
                } else if (activeExperienceNum == 6) {
                    setExperienceModalVisible(!experienceModalVisible);
                    showExperience7 = true;
                } else if (activeExperienceNum == 7) {
                    setExperienceModalVisible(!experienceModalVisible);
                    showExperience8 = true;
                } else if (activeExperienceNum == 8) {
                    setExperienceModalVisible(!experienceModalVisible);
                    showExperience9 = true;
                } else if (activeExperienceNum == 9) {
                    setExperienceModalVisible(!experienceModalVisible);
                    showExperience10 = true;
                } else if (activeExperienceNum == 10) {
                    Alert.alert("Maximum number of Experience Nodes have been reached");
                }
            }

            for (var i = 0; i < experienceArray.length + 1; i++) {
                if (experienceArray[i] == true) {
                    activeExperienceNum = i;
                    experienceArray[i] = false;
                    break;
                }
                if (i == 10) {
                    activeExperienceNum = i;
                    Alert.alert("Maximum number of Experience Nodes have been reached");
                }
            }
        }

    }

    /* Functions that open Interest & Experience modals (Limit of 10 of Each) */
    const openInterestModal = () => {
        setBorderWidthInterestLow(0);
        setBorderWidthInterestMed(0);
        setBorderWidthInterestHigh(0);
        borderWidthInterestOrange = 0;
        borderWidthInterestYellow = 0;
        borderWidthInterestRed = 0;
        borderWidthInterestBlue = 0;
        borderWidthInterestGreen = 0;
        borderWidthInterestPurple = 0;
        setInterestModalVisible(true)
    }

    const openExperienceModal = () => {
        setBorderWidthExperienceLow(0);
        setBorderWidthExperienceMed(0);
        setBorderWidthExperienceHigh(0);
        borderWidthExperienceOrange = 0;
        borderWidthExperienceYellow = 0;
        borderWidthExperienceRed = 0;
        borderWidthExperienceBlue = 0;
        borderWidthExperienceGreen = 0;
        borderWidthExperiencePurple = 0;
        setExperienceModalVisible(true)
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
                        fontSize: experienceNode1Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {textValue} </Text>
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
                    borderRadius: 160 / 2,
                    backgroundColor: initialInterestColor
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: interestNode1Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest} </Text>
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
                        fontSize: experienceNode2Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperience2Value} </Text>
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
                    borderRadius: 160 / 2,
                    backgroundColor: interestColor2
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: interestNode2Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest2Value} </Text>
                </View>
            </Draggable>
        );
    }

    const experienceNode3 = () => {
        return (
            <Draggable x={130} y={130}
                onLongPress={() => getNodeData(3)}
            >
                <View style={{
                    width: experienceWidth3,
                    height: experienceHeight3,
                    backgroundColor: experienceColor3
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: experienceNode3Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperience3Value} </Text>
                </View>
            </Draggable>
        )
    }

    const interestNode3 = () => {
        return (
            <Draggable x={90} y={280}
                onLongPress={() => getNodeData(13)}
            >
                <View style={{
                    width: interestWidth3,
                    height: interestHeight3,
                    borderRadius: 160 / 2,
                    backgroundColor: interestColor3
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: interestNode3Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest3Value} </Text>
                </View>
            </Draggable>
        );
    }

    const experienceNode4 = () => {
        return (
            <Draggable x={140} y={150}
                onLongPress={() => getNodeData(4)}
            >
                <View style={{
                    width: experienceWidth4,
                    height: experienceHeight4,
                    backgroundColor: experienceColor4
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: experienceNode4Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperience4Value} </Text>
                </View>
            </Draggable>
        )
    }

    const interestNode4 = () => {
        return (
            <Draggable x={70} y={260}
                onLongPress={() => getNodeData(14)}
            >
                <View style={{
                    width: interestWidth4,
                    height: interestHeight4,
                    borderRadius: 160 / 2,
                    backgroundColor: interestColor4
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: interestNode4Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest4Value} </Text>
                </View>
            </Draggable>
        );
    }

    const experienceNode5 = () => {
        return (
            <Draggable x={170} y={200}
                onLongPress={() => getNodeData(5)}
            >
                <View style={{
                    width: experienceWidth5,
                    height: experienceHeight5,
                    backgroundColor: experienceColor5
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: experienceNode5Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperience5Value} </Text>
                </View>
            </Draggable>
        )
    }

    const interestNode5 = () => {
        return (
            <Draggable x={140} y={200}
                onLongPress={() => getNodeData(15)}
            >
                <View style={{
                    width: interestWidth5,
                    height: interestHeight5,
                    borderRadius: 160 / 2,
                    backgroundColor: interestColor5
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: interestNode5Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest5Value} </Text>
                </View>
            </Draggable>
        );
    }

    const experienceNode6 = () => {
        return (
            <Draggable x={130} y={110}
                onLongPress={() => getNodeData(6)}
            >
                <View style={{
                    width: experienceWidth6,
                    height: experienceHeight6,
                    backgroundColor: experienceColor6
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: experienceNode6Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperience6Value} </Text>
                </View>
            </Draggable>
        )
    }

    const interestNode6 = () => {
        return (
            <Draggable x={110} y={200}
                onLongPress={() => getNodeData(16)}
            >
                <View style={{
                    width: interestWidth6,
                    height: interestHeight6,
                    borderRadius: 160 / 2,
                    backgroundColor: interestColor6
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: interestNode6Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest6Value} </Text>
                </View>
            </Draggable>
        );
    }

    const experienceNode7 = () => {
        return (
            <Draggable x={130} y={100}
                onLongPress={() => getNodeData(7)}
            >
                <View style={{
                    width: experienceWidth7,
                    height: experienceHeight7,
                    backgroundColor: experienceColor7
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: experienceNode7Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperience7Value} </Text>
                </View>
            </Draggable>
        )
    }

    const interestNode7 = () => {
        return (
            <Draggable x={160} y={220}
                onLongPress={() => getNodeData(17)}
            >
                <View style={{
                    width: interestWidth7,
                    height: interestHeight7,
                    borderRadius: 160 / 2,
                    backgroundColor: interestColor7
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: interestNode7Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest7Value} </Text>
                </View>
            </Draggable>
        );
    }

    const experienceNode8 = () => {
        return (
            <Draggable x={170} y={140}
                onLongPress={() => getNodeData(8)}
            >
                <View style={{
                    width: experienceWidth8,
                    height: experienceHeight8,
                    backgroundColor: experienceColor8
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: experienceNode8Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperience8Value} </Text>
                </View>
            </Draggable>
        )
    }

    const interestNode8 = () => {
        return (
            <Draggable x={150} y={280}
                onLongPress={() => getNodeData(18)}
            >
                <View style={{
                    width: interestWidth8,
                    height: interestHeight8,
                    borderRadius: 160 / 2,
                    backgroundColor: interestColor8
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: interestNode8Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest8Value} </Text>
                </View>
            </Draggable>
        );
    }

    const experienceNode9 = () => {
        return (
            <Draggable x={130} y={190}
                onLongPress={() => getNodeData(9)}
            >
                <View style={{
                    width: experienceWidth9,
                    height: experienceHeight9,
                    backgroundColor: experienceColor9
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: experienceNode9Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperience9Value} </Text>
                </View>
            </Draggable>
        )
    }

    const interestNode9 = () => {
        return (
            <Draggable x={120} y={250}
                onLongPress={() => getNodeData(19)}
            >
                <View style={{
                    width: interestWidth9,
                    height: interestHeight9,
                    borderRadius: 160 / 2,
                    backgroundColor: interestColor9
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: interestNode9Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest9Value} </Text>
                </View>
            </Draggable>
        );
    }

    const experienceNode10 = () => {
        return (
            <Draggable x={170} y={110}
                onLongPress={() => getNodeData(10)}
            >
                <View style={{
                    width: experienceWidth10,
                    height: experienceHeight10,
                    backgroundColor: experienceColor10
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: experienceNode10Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newExperience10Value} </Text>
                </View>
            </Draggable>
        )
    }

    const interestNode10 = () => {
        return (
            <Draggable x={170} y={280}
                onLongPress={() => getNodeData(20)}
            >
                <View style={{
                    width: interestWidth10,
                    height: interestHeight10,
                    borderRadius: 160 / 2,
                    backgroundColor: interestColor10
                }} >
                    <Text style={{
                        fontFamily: 'Mont-Bold',
                        fontSize: interestNode10Font,
                        textAlign: "center",
                        paddingTop: "40%",
                        justifyContent: 'center',
                        margin: 10,
                    }}> {newInterest10Value} </Text>
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
                            <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 28, paddingRight: 5 }}>Profile</Text>
                            <YellowDot width={20} height={20} />
                        </View>
                        <View style={styles.screenLogo}>
                            <Pressable
                                onPress={() => setNotifModalVisible(true)}
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed
                                            ? 'rgb(210, 230, 255)'
                                            : '#fff',
                                    }]}
                            >
                                <Icon name="ios-notifications-sharp" size={28} ></Icon>
                            </Pressable>

                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', height: 5, backgroundColor: 'black', width: '90%', }} />
                </View>
                <View style={{ paddingTop: '7%' }}>
                    <TextInput
                        style={styles.bioInput}
                        onChangeText={(val) => setBioValue(val)}
                        value={bioValue}
                        placeholder='Place your bio here'
                    />
                </View>
                <View style={styles.screen}>



                    {/* Notificaitons Modal */}
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
                                    <Pressable
                                        onPress={() => setNotifModalVisible(!notifModalVisible)}
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? 'rgb(210, 230, 255)'
                                                    : '#fff',
                                            }]}
                                    >
                                        <Icon name="ios-close-circle-outline" size={20}></Icon>
                                    </Pressable>

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
                                            <Pressable
                                                onPress={() => setNotifModalVisible(!notifModalVisible)}
                                                style={({ pressed }) => [
                                                    {
                                                        backgroundColor: pressed
                                                            ? 'rgb(210, 230, 255)'
                                                            : '#DDDDDD',
                                                    }]}
                                            >
                                                <Profile_Pic width={90} height={'90%'}></Profile_Pic>
                                            </Pressable>

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


                    {/* Help Modal */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={helpModalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setHelpModalVisible(!helpModalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalViewHelp}>
                                <View style={{ paddingLeft: '93%' }}>
                                    <Pressable
                                        onPress={() => setHelpModalVisible(!helpModalVisible)}
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? 'rgb(210, 230, 255)'
                                                    : '#fff',
                                            }]}
                                    >
                                        <Icon name="ios-close-circle-outline" size={20}></Icon>
                                    </Pressable>

                                </View>
                                <View style={{ paddingBottom: 10, flexDirection: 'column', }}>
                                    <Text style={styles.modalText}>Help</Text>
                                    <View style={{ alignSelf: 'center', height: 5, backgroundColor: '#000', width: 300, }} />
                                </View>
                                <View style={{}}>
                                    <Wizard >
                                        <Wizard.Step>
                                            <View style={{}} >
                                                <View style={{}}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                        <Experiences width={120} height={25} />
                                                    </View>
                                                    <Text style={{ fontFamily: 'Mont-Regular', fontSize: 13, paddingTop: 10, maxWidth: 700 }}>
                                                        Experiences are what you might see on a traditional resume. For example, a profession, degree, or club... something you’ve done!
                                                        On your profile, they’re represented as squares.
                                                    </Text>
                                                </View>
                                            </View>
                                        </Wizard.Step >
                                        <Wizard.Step>
                                            <View style={{}} >
                                                <View style={{}}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                        <Interests width={120} height={25} />
                                                    </View>
                                                    <Text style={{ fontFamily: 'Mont-Regular', fontSize: 13, paddingTop: 10, }}>
                                                        Interests are aspirations, topics, or hobbies.
                                                        They may be related to your experiences, or not! On your profile, they’re represented as circles.
                                                    </Text>
                                                </View>
                                            </View>
                                        </Wizard.Step >
                                        <Wizard.Step>
                                            <View style={{}} >
                                                <View style={{}}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                        <Likes width={120} height={25} />
                                                    </View>
                                                    <Text style={{ fontFamily: 'Mont-Regular', fontSize: 12, paddingTop: 10, }}>
                                                        Likes are tags that you can apply to an experience or interest to indicate what you like about it.
                                                        Likes help us recommend new people or interests to you.
                                                    </Text>
                                                </View>
                                            </View>
                                        </Wizard.Step >
                                        <Wizard.Step>
                                            <View style={{}}>
                                                <View style={{}}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                        <Sizes width={120} height={25} />
                                                    </View>
                                                    <Text style={{ fontFamily: 'Mont-Regular', fontSize: 12, paddingTop: 10, }}>
                                                        The size of an item can indicate its importance to you, since larger nodes will be easier for other users to see on your profile.
                                                        Notice that larger nodes will also appear brighter in color.
                                                    </Text>
                                                </View>
                                            </View>
                                        </Wizard.Step >
                                        <Wizard.Step>
                                            <View style={{}} >
                                                <View style={{}}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                        <Color width={120} height={25} />
                                                    </View>
                                                    <Text style={{ fontFamily: 'Mont-Regular', fontSize: 12, paddingTop: 10, }}>
                                                        You can use color to group the items on your profile.
                                                        For example, you might make all of the interests and experiences related to “real estate” blue, to show they’re conceptually related to you.
                                                    </Text>
                                                </View>
                                            </View>
                                        </Wizard.Step >
                                    </Wizard >
                                </View>
                            </View>
                        </View>
                    </Modal>

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
                                <TextInput
                                    style={styles.inputNode}
                                    onChangeText={(val) => setNodeTextValue(val)}
                                    value={text1}
                                    placeholder='Edit node'
                                    defaultValue={nodeValue}
                                    multiline={true}
                                    blurOnSubmit={true}

                                />
                                {/* <Text style={styles.modalText}>{nodeValue}</Text> */}
                                <View style={{ paddingBottom: 5 }}>
                                    <TextInput
                                        style={styles.modalNodeText}
                                        onChangeText={(textValue) => setNodeTextLike(textValue)}
                                        value={text1}
                                        placeholder='Edit likes'
                                        defaultValue={likeValue}
                                        multiline={true}
                                        blurOnSubmit={true}

                                    />
                                </View>
                                <View style={{ paddingBottom: 8 }}>
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
                                                    borderWidth: borderWidthNodeLow

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
                                                    borderWidth: borderWidthNodeMed

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
                                                    borderWidth: borderWidthNodeHigh

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
                                        onPress={() => deleteNode()}
                                    >
                                        <Text style={styles.textStyle}>Delete</Text>
                                    </Pressable>
                                    <Text style={{ color: colors.white }}>This</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setNodeModalVisible(!nodeModalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Done</Text>
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
                                        value={text2}
                                        placeholder='Add another interest'
                                        multiline={true}
                                        blurOnSubmit={true}

                                    />
                                </View>
                                <View style={{ paddingBottom: 8 }}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(valText) => setInterestLike(valText)}
                                        value={text2}
                                        placeholder='What do you like about it?'
                                        multiline={true}
                                        blurOnSubmit={true}

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
                                        value={text3}
                                        placeholder='Add another experience'
                                        multiline={true}
                                        blurOnSubmit={true}

                                    />
                                </View>
                                <View style={{ paddingBottom: 8 }}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(valText) => setExperienceLike(valText)}
                                        value={text3}
                                        placeholder='What do you like about it?'
                                        multiline={true}
                                        blurOnSubmit={true}

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
                        <Draggable x={320} y={540}
                            onShortPressRelease={() => setHelpModalVisible(true)}
                        >
                            <View style={styles.experienceButton}>

                                <HelpIcon width={40} height={'40%'} />
                            </View>
                        </Draggable>
                        <Draggable x={30} y={460}
                            onShortPressRelease={() => openExperienceModal()}
                        >
                            <View style={styles.experienceButton}>

                                <RecAddBTN width={50} height={'50%'} />
                            </View>
                        </Draggable>
                        <Draggable x={30} y={520}
                            onShortPressRelease={() => openInterestModal()}
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

                        {showInterest3 && interestNode3()}
                        {showExperience3 && experienceNode3()}

                        {showInterest4 && interestNode4()}
                        {showExperience4 && experienceNode4()}

                        {showInterest5 && interestNode5()}
                        {showExperience5 && experienceNode5()}

                        {showInterest6 && interestNode6()}
                        {showExperience6 && experienceNode6()}

                        {showInterest7 && interestNode7()}
                        {showExperience7 && experienceNode7()}

                        {showInterest8 && interestNode8()}
                        {showExperience8 && experienceNode8()}

                        {showInterest9 && interestNode9()}
                        {showExperience9 && experienceNode9()}

                        {showInterest10 && interestNode10()}
                        {showExperience10 && experienceNode10()}
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

    centeredViewHelp: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
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


    modalViewHelp: {
        //height: 400,
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
    bioInput: {
        fontFamily: 'Mont-Regular',
        textAlign: 'center'
    },

    input: {
        paddingBottom: 10,
        fontFamily: 'Mont-Regular',
        textAlign: 'center',
    },
    inputNode: {
        paddingBottom: 10,
        fontFamily: 'Mont-Bold',
        fontSize: 20,
        textAlign: 'center'
    },
    CircleShape: {

    },
});



{/* <Draggable x={200} y={300} renderSize={80} renderColor='#F2BA4C' isCircle renderText='Travel'/> */ }