import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

const Backdrop = () => {
  return (
    <View style={styles.body}>
      <ActivityIndicator style={styles.activityIndicator} size={80} />
    </View>
  );
};

export default Backdrop;

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: '#181a2e',
    position: 'absolute',
    zIndex: 1,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    width: '50%',
  },
});
