import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';

const Startup = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.hello}>HELLO</Text>
      <Text style={styles.flexible}>Flexible exercising without risk</Text>
      <Image style={styles.img} source={require('../../Assets/karsten.png')} />
      <Text style={{...styles.flexible, marginTop: 0}}>Mediwell</Text>
      <Button
        style={styles.button}
        mode="contained"
        color="white"
        onPress={() => navigation.navigate('Signin')}>
        Press me
      </Button>
    </View>
  );
};

export default Startup;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#2A2F46',
    alignItems: 'center',
  },
  hello: {
    color: 'white',
    fontSize: 30,
    marginTop: '7%',
  },
  flexible: {
    color: 'white',
    fontSize: 25,
    marginTop: '4%',
    textAlign: 'center',
  },
  img: {
    width: '65%',
    height: '70%',
    marginLeft: 'auto',
  },
  button: {
    width: '80%',
    marginTop: '4%',
  },
});
