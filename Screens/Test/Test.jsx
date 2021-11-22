import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Test = () => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>Block 1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>Block 2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>Block 3</Text>
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'green',
  },
  view1: {
    flex: 1,
    backgroundColor: '#101820FF',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: '#FEE715FF',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: '#4831D4',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
