import React from 'react'
import {StyleSheet, Text, View, Pressable} from 'react-native';
import token from '../../Utilities/API/token';

const Food = () => {
  return (
    <View>
      <Text>Food</Text>
      <Pressable onPress={token} style={{backgroundColor: 'green'}}>
        <Text>Send</Text>
      </Pressable>
    </View>
  );
};

export default Food

const styles = StyleSheet.create({})
