import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ children, style }) => (
  <View style={{ ...styles.card, ...style }}>{children}</View>
);
export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    padding: 20,
    borderRadius: 11,
    elevation: 8
  }
});
