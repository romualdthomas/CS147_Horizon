import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useCallback, useState } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, Image, Pressable, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import YellowDot from '../assets/components/yellow_dot.svg';
import Profile_Pic from '../assets/components/profile_pic.svg';
import Crown from '../assets/components/crown.svg'






SplashScreen.preventAutoHideAsync();


const UpdatePostElyse = ({navigation}) => {
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
  const interestNode = ({input}) => {
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
                }}> {input} </Text>
            </View>
        </Draggable>
    );
}



    
const elyseMessage = () => {
  return (
      <View style={{ paddingTop: '3%', flexDirection: 'row', justifyContent: 'center' }}>
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
                      style={({ pressed }) => [
                          {
                              backgroundColor: pressed
                                  ? 'rgb(210, 230, 255)'
                                  : '#DDDDDD',
                          }]}
                  >
                      <Profile_Pic width={90} height={'90%'}></Profile_Pic>
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
                      <View style={{ paddingLeft: 10, }}>
                          <TouchableOpacity
                              onPress={() => navigation.navigate("ChatElyse")}
                              style={({ pressed }) => [
                                  {
                                      backgroundColor: pressed
                                          ? 'rgb(210, 230, 255)'
                                          : '#DDDDDD',
                                  }]}
                          >
                              <Icon name="ios-chatbox-outline" size={25}></Icon>
                          </TouchableOpacity>

                      </View>
                  </View>

              </View>
          </View>
      </View>
  )
}







  return (
    





    
  <View style={styles.container}>
    <View style={{flexDirection: 'row', alignItems:'center', height: '6%', marginBottom: 8}}>
      <View style={{alignSelf: 'center', paddingBottom: "0%"}}>
      <Icon name="bulb-outline" size={20} color={'blue'}/>
    </View>
      <Text style={{ fontFamily: 'Mont-Heavy', fontSize: '17%', paddingHorizontal: '2%', paddingBottom: '0%'}}>
            Elyse added Cooking as an interest!
          </Text>
         
    </View>
      <View style={{paddingLeft: '6%'}}>
        <View style={{flexDirection:"row", alignContent: 'center', alignItems: 'center'}}>



























          
          <Icon style={{ paddingRight: 5, color:'black' }} name="heart-outline" size={"20%"} ></Icon>
          <Text style={{color: 'black', marginRight: 2}} numberOfLines={1}> Trying something new! </Text>
        </View>
        <View style={{flexDirection:"row", alignContent: 'center', alignItems: 'center'}}>
          <Icon style={{ paddingRight: 5 }} name="heart-outline" size={"20%"} ></Icon>
          <Text style={{color: 'black', marginRight: 2}} numberOfLines={1}> Childhood passion </Text>
        </View>
      </View>
      <View style={{alignContent:'center', alignItems:'center', width: '100%'}}>
        <Image
        source={require('../assets/cookingNode.png')}
        style={styles.logo}
        />
      </View>








      {elyseMessage()}


      











      
      <View style={{ alignSelf: 'center', height: 4, backgroundColor: 'grey', width: '90%', marginTop: '4%' }} />

  </View>
    
  );
};

export default UpdatePostElyse;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    width: '100%',
    paddingHorizontal: '5%',
    //borderWidth: 1,
    marginBottom: "3%",
    height:330

  },
  index: {
    color:"grey",
    marginRight: "2%",
  },
  imageStyle: {

  },
  index: {
    color:"grey",
    marginRight: "2%",
  },
  logo: {
    width:'30%',
    height:100,
    resizeMode: 'contain'
  },
  leftAppButtonContainer: {
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
  rightAppButtonContainer: {
    elevation: 8,
    // backgroundColor: "#34495E",
    backgroundColor: "#34495E",
    borderRadius: '20%',
    paddingVertical: '5%',
    paddingHorizontal: "8%",
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: '4%',
    shadowOffset : { width: '-1%', height: '15%'},
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
    backgroundColor: "#EFF1E7",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 40,
    elevation: 5,
    width: '80%'
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
    backgroundColor: "#04183D",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  descriptionTitle: {
    marginBottom: 10,
    fontFamily:'Mont-Heavy',
  },
  description: {
    marginBottom: 15,
  },
});