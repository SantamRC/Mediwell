import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SugarLevel from '../Home/SugarLevel';

const Recommendations = () => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.heading}>Recommendation</Text>
        <Text style={{...styles.heading, color: '#50B2D5', fontSize: 20}}>
          Aerobic Exercise
        </Text>
        <SugarLevel />
      </View>
      <View style={styles.view2}></View>
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginLeft: 20,
    flex: 1,
    marginRight: 'auto',
  },
  view1: {
    flex: 1,
    backgroundColor: '#292E45',
    alignItems: 'center',
  },
  view2: {
    flex: 2,
  },
});
