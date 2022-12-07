// import { StatusBar } from 'expo-status-bar';
// import Tooltip from "react-native-walkthrough-tooltip";
// import React from "react";
// import { useCallback, useState } from 'react';
// import { Alert, StyleSheet, Text, View, SafeAreaView, Button, Modal, TextInput, navigation, TouchableOpacity, Platform, Pressable } from 'react-native';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import Draggable from 'react-native-draggable';
// import colors from '../assets/colors/colors';
// import store from './store';
// import YellowDot from '../assets/components/yellow_dot.svg';
// import Icon from 'react-native-vector-icons/Ionicons';
// // import Red from '../assets/components/red.svg';
// // import Yellow from '../assets/components/yellow.svg';
// // import Orange from '../assets/components/orange.svg';
// // import Blue from '../assets/components/blue.svg';
// // import Green from '../assets/components/green.svg';
// // import Purple from '../assets/components/purple.svg';
// import CircleAddBTN from '../assets/components/circle_add_btn.svg';
// import RecAddBTN from '../assets/components/Rectangle_add_btn.svg';
// import HelpIcon from '../assets/components/help_icon.svg';
// import Experiences from '../assets/components/experience_title.svg';
// import Interests from '../assets/components/interests_title.svg';
// import Likes from '../assets/components/likes_title.svg';
// import Sizes from '../assets/components/size_title.svg';
// import Color from '../assets/components/color_title.svg';
// import Wizard from '../screens/Wizard.js';
// import Profile_Pic from '../assets/components/profile_pic.svg';
// import Crown from '../assets/components/crown.svg'

// export default function Messages() {
//     const [notifModalVisible, setNotifModalVisible] = React.useState(false);

//     const [fontsLoaded] = useFonts({
//         'Mont-Bold': require('../assets/fonts/Mont-Trial-Bold.ttf'),
//         'Mont-Black': require('../assets/fonts/Mont-Trial-Black.ttf'),
//         'Mont-Heavy': require('../assets/fonts/Mont-Trial-Heavy.ttf'),
//         'Mont-Light': require('../assets/fonts/Mont-Trial-ExtraLight.ttf'),
//         'Mont-Regular': require('../assets/fonts/Mont-Trial-Regular.ttf')
//     });

//     const onLayoutRootView = useCallback(async () => {
//         if (fontsLoaded) {
//             await SplashScreen.hideAsync();
//         }
//     }, [fontsLoaded]);

//     if (!fontsLoaded) {
//         return null;
//     }

//     return (
//         <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
//             <View style={styles.topSection}>
//                 <View style={styles.header}>
//                     <View style={styles.screenLogo}>
//                         <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 28, paddingRight: 5 }}>Bob</Text>
//                         <YellowDot width={20} height={20} />
//                     </View>
//                 </View>
//                 <View style={{ alignSelf: 'center', height: 5, backgroundColor: 'black', width: '90%', }} />
//             </View>
//             <View style={{}}>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: '5%', alignItems: 'center' }}>
//                     <View>
//                         <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 20 }}>View Network</Text>
//                         <View style={{ alignSelf: 'center', height: 2, backgroundColor: 'black', width: '100%', }} />
//                     </View>
//                     <View>
//                         <View style={{
//                             width: 90,
//                             height: 40,
//                             borderRadius: '25%',
//                             backgroundColor: '#DDDDDD'
//                         }} >
//                             <Text style={{
//                                 fontFamily: 'Mont-Bold',
//                                 color: colors.black,
//                                 fontSize: 15,
//                                 textAlign: "center",
//                                 paddingTop: '5%',
//                                 justifyContent: 'center',
//                                 margin: 10,
//                             }}>
//                                 Follow
//                         </Text>
//                         </View>

//                     </View>
//                 </View>
//                 <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '5%', width: '90%', paddingLeft: '8%' }}>
//                     <Text style={{ textAlign: 'center' }}>
//                         Professional surfer, looking to explore the world by surfing it!
//                     </Text>
//                 </View>
//             </View>
//             <View>
//                 <View style={{ flexDirection: 'column', paddingLeft: '10%', paddingTop: '10%', justifyContent: 'space-evenly' }}>
//                     <View>
//                         <View style={{
//                             width: 150,
//                             height: 150,
//                             backgroundColor: '#6283FA'
//                         }} >
//                             <Text style={{
//                                 fontFamily: 'Mont-Bold',
//                                 fontSize: 20,
//                                 textAlign: "center",
//                                 paddingTop: "40%",
//                                 justifyContent: 'center',
//                                 margin: 10,
//                             }}> Travel </Text>
//                         </View>
//                     </View>
//                     <View style={{ paddingTop: '15%' }}>
//                         <View style={{
//                             width: 150,
//                             height: 150,
//                             borderRadius: 150 / 2,
//                             backgroundColor: '#6283FA'
//                         }} >
//                             <Text style={{
//                                 fontFamily: 'Mont-Bold',
//                                 fontSize: 20,
//                                 textAlign: "center",
//                                 paddingTop: "40%",
//                                 justifyContent: 'center',
//                                 margin: 10,
//                             }}> Travel </Text>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>

//     );
// };


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",

//     },

//     topSection: {
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignContent: 'center'
//     },

//     screenLogo: {
//         flexDirection: "row",
//         alignItems: "center",
//         paddingBottom: "5%"
//     },

//     header: {
//         paddingTop: 30,
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         paddingHorizontal: 20,
//     },
// });





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

export default function Messages() {
    const [notifModalVisible, setNotifModalVisible] = React.useState(false);

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
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.topSection}>
                <View style={styles.header}>
                    <View style={styles.screenLogo}>
                        <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 28, paddingRight: 5 }}>Messages</Text>
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: '5%' }}>
                <View>
                    <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 20 }}>All Following</Text>
                </View>
                <View>
                    <Text style={{ fontFamily: 'Mont-Bold', color: colors.black, fontSize: 20 }}>Mentors</Text>
                </View>
            </View>
            <View style={{ paddingTop: '5%', flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{
                    width: 330,
                    height: 100,
                    borderRadius: '25%',
                    backgroundColor: '#DDDDDD',
                    borderWidth: 3
                }} >
                    <View style={{ paddingTop: '2%', paddingLeft: '20%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: 220 }}>
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? 'rgb(210, 230, 255)'
                                        : '#DDDDDD',
                                }]}
                        >
                            <Profile_Pic width={90} height={'90%'}></Profile_Pic>
                        </Pressable>
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
                            <View style={{ paddingLeft: 10, }}>
                                <Pressable
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? 'rgb(210, 230, 255)'
                                                : '#DDDDDD',
                                        }]}
                                >
                                    <Icon name="ios-chatbox-outline" size={25}></Icon>
                                </Pressable>

                            </View>
                        </View>

                    </View>
                </View>
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
});
