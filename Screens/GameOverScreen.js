import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Title from "../Components/Ui/Title";
import Colors from "../Constants/colors";
import PrimaryButton from "../Components/Ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 150;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    margin: 10,
  };
  return (
    <>
      <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
          <Title>Game Over</Title>
          <View style={[styles.imageContainer, imageStyle]}>
            <Image
              source={require("../assets/Images/success.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.summaryText}>
            your Phone needed{" "}
            <Text style={styles.highlited}>{roundsNumber}</Text> times to guess
            the number <Text style={styles.highlited}> {userNumber}</Text>{" "}
          </Text>
          <PrimaryButton onPress={onStartNewGame}>
            Start New Game!
          </PrimaryButton>
        </View>
      </ScrollView>
    </>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.Primary800,
    overflow: "hidden",
    margin: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlited: {
    fontFamily: "open-sans-bold",
    color: Colors.Primary500,
  },
});
