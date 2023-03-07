import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const QRCode = () => {
  return (
    <View style={styles.container}>
      <Text>QRCode</Text>
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
