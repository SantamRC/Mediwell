import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Exercises from './Exercises';
import SugarLevel from './SugarLevel';
import IOB from './IOB';

const Home = () => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.heading}>Home</Text>
        <SugarLevel />
        <IOB />
      </View>
      <View style={styles.view2}>
        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#292E45'}}>
          Prepare for Excercise
        </Text>
        <Exercises />
      </View>
    </View>
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
