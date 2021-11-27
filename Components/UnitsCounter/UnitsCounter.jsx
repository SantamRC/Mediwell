import React, { useState } from "react";
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const UnitsCounter = ({style}) => {
  const [count, setCount] = useState(0);

  return (
    <View style={style}>
      <View style={styles.body}>
        <Pressable
          onPress={() => {
            count == 0 ? setCount(0) : setCount(count - 1);
          }}>
          <Icon name="minus" color="white" size={30} />
        </Pressable>
        <Text style={styles.text}>{count} Units</Text>
        <Pressable onPress={() => setCount(count + 1)}>
          <Icon name="plus" color="white" size={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default UnitsCounter;

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#292E45',
    justifyContent: 'space-around',
    width: '100%',
    height: '55%',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
