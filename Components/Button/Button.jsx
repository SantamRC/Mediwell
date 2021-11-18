import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ text, style, onPress }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={styles.body}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#292E45",
    paddingTop: 8,
    paddingBottom: 8,
    width: "80%",
    height: "auto",
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
});
