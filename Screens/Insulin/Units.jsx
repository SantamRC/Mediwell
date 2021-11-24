import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import {RadioButton, Button} from 'react-native-paper';
import Info from 'react-native-vector-icons/MaterialIcons';
import Counter from '../../Components/UnitsCounter/UnitsCounter';
import Time from './Time';

const Units = ({navigation}) => {
  const [checked, setChecked] = useState(true);
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Insulin</Text>
      <View style={styles.view1}>
        <View style={styles.pt1}>
          <View style={styles.info_box}>
            <Text style={{fontSize: 25, color: 'red'}}>Bolus Insulin</Text>
            <Info name="info" size={30} color="red" />
          </View>
          <Text style={{marginRight: 'auto', marginLeft: '5%', fontSize: 20}}>
            What was you last Bolus Insulin?
          </Text>
          <Counter style={{width: '80%'}} />
          <View style={styles.info_box}>
            <Info name="info" size={30} color="#292E45" />
            <Text style={{fontSize: 25, color: '#292E45'}}>Bolus Insulin</Text>
          </View>
        </View>
        <View style={styles.pt2}>
          <Text style={{fontSize: 25, color: '#292E45'}}>
            When was your last bolus unit?
          </Text>
          <TouchableWithoutFeedback onPress={() => setModal(!modal)}>
            <View style={styles.time_box}></View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
            <View
              style={{
                ...styles.info_box,
                backgroundColor: '#F1F1F1',
              }}>
              <RadioButton
                value="first"
                status={checked === true ? 'checked' : 'unchecked'}
              />
              <Text style={{fontSize: 17}}>
                My Bolus is still the same Insulin-Type as confirmed in the
                setup
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.view2}>
        <Button
          mode="contained"
          color="#292E45"
          style={styles.button}
          onPress={() => navigation.navigate('Level')}>
          Next
        </Button>
      </View>
      <Time modal={modal} setModal={setModal} />
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
    flex: 2,
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
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pt2: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
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
  time_box: {
    flex: 0.5,
    backgroundColor: '#292E45',
    width: '80%',
    borderRadius: 10,
  },
});
