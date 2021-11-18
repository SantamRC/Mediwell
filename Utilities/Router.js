import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home/Home";
import Startup from '../Screens/Startup/Startup';
import Onboarding from "../Screens/Onboarding/Onboarding";
import Profile from "../Screens/Profile/Profile";
import AddInsulin from "../Screens/Insulin/Add";
import InsulinUnits from "../Screens/Insulin/Units";
import InsulinLevel from "../Screens/Insulin/Level";


const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Profile} />
        <Stack.Screen name="AddInsulin" component={AddInsulin} />
        <Stack.Screen name="InsulinUnits" component={InsulinUnits} />
        <Stack.Screen name="InsulinLevel" component={InsulinLevel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
