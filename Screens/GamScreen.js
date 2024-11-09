import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../Components/Ui/Title";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import NumberContaine from "../Components/Game/NumberContainer";
import PrimaryButton from "../Components/Ui/PrimaryButton";
import Card from "../Components/Ui/Card";
import InstructionText from "../Components/Ui/InstructionText";
import GuessLogItem from "../Components/Game/GuessLogItem";

//this will generate the random number to combare with the entered numbered
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundry = 1;
let maxBoundry = 100;
function GameScreen({ userNumber, GameOverHandler }) {
  const initialGuess = generateRandomBetween(
    minBoundry,
    maxBoundry,
    userNumber
  );
  const [CurrentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  //gess the next number to be combared
  function nextGuessHandler(direction) {
    //direction => lower , greater
    if (
      (direction === "lower" && CurrentGuess < userNumber) ||
      (direction === "greater" && CurrentGuess > userNumber)
    ) {
      Alert.alert("Don`t lie !", "You know this is wrong...", {
        text: "Sorry",
        style: "cancel",
      });
      return;
    }
    if (direction === "lower") {
      maxBoundry = CurrentGuess;
    } else {
      minBoundry = CurrentGuess + 1;
    }
    const newRnNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      CurrentGuess
    );
    setCurrentGuess(newRnNumber);
    console.log("min Boundry", minBoundry);
    console.log("maxBoundry", maxBoundry);
    console.log(newRnNumber);
    setGuessRounds((prevGuessRounds) => [newRnNumber, ...prevGuessRounds]);
  }
  useEffect(() => {
    if (CurrentGuess === userNumber) {
      GameOverHandler(guessRounds.length);
    }
  }, [CurrentGuess, userNumber]);
  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  //this use effect function
  //will run only in the first time we load the component

  return (
    <View style={styles.screen}>
      <Title>Opponent`s Guess</Title>
      <NumberContaine>{CurrentGuess}</NumberContaine>
      <Card>
        <InstructionText style={styles.InstructionText}>
          Higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              guess={itemData.item}
              roundNumber={itemData.index + 1}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  InstructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
