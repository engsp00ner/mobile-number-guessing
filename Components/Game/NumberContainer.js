import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Colors from "../../Constants/colors";

function NumberContainer({ children }) {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          padding: width > 500 ? 12 : 24,
          margin: width > 500 ? 12 : 24,
        },
      ]}
    >
      <Text
        style={[
          styles.numberText,
          {
            fontSize: width > 500 ? 24 : 36,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.Accent500,
    borderRadius: 8,
    alignItems: "center",
  },
  numberText: {
    color: Colors.Accent500,
    fontWeight: "bold",
  },
});
