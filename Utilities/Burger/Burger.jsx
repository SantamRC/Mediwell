import React from "react";
import { StyleSheet } from "react-native";
import Menu from "react-native-vector-icons/MaterialIcons";

const Burger = () => {
  return <Menu style={styles.burger} name="menu" size={50} color="black" />;
};

export default Burger;

const styles = StyleSheet.create({
  burger: {
    marginLeft: "auto",
    marginRight: 12,
    marginTop: 10,
  },
});
