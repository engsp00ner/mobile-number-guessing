import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useEffect } from "react";
import Colors from "../../Constants/colors";

function Card({ children }) {
  const { width, height } = useWindowDimensions();

  // Log the window size each time it changes
  useEffect(() => {
    console.log("Window width:", width);
    console.log("Window height:", height);
  }, [width, height]);

  const deviceStyles = {
    marginTop: width < 380 ? 0 : 40,
  };

  return <View style={[styles.Card, deviceStyles]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  Card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.Primary800,
    borderRadius: 8,
    elevation: 4, // Android shadow
    shadowColor: "black", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
