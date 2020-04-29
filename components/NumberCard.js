import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const NumberCard = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.number}>{children}</Text>
  </View>
);
export default NumberCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: colors.accent,
    borderWidth: 1.5,
    marginVertical: 10,
    padding: 10
  },
  number: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.accent
  }
});
