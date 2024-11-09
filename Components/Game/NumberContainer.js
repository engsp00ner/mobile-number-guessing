import { StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/colors";

function NumberContaine({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}> {children}</Text>
    </View>
  );
}

export default NumberContaine;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.Accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
  },
  numberText: {
    color: Colors.Accent500,
    fontSize: 35,
    fontWeight: "bold",
  },
});
