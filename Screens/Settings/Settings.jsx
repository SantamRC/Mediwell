import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Store} from '../../Utilities/Context/Provider';

const Settings = () => {
  const value = useContext(Store);
  return (
    <View>
      <Text>Settings</Text>
      <Text>{value.access_token}</Text>
      <Button onPress={() => value.update('hello')} title="Update" />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
