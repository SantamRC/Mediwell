import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthSession } from 'expo';
import * as Linking from 'expo-linking';
import { authorize } from 'react-native-app-auth';
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  const [token,setToken] =  useState();

  let url='https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=A0FPTzuzBbcDjyUXMfbXfdgYkj4QNkbh&redirect_uri=exp://127.0.0.1:19000&response_type=code&scope=offline_access'

  function handleLink(event){
    let data=Linking.parse(event.url)
    setToken(data)
    if(data["queryParams"]["code"]){
      console.log("The code is: "+data["queryParams"]["code"])
    }
  }

  useEffect(()=>{
    Linking.addEventListener('url',handleLink);
    return ()=>{
      Linking.removeEventListener('url')
    }
  })
  
  let handleClick = async ()=>{
    WebBrowser.openBrowserAsync(url)
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Mediwell</Text>
      <Button title="Authenticate" onPress={handleClick} />
      <Text>{token? JSON.stringify(token) : "App not opened from Deep Link"}</Text>
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
