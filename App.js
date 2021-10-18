import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';
import Auth from './Redux/Actions/Auth'

export default function App() {
  const [token,setToken] =  useState();

  let url='https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=A0FPTzuzBbcDjyUXMfbXfdgYkj4QNkbh&redirect_uri=exp://127.0.0.1:19000&response_type=code&scope=offline_access'


  function sendRequest(code){
    let config = {
      headers :{
        "Content-type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      },
      data : {
        client_id : "A0FPTzuzBbcDjyUXMfbXfdgYkj4QNkbh",
        client_secret : "sDtfJTgPyC2Pn7nU",
        code : code,
        grant_type : "authorization_code",
        redirect_uri : "exp://127.0.0.1:19000"
      }
    }
    axios.post('https://sandbox-api.dexcom.com/v2/oauth2/token',config).then((res)=>{
      console.log("The response is: "+res)
    }).catch(err=>console.log("The error is: "+err))
  }
  let flag=0;

  function handleLink(event){
    let data=Linking.parse(event.url)
    setToken(data)
    if(data["queryParams"]["code"] && flag==0){
      flag=1;
      console.log("The code is: "+data["queryParams"]["code"])
      sendRequest(data["queryParams"]["code"])
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
