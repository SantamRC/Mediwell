import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home/Home";
import Startup from '../Screens/Startup/Startup'
import Onboarding from "../Screens/Onboarding/Onboarding";
import Profile from "../Screens/Profile/Profile";
import Insulin from "../Screens/Insulin/Insulin";

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Profile} />
        <Stack.Screen name="Insulin" component={Insulin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
