import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Arrow from 'react-native-vector-icons/Feather';

const SugarLevel = () => {
  return (
    <View style={styles.body}>
      <Text style={{...styles.text, fontSize: 20}}>Current Sugar Level</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Text style={{...styles.text, fontSize: 40}}>145</Text>
          <Text style={{...styles.text, fontSize: 25}}>mg/L</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'center'}}>
          <Arrow size={80} name="arrow-down-right" color="#292E45" />
        </View>
      </View>
    </View>
  );
};

export default SugarLevel;

const styles = StyleSheet.create({
  body: {
    flex: 2,
    backgroundColor: '#A7E05D',
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#292E45',
  },
});
