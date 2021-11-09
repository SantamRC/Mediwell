import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Exercises = ({ style }) => {
  return (
    <View style={style}>
      <View style={styles.body}>
        <View>
          <Image
            style={styles.image}
            source={require("../../Assets/resistance_training.png")}
          />
          <Text style={styles.text}>Resistance{"\n"}Training</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../../Assets/high_intensity_training.png")}
          />
          <Text style={styles.text}>High intensity{"\n"} Training</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../../Assets/aerobic_exercise.png")}
          />
          <Text style={styles.text}>Aerotropic{"\n"} Exercise</Text>
        </View>
      </View>
    </View>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "50%",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 80,
    height: 80,
  },
});
