import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import Exercises from './Exercises';
import SugarLevel from './SugarLevel';
import IOB from './IOB';
import Insulin from '../Insulin/Insulin';
import Exercise from '../Exercise/Exercise';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.heading}>Home</Text>
        <SugarLevel />
        <IOB navigation={navigation} />
      </View>
      <View style={styles.view2}>
        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#292E45'}}>
          Prepare for Excercise
        </Text>
        <Exercises navigation={navigation} />
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

const Home = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="IOB" component={IOB} />
      <Stack.Screen name="Insulin" component={Insulin} />
      <Stack.Screen name="Exercise" component={Exercise} />
    </Stack.Navigator>

  </NavigationContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  view1: {
    flex: 2,
    backgroundColor: '#292E45',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginLeft: '5%',
    marginTop: '2%',
    flex: 0.6,
    marginRight: 'auto',
  },
});
