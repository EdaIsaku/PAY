import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ICONS } from "../constants";
import { COLORS } from "../theme";

export const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAY</Text>
      <Pressable
        style={({ pressed }) => [
          styles.accountContainer,
          {
            backgroundColor: pressed ? "transparent" : "rgba(255,255,255,0.08)",
          },
        ]}
      >
        <Image source={ICONS.user} style={styles.icon} />
        <Text style={styles.text}>Llogaria</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accountContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 100,
    height: 35,
    borderWidth: 0.2,
    borderColor: "rgba(255,255,255,0.2)",
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    color: COLORS.white,
    fontWeight: "800",
    fontStyle: "italic",
    fontSize: 32,
    paddingLeft: 15,
    // fontFamily: "Lato-Black",
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: COLORS.white,
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
  },
});
