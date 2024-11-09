import {
  Text,
  View,
  Pressable,
  StyleSheet,
} from "react-native";
import Colors from "../../Constants/colors";
function PrimaryButton({ children, onPress }) {
  return (
    <>
      <View style={styles.buttonOuterContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.pressed,
                  styles.buttonInnerContainer,
                ]
              : styles.buttonInnerContainer
          }
          onPress={onPress}
          android_ripple={{ color: Colors.Primary600 }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    </>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.Primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    //adding shadow only in android
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
