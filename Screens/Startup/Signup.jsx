import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {TextInput} from 'react-native-paper';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  return (
    <View style={styles.body}>
      <View style={styles.circle} />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Mediwell</Text>
        <TextInput
          label="First Name"
          value={first}
          onChangeText={text => setFirst(text)}
          mode="flat"
          style={styles.input}
          activeOutlineColor="white"
          selectionColor="white"
          activeUnderlineColor="white"
        />
        <TextInput
          label="Last Name"
          value={last}
          onChangeText={text => setLast(text)}
          mode="flat"
          style={styles.input}
          activeOutlineColor="white"
          selectionColor="white"
          activeUnderlineColor="white"
        />
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
        <TextInput
          label="Repeat Password"
          value={password2}
          onChangeText={password => setPassword2(password)}
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
          onPress={() => navigation.navigate('WelcomePage')}>
          Sign Up
        </Button>
        <Text
          style={{
            ...styles.text,
            fontSize: 20,
            color: 'black',
            marginTop: '30%',
          }}>
          Already have an account?{' '}
        </Text>
        <Button
          style={{...styles.button, marginTop: 'auto', marginBottom: '5%'}}
          mode="contained"
          color="#292E45"
          onPress={() => navigation.navigate('Signin')}>
          Sign In
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
    height: '90%',
    borderRadius: 500,
    width: 745,
    marginTop: '-50%',
    marginLeft: -90,
    position: 'absolute',
  },
  input: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    width: '80%',
    height: 50,
    marginTop: '5%',
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 50,
    marginTop: '2%',
    marginBottom: '5%',
  },
  button: {
    width: '80%',
    marginTop: '15%',
  },
});
