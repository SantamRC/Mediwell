import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

function App() {
  useEffect(() => {
    codePush.sync(
      { installMode: codePush.InstallMode.IMMEDIATE },
      syncWithCodePush,
      null
    );
  });

  const syncWithCodePush = (status) => {
    console.log(status);
  };

  return (
    <View style={styles.container}>
      <Text>Mediwell New Update</Text>
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