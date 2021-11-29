import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Select from './Select';
import IOB from '../Home/IOB';
import Recommendations from './Recommendations';
import Insulin from '../Insulin/Insulin';

const Stack = createStackNavigator();

const Exercise = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Select"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="Recommendations" component={Recommendations} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Exercise;
