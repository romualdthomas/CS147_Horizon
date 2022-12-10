import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useCallback, useState } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, Image, Pressable, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import YellowDot from '../assets/components/yellow_dot.svg';




SplashScreen.preventAutoHideAsync();


const RecIntPostEducation = () => {
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



    








  return (
    





    
  <View style={styles.container}>
    <View style={{flexDirection: 'row', alignItems:'center', height: '7%', marginBottom: 8}}>
      <View style={{alignSelf: 'flex-end', paddingBottom: ".5%"}}>
        <YellowDot width={15} />
    </View>
      <Text style={{ fontFamily: 'Mont-Heavy', fontSize: '17%', paddingHorizontal: '2%', paddingBottom: '2%'}}>
            Explore a new interest PP!
          </Text>
         
    </View>
      <View style={{paddingLeft: '6%'}}>
        <View style={{flexDirection:"row", alignContent: 'center', alignItems: 'center'}}>
          <Icon style={{ paddingRight: 5, color:'black' }} name="heart-outline" size={"20%"} ></Icon>
          <Text style={{color: 'black', marginRight: 2}} numberOfLines={1}> Working with people </Text>
        </View>
        <View style={{flexDirection:"row", alignContent: 'center', alignItems: 'center'}}>
          <Icon style={{ paddingRight: 5 }} name="heart-outline" size={"20%"} ></Icon>
          <Text style={{color: 'black', width: "20%", marginRight: 2}} numberOfLines={1}> Travelling </Text>
        </View>
      </View>
      <View style={{alignContent:'center', alignItems:'center', width: '100%'}}>
        <Image
        source={require('../assets/tourGuidingNode.png')}
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
            <Text style={{ fontFamily: 'Mont-Heavy', fontSize: '17%', paddingLeft: '2%', paddingBottom: '2%', alignSelf: 'center'}}>
              Tour Guiding</Text>
            <View style={{height: 2, backgroundColor: '#04183D', width: 200, marginBottom: 15, alignSelf: 'center'}} />
            <Text style={styles.descriptionTitle}> Description </Text>
            <Text style={styles.description}> A tour guide is a person who provides assistance,
             information on cultural, historical and contemporary heritage to people on organized sightseeing
              and individual clients at educational establishments, religious and historical sites such as;
               museums, and at various venues of tourist attraction resorts.
                Tour guides also take clients on outdoor guided trips.
                 These trips include hiking, whitewater rafting, mountaineering,
                  alpine climbing, rock climbing, ski and snowboarding in the backcountry, fishing, and biking. </Text>
            <Text style={styles.descriptionTitle}> Common Likes </Text>
            <Text style={styles.description}> Here is what other users like about tour guiding: </Text>
            <View style={{flexDirection:"row", alignContent: 'center', alignItems: 'center'}}>
              <AntDesign style={{ paddingRight: 5}} name="hearto" size={"20%"} ></AntDesign>
              <Text style={{color: 'black', marginRight: 2}} numberOfLines={1}> Travelling </Text>
            </View>
            
            <View style={{flexDirection:"row", alignContent: 'center', alignItems: 'center'}}>
            <AntDesign style={{ paddingRight: 5 }} name="hearto" size={"20%"} ></AntDesign>
              <Text style={{color: 'black', marginRight: 2}} numberOfLines={1}> Working with people </Text>
            </View>
            <View style={{flexDirection:"row", alignContent: 'center', alignItems: 'center', paddingBottom: 12}}>
            <AntDesign style={{ paddingRight: 5 }} name="hearto" size={"20%"} ></AntDesign>
              <Text style={{color: 'black', marginRight: 2}} numberOfLines={1}> Spending time outdoors </Text>
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
      
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.leftAppButtonContainer}>
          <Text style={styles.appButtonText}>Learn More</Text>
        </TouchableOpacity>

              



        <TouchableOpacity onPress={() => navigation.navigate("LikesTwo")} style={styles.rightAppButtonContainer}>
          <Text style={styles.appButtonText}>Add to Profile</Text>
        </TouchableOpacity>

      </View>
      <View style={{ alignSelf: 'center', height: 4, backgroundColor: 'grey', width: '90%', marginBottom:'-15%' }} />

  </View>
    
  );
};

export default RecIntPostEducation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    width: '100%',
    paddingHorizontal: '5%',
    height:300
    //borderWidth: 1,
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