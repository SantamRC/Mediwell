import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const UnitsCounter = ({ style }) => {
  const [count, setCount] = useState(0);

  return (
    <View style={style}>
      <View style={styles.body}>
        <Icon.Button
          name="minus"
          backgroundColor="none"
          size={30}
          onPress={() => {
            count == 0 ? setCount(0) : setCount(count - 1);
          }}
        />
        <Text style={styles.text}>{count} Units</Text>
        <Icon.Button
          name="plus"
          backgroundColor="none"
          size={30}
          onPress={() => setCount(count + 1)}
        />
      </View>
    </View>
  );
};

export default UnitsCounter;

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#292E45",
    justifyContent: "space-between",
    width: "100%",
    height: "auto",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
});
