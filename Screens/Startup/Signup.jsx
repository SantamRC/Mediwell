import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Signup = () => {
  return (
    <View style={styles.body}>
      <View style={styles.circle}></View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  circle: {
    backgroundColor: '#31428F',
    height: 831,
    borderRadius: 500,
    width: 745,
    marginTop: -185,
    marginLeft: -90,
  },
});
