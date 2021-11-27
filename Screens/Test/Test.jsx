import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const Test = () => {
  const [time, setTime] = useState('0');
  return (
    <View style={styles.body}>
      <Text>THe TIme is {time}</Text>
      <Pressable
        style={{flex: 1, backgroundColor: 'green'}}
        onPress={() => setTime(new Date(new Date().getTime() + 5 * 60000).toISOString())}>
        <Text>Press</Text>
      </Pressable>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#c092f7',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
