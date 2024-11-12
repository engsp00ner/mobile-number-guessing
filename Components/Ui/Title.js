import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    //borderWidth: Platform.OS === "android" ? 5 : 2,
    //this is another methode for setting certain values according to the device OS
    borderWidth: Platform.select({ ios: 0, android: 0 }),
    borderColor: "white",
    padding: 12,
    maxwidth: "80%",
    width: 300,
  },
});
