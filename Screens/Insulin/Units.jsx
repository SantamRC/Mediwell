import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "../../Components/UnitsCounter/UnitsCounter";

const Units = ({ route }) => {
  const { name } = route.params;
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.header_text}>Insulin</Text>
      <Text style={styles.heading}>Your Insulin Level</Text>
      <Text style={{ fontSize: 20 }}>{name} Page</Text>
      <Counter style={{ width: "80%" }} />
    </View>
  );
};

export default Units;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    color: "#50B2D5",
    marginLeft: 20,
    marginRight: "auto",
  },
  header_text: {
    fontSize: 30,
    marginRight: "auto",
    marginLeft: 20,
    marginTop: 10,
  },
});
