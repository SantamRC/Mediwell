import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import SugarLevel from '../Home/SugarLevel';

const Recommendations = ({navigation, route}) => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.heading}>Recommendation</Text>
        <Text style={{...styles.heading, color: '#50B2D5', fontSize: 20}}>
          Aerobic Exercise
        </Text>
        <SugarLevel />
        <View style={{flex: 0.4}}></View>
      </View>
      <View style={styles.view2}>
        <Text style={styles.recommendation_text}>{route.params.text}</Text>
      </View>

      <View style={styles.view3}>
        <Button
          mode="outlined"
          color="#292E45"
          style={styles.button}
          onPress={() => navigation.navigate('Select')}>
          Back
        </Button>
        <Button
          mode="contained"
          color="#292E45"
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          Done
        </Button>
      </View>
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
    flex: 0.7,
    marginRight: 'auto',
  },
  view1: {
    flex: 1,
    backgroundColor: '#292E45',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    width: '30%',
    marginBottom: '5%',
    width: '30%',
    marginLeft: '5%',
  },
  recommendation_text: {
    fontSize: 25,
    width: '80%',
    textAlign: 'center',
    color: '#292E45',
  },
});
