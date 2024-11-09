import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GamScreen";
import Colors from "./Constants/colors";
import GameOverScreen from "./Screens/GameOverScreen";

// Prevents the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  function GameOverHandler(numberOfRounds) {
    setGuessRounds(numberOfRounds);
    setGameIsOver(true);
  }
  if (userNumber)
    screen = (
      <GameScreen userNumber={userNumber} GameOverHandler={GameOverHandler} />
    );
  if (gameIsOver)
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );

  //choose the font to use
  //the use font function first return boolean to show the state of the font
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Return null until fonts are loaded to avoid rendering errors
  }

  // Handler to update guess rounds
  function updateGuessRounds(rounds) {
    setGuessRounds(rounds);
  }

  return (
    <LinearGradient
      colors={[Colors.Primary700, Colors.Accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/Images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
