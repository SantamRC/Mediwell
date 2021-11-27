import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {Button} from 'react-native-paper';
import Exercises from './Options';

const Test = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.heading}>Exercise</Text>
        <Exercises />
        <TouchableWithoutFeedback onPress={() => setModal(!modal)}>
          <View style={styles.time_box}></View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.view2}>
        {/* <Button
          mode="outlined"
          color="#292E45"
          style={styles.button}
          onPress={() => navigation.dispatch(CommonActions.goBack())}>
          Back
        </Button> */}
        <Button
          mode="contained"
          color="#292E45"
          style={styles.button}
          onPress={() => navigation.navigate('Recommendations')}>
          Next
        </Button>
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#292E45',
    marginLeft: '5%',
    marginTop: '2%',
    marginRight: 'auto',
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  time_box: {
    flex: 1,
    backgroundColor: '#292E45',
    width: '80%',
    borderRadius: 10,
  },
  exercises: {
    flex: 1,
  },
  button: {
    width: '30%',
    marginBottom: '5%',
    width: '40%',
  },
});
