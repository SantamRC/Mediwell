import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import codePush from "react-native-code-push";


let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

function App() {
  return (
    <View style={styles.container}>
      <Text>Mediwell App Testing</Text>
      <StatusBar style="auto" />
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
});


export default codePush(codePushOptions)(App);
//export default App;