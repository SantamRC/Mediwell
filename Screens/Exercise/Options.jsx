import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Resistance from '../../Assets/resistance.png';
import Aerobic from '../../Assets/aerobic.png';
import High from '../../Assets/high.png';

const Exercises = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <TouchableWithoutFeedback onPress={() => setChecked('first')}>
          <View style={styles.exercise_box}>
            <Image source={Resistance} style={styles.image} />
            <Text style={styles.exercise_text}>Resistance {'\n'} Training</Text>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setChecked('second')}>
          <View style={styles.exercise_box}>
            <Image source={High} style={styles.image} />
            <Text style={styles.exercise_text}>
              High Intensity{'\n'} Training
            </Text>
            <RadioButton
              value="first"
              status={checked === 'second' ? 'checked' : 'unchecked'}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setChecked('third')}>
          <View style={styles.exercise_box}>
            <Image source={Aerobic} style={styles.image} />
            <Text style={styles.exercise_text}>Aerobic {'\n'} Exercise</Text>
            <RadioButton
              value="first"
              status={checked === 'third' ? 'checked' : 'unchecked'}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  body: {
    flex: 4,
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
