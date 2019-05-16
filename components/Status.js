import { Constants } from "expo";
import {
  NetInfo,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import React from "react";

const statusHeight = Platform.OS === "ios" ? Constants.statusBarHeight : 0;

export default class Status extends React.Component {
  state = {
    isConnected: null
  };
  // ...
  render() {
    const { isConnected } = this.state;
    const backgroundColor = isConnected ? "white" : "red";
    if (Platform.OS === "ios") {
      return <View style={[styles.status, { backgroundColor }]} />;
    }
    return null; // Temporary!
  }
}

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight
  }
  // /*  */...
});
