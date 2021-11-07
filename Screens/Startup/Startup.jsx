import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const Startup = () => {
  const login = () => {
    GoogleSignin.signIn()
      .then((data) => {
        console.log(data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "AIzaSyAl6tJk5KJc81Av5KoUteKJB1K3OCZyo7w",
      offlineAccess: true,
      hostedDomain: "",
      forceConsentPrompt: true,
    });
  });

  return (
    <View style={styles.basic}>
      <Text>Mediwell</Text>
      <GoogleSigninButton onPress={login} />
    </View>
  );
};

export default Startup;

const styles = StyleSheet.create({
  basic: {
    alignItems: "center",
  },
});
