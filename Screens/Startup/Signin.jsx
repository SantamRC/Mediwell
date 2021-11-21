import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.body}>
      <View style={styles.circle} />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        mode="flat"
        style={styles.text}
        activeOutlineColor="white"
        selectionColor="white"
        activeUnderlineColor="white"
      />
    </View>
  );
};

export default Signin;

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
    position: 'absolute',
  },
  text: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    color: 'white',
  },
});
