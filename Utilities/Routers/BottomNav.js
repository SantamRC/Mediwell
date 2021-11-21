import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import Profile from '../../Screens/Profile/Profile';
import Insulin from '../../Screens/Insulin/Add';
import Settings from '../../Screens/Settings/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import Tube from 'react-native-vector-icons/MaterialCommunityIcons';

const Bottom = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'Profile', title: 'Profile', color: 'green'},
    {key: 'Insulin', title: 'Insulin', color: '#009688'},
    {key: 'Settings', title: 'Settings', color: '#795548'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Profile: Profile,
    Insulin: Insulin,
    Settings: Settings,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
      renderIcon={({route}) => {
        if (route.key == 'Profile')
          return <Icon name="person" color="white" size={24} />;
        else if (route.key == 'Insulin')
          return <Tube name="test-tube" color="white" size={24} />;
        else if (route.key == 'Settings')
          return <Icon name="settings" color="white" size={24} />;
      }}
    />
  );
};

export default Bottom;

const styles = StyleSheet.create({});
