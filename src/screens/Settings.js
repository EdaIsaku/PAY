import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
