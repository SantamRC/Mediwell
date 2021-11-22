import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Level from './Level';
import Units from './Units';

const Stack = createStackNavigator();

const Insulin = () => {
  return (
    <Stack.Navigator
      initialRouteName="Units"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Level" component={Level} />
      <Stack.Screen name="Units" component={Units} />
    </Stack.Navigator>
  );
};

export default Insulin;
