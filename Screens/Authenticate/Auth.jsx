import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import Auth from '../../Redux/Actions/Auth'

export default function AuthScreen() {
  const [token,setToken] =  useState();
  const dispatch = useDispatch();

  let baseUrl='https://sandbox-api.dexcom.com'
  let path='/v2/oauth2/login'
  let client_id='A0FPTzuzBbcDjyUXMfbXfdgYkj4QNkbh'
  let redirect_uri='exp://127.0.0.1:19000'

  let url=`${baseUrl}${path}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=offline_access`


  function sendRequest(data){
    let params =new URLSearchParams();
    params.append('client_id','A0FPTzuzBbcDjyUXMfbXfdgYkj4QNkbh');
    params.append('client_secret','sDtfJTgPyC2Pn7nU');
    params.append('code',data);
    params.append('grant_type','authorization_code');
    params.append('redirect_uri','exp://127.0.0.1:19000');
    axios.post('https://sandbox-api.dexcom.com/v2/oauth2/token',params).then((res)=>{
      dispatch(Auth(res.data))
      console.log(res.data)
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
