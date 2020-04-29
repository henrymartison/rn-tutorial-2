import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberCard from "../components/NumberCard";

const AltStartGameScreen = props => {
  const [inputVal, setInputVal] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const onChangeText = input => {
    setInputVal(input.replace(/[^0-9]/g, ""));
  };

  const _onResetButtonHandler = () => {
    setInputVal("");
    setConfirmed(false);
  };

  const _onConfirmButtonHandler = () => {
    const chosenNumber = parseInt(inputVal);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 999) {
      Alert.alert("Inavlid Entry", "Please enter a number between 0 and 1000", [
        { text: "Okay", onPress: _onResetButtonHandler, style: "destructive" }
      ]);
      return;
    }

    setConfirmed(true);
    setInputVal("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let chosenValue;
  if (confirmed) {
    chosenValue = (
      <Card style={{ marginTop: 18, alignItems: "center" }}>
        <Text>Your number is </Text>
        <NumberCard>{selectedNumber}</NumberCard>
        <Button
          title="Start Game"
          onPress={() => props.onGameStart(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={{ fontSize: 20 }}>Select a Number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={3}
            value={inputVal}
            onChangeText={onChangeText}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              marginTop: 20
            }}
          >
            <Button
              title="Reset"
              color={colors.accent}
              onPress={_onResetButtonHandler}
            />
            <Button
              title="Confirm"
              color={colors.primary}
              onPress={_onConfirmButtonHandler}
            />
          </View>
        </Card>
        {chosenValue}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default AltStartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  card: {
    width: 300,
    maxWidth: "80%",
    marginTop: 40,
    alignItems: "center"
  },
  input: {
    width: 40,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 17
  }
});
