import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = props => (
  <View style={styles.container}>
    <Text>Number of Rounds: {props.guessedRounds}</Text>
    <Text>The number was: {props.userNumber}</Text>
  </View>
);
export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
