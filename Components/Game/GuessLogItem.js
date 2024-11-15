import { StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent`s Guess:{guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.Primary800,
    borderRadius: 40,
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.Accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    //shadow for android
    elevation: 4,
    //shadow for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
export default GuessLogItem;
