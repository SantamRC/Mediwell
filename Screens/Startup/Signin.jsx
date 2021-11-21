import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {TextInput} from 'react-native-paper';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.body}>
      <View style={styles.circle} />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Mediwell</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          mode="flat"
          style={styles.input}
          activeOutlineColor="white"
          selectionColor="white"
          activeUnderlineColor="white"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
          mode="flat"
          style={styles.input}
          activeOutlineColor="white"
          selectionColor="white"
          activeUnderlineColor="white"
        />
        <Button
          style={styles.button}
          mode="contained"
          color="white"
          onPress={() => console.log('Signin')}>
          Sign In
        </Button>
        <Text
          style={{
            ...styles.text,
            fontSize: 20,
            color: 'black',
            marginTop: '45%',
          }}>
          No account yet?{' '}
        </Text>
        <Button
          style={{...styles.button, marginTop: 'auto', marginBottom: '5%'}}
          mode="contained"
          color="#292E45"
          onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Button>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  circle: {
    backgroundColor: '#2A2F46',
    height: 831,
    borderRadius: 500,
    width: 745,
    marginTop: -185,
    marginLeft: -90,
    position: 'absolute',
  },
  input: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    width: '80%',
    marginTop: '5%',
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 50,
    marginTop: '20%',
    marginBottom: '15%',
  },
  button: {
    width: '80%',
    marginTop: '20%',
  },
});
