import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Level from '../../Screens/Insulin/Level';
import Units from '../../Screens/Insulin/Units';
import Select from '../../Screens/Exercise/Select';
import Recommendations from '../../Screens/Exercise/Recommendations';

const Router = ({tab}) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={tab === 'insulin' ? 'Units' : 'Select'}>
        {tab === 'insulin' && (
          <Stack.Group>
            <Stack.Screen name="Units" component={Units} />
            <Stack.Screen name="Level" component={Level} />
          </Stack.Group>
        )}
        {tab === 'exercise' && (
          <Stack.Group>
            <Stack.Screen name="Recommendations" component={Recommendations} />
            <Stack.Screen name="Select" component={Select} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
