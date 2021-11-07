import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import questions from "./Questions";

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={questions.map((data) => ({
        backgroundColor: "white",
        image: null,
        title: `${data.question}`,
        subtitle: "First Page",
      }))}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
