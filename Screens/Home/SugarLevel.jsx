import React, {useEffect, useContext, useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Arrow from 'react-native-vector-icons/Feather';
//import getGlucose from '../../Utilities/API/getGlucose';
import {appContext} from '../../Utilities/Context/Provider';

const SugarLevel = ({style}) => {
  const {state} = useContext(appContext);
  const [glucose, setGlucose] = useState(50);

  // useEffect(() => {
  //   setInterval(() => {
  //     if (state.access_token) {
  //       getGlucose(state.access_token).then(glucose => setGlucose(glucose));
  //     }
  //   }, 50000);
  // }, []);

  // const getValue = () => {
  //   getGlucose(state.access_token).then(glucose => setGlucose(glucose));
  // };

  return (
    <View style={styles.body}>
      <Text style={{...styles.text, fontSize: 20}}>Current Sugar Level</Text>
      {/* <Pressable onPress={() => getValue()}>Get Value</Pressable> */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Text style={{...styles.text, fontSize: 40}}>{glucose}</Text>
          <Text style={{...styles.text, fontSize: 25}}>mg/L</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Arrow size={80} name="arrow-down-right" color="#292E45" />
        </View>
      </View>
    </View>
  );
};

export default SugarLevel;

const styles = StyleSheet.create({
  body: {
    flex: 2,
    backgroundColor: '#A7E05D',
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#292E45',
  },
});
