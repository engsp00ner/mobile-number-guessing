import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
} from "react-native";
import PrimaryButton from "../Components/Ui/PrimaryButton";
import { useState } from "react";
import Colors from "../Constants/colors";
import Title from "../Components/Ui/Title";
import Card from "../Components/Ui/Card";
import InstructionText from "../Components/Ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInbutHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (
      isNaN(chosenNumber) ||
      chosenNumber <= 0 ||
      chosenNumber > 99
    ) {
      //show alert
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    onPickNumber(chosenNumber);
    console.log("valid number:", chosenNumber);
  }
  return (
    <>
      <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <Card>
          <InstructionText>Enter Number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInbutHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton> Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                {" "}
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.Accent500,
    borderBottomWidth: 2,
    color: Colors.Accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
