import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';
import Resistance from '../../Assets/resistance.png';
import Aerobic from '../../Assets/aerobic.png';
import High from '../../Assets/high.png';

const Exercises = () => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <View style={styles.exercise_box}>
          <Image source={Resistance} style={styles.image} />
          <Text style={styles.exercise_text}>Resistance {'\n'} Training</Text>
        </View>
        <View style={styles.exercise_box}>
          <Image source={High} style={styles.image} />
          <Text style={styles.exercise_text}>
            High Intensity{'\n'} Training
          </Text>
        </View>
        <View style={styles.exercise_box}>
          <Image source={Aerobic} style={styles.image} />
          <Text style={styles.exercise_text}>Aerobic {'\n'} Exercise</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <Button
          mode="contained"
          color="#292E45"
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          Select Excercise
        </Button>
      </View>
    </View>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F1F1F1',
    flex: 1,
    width: '90%',
    borderRadius: 10,
    marginBottom: '5%',
  },
  view1: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {},
  button: {
    width: '70%',
  },
  exercise_box: {
    alignItems: 'center',
    flex: 1,
  },
  exercise_text: {
    color: '#292E45',
    textAlign: 'center',
  },
});
