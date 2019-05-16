import { Constants } from "expo";
import { StyleSheet } from "react-native";

const statusHeight = Platform.OS === "ios" ? Constants.statusBarHeight : 0;
const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight
  }
  // ...
});
