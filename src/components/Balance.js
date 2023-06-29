import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../theme";

export const Balance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.balanceTitle}>Balanca ALL</Text>
      <Text style={styles.balanceText}>
        <Text style={{ fontWeight: "bold", fontSize: 35 }}>0</Text>
        <Text style={{ letterSpacing: 1, color: COLORS.gray }}>.00</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  balanceTitle: {
    color: COLORS.gray,
    fontSize: 18,
    paddingBottom: SIZES.padding,
  },
  balanceText: {
    color: COLORS.white,
  },
});
