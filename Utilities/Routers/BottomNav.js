import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Tube from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../../Screens/Profile/Profile';
import Insulin from '../../Screens/Insulin/Add';
import Food from '../../Screens/Food/Food';
import Settings from '../../Screens/Settings/Settings';

const BottomNav = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <Icon name="person" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Insulin"
          component={Insulin}
          options={{
            tabBarLabel: 'Insulin',
            tabBarIcon: ({color}) => (
              <Tube name="test-tube" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Food"
          component={Food}
          options={{
            tabBarLabel: 'Food',
            tabBarIcon: ({color}) => (
              <Icon name="fast-food" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => (
              <Icon name="settings" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;
