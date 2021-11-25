import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Level from './Level';
import Units from './Units';

const Stack = createStackNavigator();

const Insulin = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Units"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Level" component={Level} />
        <Stack.Screen name="Units" component={Units} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Insulin;
