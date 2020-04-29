import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumberCard from "../components/NumberCard";
import Card from "../components/Card";

const generateRndNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  rndNumber = Math.floor(Math.random() * (max - min) + min);

  if (rndNumber === exclude) {
    return generateRndNumber(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRndNumber(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const _onPressHintHigher = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Wrong Hint", "Sorry, you gave a false hint", [
        { text: "Try Again", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRndNumber(
      currentLow.current,
      currentHigh.current
    );
    setCurrentGuess(nextNumber);
    setRounds(currRound => currRound + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      <NumberCard>{currentGuess}</NumberCard>
      <Card style={styles.buttonContainer}>
        <Button
          title="Lower"
          onPress={_onPressHintHigher.bind(this, "lower")}
        />
        <Button
          title="Higher"
          onPress={_onPressHintHigher.bind(this, "higher")}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  buttonContainer: {
    width: 300,
    maxWidth: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 18
  }
});
