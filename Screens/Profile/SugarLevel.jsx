import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import AddButton from "../../Components/AddButton/AddButton";

const SugarLevel = () => {
  return (
    <View style={styles.box}>
      <View>
        <View style={styles.white_circles}>
          <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
            Current Sugar Level
          </Text>
          <Text style={styles.sugar_text}>123</Text>
        </View>
      </View>
      <View style={{ maxWidth: 120 }}>
        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
          Current Insulin on board level
        </Text>
        <View style={styles.iob}></View>
        <AddButton style={{ marginTop: 10 }} />
      </View>
    </View>
  );
};

export default SugarLevel;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#292E45",
    marginTop: 20,
    width: "90%",
    height: 200,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  white_circle: {
    width: 150,
    height: 150,
    backgroundColor: "#292E45",
    borderRadius: 200,
    borderWidth: 2,
    borderColor: "white",
    marginTop: 20,
  },
  sugar_text: {
    color: "white",
    textAlign: "center",
    marginTop: 40,
    fontSize: 50,
  },
  iob: {
    width: "100%",
    height: "50%",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
  },
});
