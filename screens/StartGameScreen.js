import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import colors from "../constants/colors";
import Input from "../components/Input";
import Card from "../components/Card";

const StartGameScreen = () => {
  const [inputVal, setInputVal] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  onChangeText = inputText => {
    setInputVal(inputText.replace(/[^0-9]/g, ""));
  };

  const resetButtonHandler = () => {
    setInputVal("");
    setConfirmed(false);
  };

  const confirmButtonhandler = () => {
    const chosenNumber = parseInt(inputVal);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 999) {
      Alert.alert("Invalid Entry!", "Please input a number between 1 and 999", [
        { text: "Okay", style: "destructive", onPress: resetButtonHandler }
      ]);
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setInputVal("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Text>Confirmed Number is: {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.cardContainer}>
          <Text style={{ fontSize: 18 }}>Select a number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            keyboardAppearance="dark"
            maxLength={3}
            value={inputVal}
            onChangeText={onChangeText}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              onPress={resetButtonHandler}
              color={colors.primary}
            />
            <Button
              title="Confirm"
              onPress={confirmButtonhandler}
              color={colors.accent}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10
  },
  title: {
    fontSize: 25,
    paddingVertical: 15
  },
  cardContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  input: {
    width: 40,
    textAlign: "center"
  }
});
