import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SugarLevel = () => {
  return (
    <View style={styles.box}>
      <View style={{maxWidth: 120}}>
        <Text style={{ color: "white" }}>Sugar Level</Text>
        <Text style={{ color: "#90FF86" }}>
          You are in your performance zone
        </Text>
      </View>
      <View>
        <View style={styles.white_circle}></View>
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
    borderColor: 'white'
  },
});
