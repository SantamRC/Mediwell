import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SugarLevel from './SugarLevel';
import Exercises from './Exercises';
import token from '../../Utilities/API/token';

const Profile = ({navigation}) => {
  useEffect(() => {
    console.log(token());
  }, []);
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.flex}>
        <Image
          style={styles.image}
          source={require('../../Assets/lewis.jpg')}
        />
        <View style={{marginLeft: 20}}>
          <Text style={styles.hello_text}>Hello Lewis,</Text>
          <Text style={styles.header_text}>
            Your Fitness Level:{'\n'} Intermediate
          </Text>
          <Text style={styles.header_text}>
            Your hypo risk:{'\n'} Moderate Risk
          </Text>
        </View>
      </View>
      <SugarLevel navigate={navigation} style={{height: '30%'}} />
      <View style={{height: '40%'}}>
        <Text
          style={{
            ...styles.body_text,
            color: '#50B2D5',
            fontSize: 30,
          }}>
          Prepare for Exercise
        </Text>
        <Text style={{...styles.body_text, fontSize: 20}}>
          Select the exercise type you want to prepare for
        </Text>
        <Exercises style={{marginTop: 30}} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    marginLeft: 10,
    marginTop: 30,
    width: 100,
    height: 100,
  },
  heading: {
    fontSize: 30,
    marginRight: 'auto',
    marginLeft: 20,
    marginTop: 10,
    height: '5%',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    height: '25%',
  },
  hello_text: {
    fontSize: 30,
    marginTop: 25,
    color: '#50B2D5',
    justifyContent: 'center',
  },
  header_text: {
    color: 'black',
    marginTop: 5,
    fontSize: 20,
  },
  body_text: {
    marginRight: 'auto',
    marginLeft: 20,
    marginTop: 10,
  },
  exercises: {
    display: 'flex',
  },
});
