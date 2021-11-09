import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const AddButton = ({ style }) => {
  return (
    <View style={style}>
      <View style={styles.body}>
        <Icon name="plus" size={20} style={{ marginLeft: 2 }} />
        <Text style={styles.text}>Add Insulin</Text>
      </View>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    width: "100%",
    paddingTop: 4,
    paddingBottom: 4,
    marginRight: "auto",
  },
  text: {
    textAlign: "center",
    marginLeft: 3,
    fontSize: 17,
  },
});
