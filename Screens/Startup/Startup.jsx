import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloPage from './HelloPage';
import Signin from './Signin';
import Signup from './Signup';
import WelcomePage from './WelcomePage';
import Bottom from '../../Utilities/Routers/BottomNav'

const Startup = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HelloPage" component={HelloPage} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="Bottom" component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Startup;