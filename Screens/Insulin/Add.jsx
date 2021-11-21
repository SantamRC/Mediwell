import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "../../Components/UnitsCounter/UnitsCounter";
import Button from "../../Components/Button/Button";

const Insulin = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.header_text}>Insulin</Text>
      <Text style={styles.heading}>Your Insulin Level</Text>
      <Button
        text="Yes, Basal"
        style={styles.buttons}
        onPress={() => navigation.navigate("Units", { name: "Basal" })}
      />
      <Button
        text="Yes, Bolus"
        style={styles.buttons}
        onPress={() => navigation.navigate("Units", { name: "Bolus" })}
      />
      <Button text="Yes, Both" style={styles.buttons} />
      <Button text="No" style={styles.buttons} />
    </View>
  );
};

export default Insulin;
const styles = StyleSheet.create({
  header_text: {
    fontSize: 30,
    marginRight: "auto",
    marginLeft: 20,
    marginTop: 10,
  },
  buttons: {
    marginTop: 5,
    marginLeft: "auto",
    width: "80%",
  },
  heading: {
    fontSize: 25,
    color: "#50B2D5",
    marginLeft: 20,
  },
});
