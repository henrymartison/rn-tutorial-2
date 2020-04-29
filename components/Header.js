import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);
export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary
  },
  text: {
    fontWeight: "600",
    fontSize: 18
  }
});
