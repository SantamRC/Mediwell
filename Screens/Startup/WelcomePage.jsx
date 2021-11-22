import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';

const WelcomePage = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.hello}>WELCOME</Text>
        <Text style={styles.flexible}>Flexible exercising without risk</Text>
      </View>
      <View style={styles.view2}>
        <Image style={styles.img} source={require('../../Assets/Frau.png')} />
        <Image
          style={styles.img}
          source={require('../../Assets/karsten2.png')}
        />
      </View>
      <View style={styles.view3}>
        <Text style={styles.hello}>Mediwell</Text>
        <Button
          style={styles.button}
          mode="contained"
          color="white"
          onPress={() => navigation.navigate('Bottom')}>
          Start
        </Button>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#2A2F46',
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
    flex: 1,
  },
  view1: {
    flex: 1,
    alignItems: 'center',
  },
  view2: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
  },
  view3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    marginTop: 10,
  },
});