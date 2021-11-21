import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';

const Startup = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.hello}>HELLO</Text>
      <Text style={styles.flexible}>Flexible exercising without risk</Text>
      <Image style={styles.img} source={require('../../Assets/karsten.png')} />
    </View>
  );
};

export default Startup;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0e2d6b',
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
    width: '70%',
    height: '70%',
    marignLeft: 'auto',
  },
});
