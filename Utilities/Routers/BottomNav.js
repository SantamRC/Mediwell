import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../Screens/Profile/Profile';
import Insulin from '../../Screens/Insulin/Insulin';
import Home from '../../Screens/Home/Home';
import Exercise from '../../Screens/Exercise/Exercise';
import Icon from 'react-native-vector-icons/Ionicons';
import Tube from 'react-native-vector-icons/MaterialCommunityIcons';
import Exc from 'react-native-vector-icons/FontAwesome5';
import Router from './Router';

const Bottom = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'Profile', title: 'Profile', color: 'green'},
    {key: 'Home', title: 'Home', color: '#795548'},
    {key: 'Exercise', title: 'Exercise', color: '#db095d'},
    {key: 'Insulin', title: 'Insulin', color: '#009688'},
  ]);


  // const renderScene = ({route, jumpTo}) => {
  //   switch (route.key) {
  //     case 'Profile':
  //       return <Profile />;
  //     case 'Home':
  //       return <Home />;
  //     case 'Insulin':
  //       return <Router tab="insulin" />;
  //     case 'exercise':
  //       return <Router tab="exercise" />;
  //   }
  // };
  const renderScene = BottomNavigation.SceneMap({
    Profile: Profile,
    Home: Home,
    Insulin: Insulin,
    Exercise: Exercise,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
      renderIcon={({route}) => {
        if (route.key === 'Profile')
          return <Icon name="person" color="white" size={24} />;
        else if (route.key === 'Insulin')
          return <Tube name="test-tube" color="white" size={24} />;
        else if (route.key === 'Home')
          return <Icon name="home" color="white" size={24} />;
        else if (route.key === 'Exercise')
          return <Exc name="running" color="white" size={24} />;
      }}
    />
  );
};

export default Bottom;

const styles = StyleSheet.create({});
