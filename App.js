import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Mont-Bold': require('./assets/fonts/Mont-Trial-Bold.ttf'),
    'Mont-Black': require('./assets/fonts/Mont-Trial-Black.ttf'),
    'Mont-Heavy': require('./assets/fonts/Mont-Trial-Heavy.ttf'),
    'Mont-Light': require('./assets/fonts/Mont-Trial-ExtraLight.ttf'),
    'Mont-Regular': require('./assets/fonts/Mont-Trial-Regular.ttf')
  });

  return (
    <>
      <View style={styles.title}>
        <Text style={{ fontFamily: 'Mont-Heavy', color: colors.black }}> Career Backpack  😁</Text>
        <Icon name="ios-arrow-forward-outline" size={30} color={colors.black} />
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <Text style={{ fontFamily: 'Mont-Regular', color: colors.black }}>
          Connecting individuals with shared backgrounds as they look to make
          <Text style={{ fontFamily: 'Mont-Regular', color: colors.evergreen }}>career</Text> pivots
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-end',
    marginRight: 210,
    marginTop: 70,
    //position: 'absolute', // add if dont work with above
  }
});
