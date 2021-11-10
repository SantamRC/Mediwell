import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "../../Components/UnitsCounter/UnitsCounter";

const Insulin = () => {
  return (
    <View style={styles.body}>
      <Text>Insulin</Text>
      <Counter
        style={{ marginLeft: "auto", marginRight: "auto", width: "80%" }}
      />
    </View>
  );
};

export default Insulin;
const styles = StyleSheet.create({
  body: {},
});
