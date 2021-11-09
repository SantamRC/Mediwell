import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Avatar } from "react-native-paper";
import SugarLevel from './SugarLevel'
import Exercises from "./Exercises";

const Profile = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.flex}>
        <Avatar.Image
          style={styles.image}
          size={150}
          source={require("../../Assets/lewis.jpg")}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.hello_text}>Hello Lewis,</Text>
          <Text style={styles.header_text}>
            Your Firness Level:{"\n"} Intermediate
          </Text>
          <Text style={styles.header_text}>
            Your hypo risk:{"\n"} Moderate Risk
          </Text>
        </View>
      </View>
      <SugarLevel />
      <Text
        style={{
          ...styles.body_text,
          color: "#50B2D5",
          fontSize: 30,
        }}
      >
        Prepare for Exercise
      </Text>
      <Text style={{ ...styles.body_text, fontSize: 20 }}>
        Select the exercise type you want to prepare for
      </Text>
      <Exercises style={{ marginTop: 30 }} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    marginLeft: 10,
    marginTop: 30,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  hello_text: {
    fontSize: 30,
    marginTop: 25,
    color: "#50B2D5",
    justifyContent: "center",
  },
  header_text: {
    color: "black",
    marginTop: 5,
    fontSize: 20,
  },
  body_text: {
    marginRight: "auto",
    marginLeft: 20,
    marginTop: 10,
  },
  exercises: {
    display: "flex",
  },
});
