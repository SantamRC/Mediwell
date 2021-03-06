import React, {useEffect, useContext} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import token from '../../Utilities/API/token';
import {appContext} from '../../Utilities/Context/Provider';

const Profile = ({navigation}) => {
  const {useDispatch} = useContext(appContext);
  // useEffect(() => {
  //   token().then(value => {
  //     console.log(value);
  //     useDispatch('TOKEN', value);
  //   });
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
      <View style={styles.view2}>
        <Text style={{color: '#292E45', fontSize: 30, fontWeight: 'bold'}}>
          Past Exercises
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: 'white',
    marginLeft: '5%',
    marginTop: '2%',
    flex: 1,
    fontWeight: 'bold',
  },
  flex: {
    display: 'flex',
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5%'
  },
  hello_text: {
    fontSize: 30,
    marginTop: 25,
    color: '#50B2D5',
    justifyContent: 'center',
  },
  header_text: {
    color: 'white',
    marginTop: 5,
    fontSize: 20,
  },
  view1: {
    flex: 2,
    backgroundColor: '#292E45',
    width: '100%',
  },
  view2: {
    flex: 3,
  },
});
