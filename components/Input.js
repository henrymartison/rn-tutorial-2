import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = props => (
  <TextInput {...props} style={{ ...styles.container, ...props.style }} />
);
export default Input;

const styles = StyleSheet.create({
  container: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10
  }
});
