import { StyleSheet, View } from "react-native";
import Colors from "../../Constants/colors";

function Card({ children }) {
  return <View style={styles.Card}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  Card: {
    //the following flex box properties are for positioning
    justifyContent: "center", //to set the items in the box area
    alignItems: "center", // this will align iteam across the opposite access
    //if i set the flex box to colum allign items will affect the raw and viseverse
    marginTop: 40,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.Primary800,
    borderRadius: 8,
    //this for setting the box shadow in the android
    elevation: 4,
    //this is for setting the shadow in iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
