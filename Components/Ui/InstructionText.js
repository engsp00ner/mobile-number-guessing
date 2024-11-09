import { Text, StyleSheet } from "react-native";
import Colors from "../../Constants/colors";
function InstructionText({ children, style }) {
  return (
    // the style is added as an array of objects
    //if the two styles have some common objects
    //then it over rides the old properties with the new one
    <Text style={[styles.instructionText, style]}>
      {children}
    </Text>
  );
}
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.Accent500,
    fontSize: 24,
  },
});
