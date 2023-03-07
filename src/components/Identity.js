import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ICONS } from "../constants";
import { Button } from "./Button";

export const Identity = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={ICONS.faceID} />
      <Text style={styles.title}>Verifiko identitetin</Text>
      <Text style={styles.subtitle}>
        Bazuar në ligjet në fuqi për sistemet e parasë elektronike dhe sistemet
        bankare në Republikën e Shqipërisë, është e nevojshme që të verifikoni
        identitetin tuaj për të përdorur shërbimet e PAY.
      </Text>
      <Button btnText={"Verifiko tani"} backgroundColor={"#0061a5"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 15,
    alignItems: "center",
    borderRadius: 20,
  },
  icon: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#7c7c7c",
    marginBottom: 20,
    paddingHorizontal: 35,
    textAlign: "center",
    lineHeight: 20,
  },
});
