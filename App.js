import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthSession } from 'expo';
import * as Linking from 'expo-linking';
import { authorize } from 'react-native-app-auth';
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  const [token,setToken] =  useState();
  let url =`https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=A0FPTzuzBbcDjyUXMfbXfdgYkj4QNkbh&redirect_uri=${encodeURIComponent("http://www.google.com")}&response_type=code&scope=offline_access`

  const config = {
    issuer: 'https://developer-portal-dot-g5-dexcom-prod-us-5.appspot.com/consent',
    clientId: 'A0FPTzuzBbcDjyUXMfbXfdgYkj4QNkbh',
    redirectUrl: 'http://www.google.com',
    scope: ["egv", "calibrations", "devices", "dataRange", "events", "statistics"]
    };

  const handleAuth=async ()=>{
    try{
      let result = await WebBrowser.openBrowserAsync(url);
      console.log(result)
    }
    catch(err){
      console.log("The error is: " + err.message);
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Mediwell</Text>
      <Button style={styles.button} title="Connect to your Dexcom Account" onPress={handleAuth} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 50,
    color: '#10b6e8',
    top: -40,
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'green',
    overflow: 'hidden'
  }
});
