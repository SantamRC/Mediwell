import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import token from '../../Utilities/API/token';

const Profile = ({navigation}) => {
  // useEffect(() => {
  //   console.log(token());
  // }, []);
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <View style={styles.view1}>
        <Text style={styles.heading}>Profile</Text>
        <View style={styles.flex}>
          <Avatar.Image size={160} source={require('../../Assets/lewis.jpg')} />
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
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
});
