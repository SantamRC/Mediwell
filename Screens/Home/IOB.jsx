import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const IOB = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
        Current Insulin in your Body
      </Text>
      <Text style={{color: 'white', fontSize: 15}}>
        Currently no recorded Insulin in your system
      </Text>
      <Button
        icon="plus"
        style={styles.button}
        color="#FFFFFF"
        mode="contained"
        onPress={() => {
          console.log('Presseddddd')
          navigation.navigate('Insulin')
        }
        }>
        Add Insulin
      </Button>
    </View>
  );
};

export default IOB;

const styles = StyleSheet.create({
  body: {
    flex: 3,
    backgroundColor: '#9A9EB0',
    marginTop: '5%',
    marginBottom: '5%',
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: '60%',
  },
});
