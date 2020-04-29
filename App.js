import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import AltStartGameScreen from "./screens/AltStartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessedRounds, setGuessedRounds] = useState(0);

  const _onStartGameRef = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const _onGameOverRef = numOfRounds => {
    setGuessedRounds(numOfRounds);
  };

  let content = <AltStartGameScreen onGameStart={_onStartGameRef} />;

  if (userNumber && guessedRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={_onGameOverRef} />
    );
  } else if (guessedRounds > 0) {
    content = (
      <GameOverScreen guessedRounds={guessedRounds} userNumber={userNumber} />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <Header title="Guess a Number?" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
