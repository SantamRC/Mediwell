import React, {useState} from 'react';
import {CommonActions} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton, Button} from 'react-native-paper';
import Info from 'react-native-vector-icons/MaterialIcons';
import Counter from '../../Components/UnitsCounter/UnitsCounter';

const Units = ({navigation}) => {
  const [checked, setChecked] = useState(true);

  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Insulin</Text>
      <View style={styles.view1}>
        <View style={styles.pt1}></View>
        <View style={styles.pt2}>
          <Text style={{fontSize: 17}}>
            At around 6.30 pm you won't have any insulin left in your system
          </Text>
        </View>
      </View>
      <View style={styles.view2}>
        <Button
          mode="outlined"
          color="#292E45"
          style={styles.button}
          onPress={() => navigation.dispatch(CommonActions.goBack())}>
          Back
        </Button>
        <Button
          mode="contained"
          color="#292E45"
          style={styles.button}
          onPress={() => navigation.navigate('Level')}>
          Done
        </Button>
      </View>
    </View>
  );
};

export default Units;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    color: '#292E45',
    marginLeft: 20,
    marginRight: 'auto',
    marginTop: '2%',
  },
  view1: {
    flex: 3,
    backgroundColor: 'yellow',
    alignItems: 'center',
    width: '100%',
  },
  view2: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  pt1: {
    flex: 5,
    width: '100%',
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292E45',
    marginTop: '5%',
  },
  pt2: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
    marginTop: '5%',
    borderRadius: 10,
    marginBottom: '5%',
  },
  button: {
    width: '30%',
    marginBottom: '5%',
    width: '40%',
  },
  info_box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: '5%',
  },
});
